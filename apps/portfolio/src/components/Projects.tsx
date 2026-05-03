"use client";

import { useState } from "react";

import Image from "next/image";

import { Button } from "@repo/ui/components/ui/button";

const allProjects = [
  {
    id: 1,
    name: "Galamela",
    badge: "Professional",
    description:
      "Event Management & Marketplace Platform – An online marketplace that connects customers (corporate & consumer) with vendors for hassle-free celebrations and event planning.\n\nVendor Marketplace – Seamlessly connects users with vendors across categories like resorts, banquet halls, photographers, caterers, decorators, and more.\n\nSecure Payments – Integrated Stripe for seamless booking, subscription packages, and vendor payouts.\n\nResponsive & Modern UI – Built with Shadcn UI components and Tailwind CSS for a clean, accessible, and mobile-friendly user experience.",
    tech: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "React Hook Form",
      "Zod",
      "TanStack React Query",
      "Tailwind CSS",
      "Shadcn UI",
      "Stripe",
      "Firebase",
      "Zustand",
      "Better Auth",
    ],
    link: null,
    repo: null,
    image: null,
  },
  {
    id: 2,
    name: "Travel & Vacation Rental Platform",
    badge: "Professional",
    description:
      "Last-Minute Vacation Rental Marketplace – A platform that connects travelers with discounted last-minute vacation rentals.\n\nSmart Deal Discovery – Real-time listing aggregation from property managers, surfacing deals within 30 days of check-in with dynamic pricing and hourly refresh.\n\nPrice Comparison Engine – Side-by-side price comparison with major vacation rental platforms, showing all-in pricing including taxes and fees upfront.\n\nPrice Drop Alerts – Automated notification system alerting users when prices drop for their preferred destinations and travel dates.\n\nAdvanced Search & Filters – Location-based search with filters for price, pet-friendly, ADA-compliant, amenities, and flexible date ranges with interactive map view.\n\nSecure Booking & Payments – Instant booking confirmation, secure payment processing, flexible pay-over-time options, and refund protection for travelers.\n\nResponsive & Cross-Platform – Mobile-first responsive design with dedicated iOS/Android apps for exclusive last-minute deals and booking management.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "React Hook Form",
      "Tailwind CSS",
      "REST APIs",
    ],
    link: null,
    repo: null,
    image: null,
  },
  {
    id: 3,
    name: "Todo App",
    badge: "Personal",
    description:
      "My first project ever. A simple and elegant Todo application built to understand the fundamentals of web development and state management.",
    tech: ["React", "CSS", "JavaScript"],
    link: "https://todo-teal-nine.vercel.app/",
    repo: "https://github.com/Jainik-1743",
    image: "/images/todo.png",
  },
  {
    id: 4,
    name: "Personal Blog",
    badge: "Personal",
    description:
      "A personal blog platform to share insights and learnings about web development, featuring markdown support, categories, and responsive design.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vercel Analytics",
    ],
    link: "https://blog-jainikpatel.vercel.app/",
    repo: "https://github.com/Jainik-1743",
    image: "/images/blog.png",
  },
  {
    id: 5,
    name: "Wordl",
    badge: "Personal",
    description:
      "A highly interactive clone of the popular Wordle game with custom themes, keyboard support, animations, and local state persistence.",
    tech: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Drizzle ORM",
      "PostgreSQL",
      "Framer Motion",
    ],
    link: "https://wordl-steel.vercel.app/",
    repo: "https://github.com/Jainik-1743",
    image: "/images/wordle.png",
  },
  {
    id: 6,
    name: "UtsavOps",
    badge: "Personal",
    description:
      "A modern event management platform built using TanStack Start. Features include authentication, database integration with Drizzle ORM, and a sleek UI with Shadcn and Tailwind CSS.",
    tech: [
      "TanStack Start",
      "TypeScript",
      "Tailwind CSS",
      "Drizzle ORM",
      "Supabase",
      "TanStack Query",
      "Shadcn UI",
    ],
    link: "https://utsav-ops.vercel.app/",
    repo: "https://github.com/Jainik-1743",
    image: "/images/utsav-ops.png",
  },
  {
    id: 7,
    name: "Trizon Enterprise",
    badge: "Personal",
    description:
      "A professional corporate website for an industrial electrical systems company specializing in ATS, MTS, and aluminum/copper busbars.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://trizon-enterprise.vercel.app/",
    repo: "https://github.com/Jainik-1743",
    image: "/images/trizone.png",
  },
  {
    id: 8,
    name: "FinanceHub Calculator",
    badge: "Personal",
    description:
      "A comprehensive financial tool offering SIP calculation with step-up options, visualizing wealth creation and investment growth.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
    link: "https://financehub-calculator.vercel.app/",
    repo: "https://github.com/Jainik-1743",
    image: "/images/sip.png",
  },
];

const tabs = ["All", "Professional", "Personal"];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered =
    activeTab === "All"
      ? allProjects
      : allProjects.filter((p) => p.badge === activeTab);

  return (
    <section className="w-full px-6 lg:px-12 py-16" id="projects">
      {/* Header Row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          My{" "}
          <span className="underline decoration-[3px] underline-offset-4">
            Projects
          </span>
        </h2>
        <div className="flex items-center gap-3 text-sm text-muted">
          <Button
            className="w-8 h-8 border border-border rounded flex items-center justify-center hover:bg-border/50 transition-colors p-0"
            size="icon"
            type="button"
            variant="outline"
          >
            &lt;
          </Button>
          <span className="w-8 h-8 border border-foreground rounded flex items-center justify-center text-foreground font-semibold bg-background">
            1
          </span>
          <Button
            className="w-8 h-8 border border-border rounded flex items-center justify-center hover:bg-border/50 transition-colors p-0"
            size="icon"
            type="button"
            variant="outline"
          >
            &gt;
          </Button>
          <span className="ml-4 px-3 py-1.5 border border-border rounded text-foreground">
            10 / page
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-10">
        {tabs.map((tab) => (
          <Button
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
              activeTab === tab
                ? "bg-accent text-white"
                : "bg-background text-foreground border border-border hover:bg-muted"
            }`}
            key={tab}
            onClick={() => setActiveTab(tab)}
            type="button"
            variant="ghost"
          >
            {tab}
          </Button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filtered.map((project) => (
          <div
            className="flex flex-col bg-background border border-border rounded-xl overflow-hidden hover:shadow-xl dark:hover:border-muted-foreground/30 hover:border-foreground/20 transition-all duration-300"
            key={project.id}
          >
            {/* Thumbnail Placeholder */}
            {project.badge !== "Professional" && (
              <div className="w-full h-56 bg-background relative overflow-hidden flex items-center justify-center border-b border-border group">
                <span className="absolute top-4 right-4 px-3 py-1 bg-accent text-white text-xs font-bold rounded-full shadow-sm z-10">
                  {project.badge}
                </span>
                {project.image ? (
                  <Image
                    alt={`${project.name} preview`}
                    className="object-cover object-top w-full h-full transition-transform duration-500 group-hover:scale-105"
                    height={500}
                    loading="lazy"
                    src={project.image}
                    width={500}
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmJmOWY2Ij48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjZTJlOGYwIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-60" />
                    <div className="text-muted font-mono text-sm tracking-widest z-10">
                      IMAGE_PLACEHOLDER
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-foreground">
                  {project.name}
                </h3>
                {project.badge === "Professional" && (
                  <span className="px-3 py-1 bg-accent text-white text-xs font-bold rounded-full shadow-sm">
                    {project.badge}
                  </span>
                )}
              </div>
              <p className="text-muted text-sm leading-relaxed mb-6 flex-grow whitespace-pre-line">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tool) => (
                  <span
                    className="px-3 py-1 text-xs font-medium text-foreground bg-background rounded-full border border-border"
                    key={tool}
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Footer Actions */}
              {(project.link || project.repo) && (
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-border/40">
                  <div className="flex gap-2">
                    {project.link && (
                      <a
                        className="flex items-center gap-1.5 text-xs font-bold text-background bg-foreground hover:opacity-80 px-4 py-2 rounded-lg transition-all"
                        href={project.link}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <svg
                          fill="none"
                          height="14"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="14"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="2" x2="22" y1="12" y2="12" />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                        WEB
                      </a>
                    )}
                    {project.repo && (
                      <a
                        className="flex items-center justify-center w-8 h-8 text-background bg-foreground hover:opacity-80 rounded-lg transition-all"
                        href={project.repo}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <svg
                          fill="currentColor"
                          height="14"
                          viewBox="0 0 24 24"
                          width="14"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 2C6.477 2 2 6.484 2 12.017C2 16.441 4.869 20.19 8.839 21.498C9.339 21.594 9.52 21.284 9.52 21.021C9.52 20.783 9.511 20.007 9.506 19.135C6.726 19.741 6.14 17.801 6.14 17.801C5.686 16.647 5.032 16.34 5.032 16.34C4.128 15.72 5.101 15.733 5.101 15.733C6.101 15.803 6.627 16.762 6.627 16.762C7.514 18.28 8.956 17.842 9.539 17.584C9.629 16.924 9.896 16.486 10.191 16.236C7.973 15.98 5.64 15.122 5.64 11.488C5.64 10.453 6.011 9.605 6.618 8.951C6.521 8.696 6.195 7.734 6.711 6.425C6.711 6.425 7.508 6.171 9.497 7.517C10.254 7.306 11.066 7.201 11.875 7.197C12.684 7.201 13.496 7.306 14.254 7.517C16.242 6.171 17.038 6.425 17.038 6.425C17.555 7.734 17.228 8.696 17.132 8.951C17.74 9.605 18.109 10.453 18.109 11.488C18.109 15.132 15.772 15.975 13.546 16.223C13.916 16.541 14.246 17.167 14.246 18.125C14.246 19.497 14.235 20.601 14.235 20.941C14.235 21.288 14.414 21.605 14.922 21.496C18.89 20.185 21.75 16.438 21.75 12.017C21.75 6.484 17.273 2 12 2Z" />
                        </svg>
                      </a>
                    )}
                  </div>
                  {project.link && (
                    <a
                      className="flex items-center gap-1.5 text-xs font-bold text-white bg-accent hover:opacity-90 px-4 py-2 rounded-lg transition-all"
                      href={project.link}
                      rel="noreferrer"
                      target="_blank"
                    >
                      View
                      <svg
                        fill="none"
                        height="14"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="14"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line x1="7" x2="17" y1="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
