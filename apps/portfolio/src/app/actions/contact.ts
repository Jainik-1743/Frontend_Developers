"use server";

import { PrismaPg } from "@prisma/adapter-pg";
import * as Sentry from "@sentry/nextjs";
import * as nodemailer from "nodemailer";

import { PrismaClient } from "../../generated/prisma/client";

// Prevent creating multiple instances of Prisma Client in development
const globalForPrisma = global as unknown as { prisma: PrismaClient };

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

export async function submitContactForm(formData: {
  title: string;
  email: string;
  message: string;
  captchaToken: string;
}) {
  try {
    Sentry.addBreadcrumb({
      category: "contact_form",
      message: "Submitting contact form",
      level: "info",
      data: { email: formData.email, title: formData.title },
    });

    // 0. Verify reCAPTCHA v3
    const verifyBody = new URLSearchParams({
      secret: process.env.CAPTCHA_SECRET_KEY || "",
      response: formData.captchaToken,
    });

    const verifyReq = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        body: verifyBody,
      },
    );

    const verifyRes = await verifyReq.json();
    console.log("reCAPTCHA v3 response:", JSON.stringify(verifyRes));

    // v3 returns a score from 0.0 (bot) to 1.0 (human)
    if (!verifyRes.success) {
      console.error("reCAPTCHA v3 verification failed:", verifyRes);
      Sentry.setTag("recaptcha_status", "failed");
      Sentry.setContext("recaptcha_response", verifyRes);
      return {
        success: false,
        error: `reCAPTCHA verification failed: ${verifyRes["error-codes"]?.join(", ") || "unknown error"}`,
      };
    }

    if (verifyRes.score < 0.3) {
      console.warn("reCAPTCHA v3 low score:", verifyRes.score);
      Sentry.setTag("recaptcha_status", "low_score");
      Sentry.setContext("recaptcha_response", verifyRes);
      return { success: false, error: "Submission blocked as potential spam." };
    }

    Sentry.setTag("recaptcha_status", "success");
    Sentry.setContext("form_data", {
      title: formData.title,
      email: formData.email,
    });

    // 1. Save to Database
    await prisma.contactMessage.create({
      data: {
        title: formData.title,
        email: formData.email,
        message: formData.message,
      },
    });

    // 2. Send email via Nodemailer
    await transporter.sendMail({
      from: `Portfolio Contact Form <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER || "jainikpatel1743@gmail.com", // Send to yourself
      replyTo: formData.email, // Ensures replies go back to the user who filled the form
      subject: `New Contact Message from ${formData.title}`,
      text: `Name/Title: ${formData.title}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
    });

    return { success: true };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    Sentry.captureException(error, {
      tags: { action: "submitContactForm" },
      extra: { formData },
    });
    return { success: false, error: "Failed to submit form" };
  }
}
