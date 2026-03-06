"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    title: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Database integration later
    alert("Form submitted! Database integration coming soon.");
  };

  return (
    <section className="w-full px-6 lg:px-12 py-16 max-w-7xl mx-auto">
      {/* Header */}
      <h2 className="text-3xl font-bold text-[#1e293b] mb-2">
        Let&apos;s{" "}
        <span className="underline decoration-[3px] underline-offset-4">
          Work Together
        </span>
      </h2>
      <p className="text-lg text-[#1e293b] mb-12">
        If you&apos;ve got a vision, I&apos;ve got skills,{" "}
        <span className="bg-[#ffedd5] px-2 py-0.5">
          let&apos;s create something impactful together.
        </span>
      </p>

      <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
        {/* Left: Form */}
        <form
          className="flex-1 flex flex-col gap-6 max-w-lg"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              className="block text-sm font-bold text-[#1e293b] mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="w-full px-4 py-3 bg-white border-b-2 border-[#e2e8f0] focus:border-[#1e293b] outline-none transition-colors text-[#1e293b] placeholder:text-[#94a3b8]"
              id="title"
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              placeholder="Enter Your Name..."
              type="text"
              value={formData.title}
            />
          </div>

          <div>
            <label
              className="block text-sm font-bold text-[#1e293b] mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-4 py-3 bg-white border-b-2 border-[#e2e8f0] focus:border-[#1e293b] outline-none transition-colors text-[#1e293b] placeholder:text-[#94a3b8]"
              id="email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="Enter Your Email..."
              type="email"
              value={formData.email}
            />
          </div>

          <div>
            <label
              className="block text-sm font-bold text-[#1e293b] mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full px-4 py-3 bg-white border-b-2 border-[#e2e8f0] focus:border-[#1e293b] outline-none transition-colors text-[#1e293b] placeholder:text-[#94a3b8] resize-y min-h-[120px]"
              id="message"
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Enter Your Message..."
              value={formData.message}
            />
          </div>

          {/* reCAPTCHA Placeholder */}
          <div className="flex items-center gap-3 p-4 border border-[#e2e8f0] rounded-md bg-[#fbf9f6] w-max">
            <input
              className="w-5 h-5 accent-[#1e293b]"
              id="captcha"
              type="checkbox"
            />
            <label className="text-sm text-[#64748b]" htmlFor="captcha">
              I&apos;m not a robot
            </label>
            <div className="ml-4 text-[10px] text-[#94a3b8] leading-tight">
              <div className="font-bold text-[#64748b]">reCAPTCHA</div>
              <div>Privacy - Terms</div>
            </div>
          </div>

          <button
            className="w-full bg-[#1e293b] hover:bg-[#0f172a] text-white font-bold py-4 rounded-lg transition-colors mt-2"
            type="submit"
          >
            Send
          </button>
        </form>

        {/* Right: Contact Info */}
        <div className="flex flex-col gap-8 md:pl-8 md:border-l-2 md:border-[#e2e8f0]">
          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#1e293b] rounded-lg flex items-center justify-center flex-shrink-0">
              <svg
                className="text-white"
                fill="none"
                height="20"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="20"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div>
              <h3 className="text-base font-bold text-[#1e293b]">Email</h3>
              <p className="text-[#64748b] text-sm">jainik@jainikpatel.com</p>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#1e293b] rounded-lg flex items-center justify-center flex-shrink-0">
              <svg
                className="text-white"
                fill="currentColor"
                height="20"
                viewBox="0 0 24 24"
                width="20"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <div>
              <h3 className="text-base font-bold text-[#1e293b]">WhatsApp</h3>
              <p className="text-[#64748b] text-sm">+91-XXXXXXXXXX</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#1e293b] rounded-lg flex items-center justify-center flex-shrink-0">
              <svg
                className="text-white"
                fill="none"
                height="20"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="20"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <h3 className="text-base font-bold text-[#1e293b]">Address</h3>
              <p className="text-[#64748b] text-sm">Gujarat, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
