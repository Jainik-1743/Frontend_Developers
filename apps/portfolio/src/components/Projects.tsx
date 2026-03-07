"use client";

import { useState } from "react";

import { Button } from "@repo/ui/components/ui/button";

const allProjects = [
  {
    id: 1,
    name: "RBAC Admin Dashboard",
    badge: "Professional",
    description:
      "Implemented secure Role-Based Access Control flows to manage Admin and User permissions with protected routes and clean access boundaries.",
    tech: ["React", "Next.js", "TypeScript", "RBAC"],
    link: "#",
    repo: "#",
  },
  {
    id: 2,
    name: "Responsive Web Platform",
    badge: "Professional",
    description:
      "Delivered responsive page layouts across mobile, tablet, and desktop with strong attention to consistency, spacing, and UX quality.",
    tech: ["React", "Tailwind CSS", "JavaScript", "UI/UX"],
    link: "#",
    repo: null,
  },
  {
    id: 3,
    name: "Reusable Component Library",
    badge: "Professional",
    description:
      "Built reusable React components and shared UI patterns that reduced code redundancy by 15% and improved long-term maintainability.",
    tech: ["React", "Storybook", "TypeScript", "Shadcn UI"],
    link: "#",
    repo: "#",
  },
  {
    id: 4,
    name: "Accessibility-First Interface",
    badge: "Personal",
    description:
      "Applied accessibility best practices to create user-friendly and inclusive interfaces with clear semantics and keyboard-friendly interactions.",
    tech: ["React", "HTML5", "CSS3", "A11y"],
    link: "#",
    repo: "#",
  },
  {
    id: 5,
    name: "Cross-Browser Stability Work",
    badge: "Professional",
    description:
      "Resolved cross-browser compatibility issues to ensure consistent behavior and visual output across all major modern browsers.",
    tech: ["React", "Testing", "Debugging", "Compatibility"],
    link: "#",
    repo: "#",
  },
  {
    id: 6,
    name: "Performance-Focused Frontend",
    badge: "Professional",
    description:
      "Focused on clean code and optimized components that contributed to a measurable 20% reduction in bugs and improved overall frontend performance.",
    tech: ["Next.js", "TypeScript", "SWR", "Performance"],
    link: "#",
    repo: "#",
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
        <h2 className="text-3xl font-bold tracking-tight text-[#1e293b]">
          My{" "}
          <span className="underline decoration-[3px] underline-offset-4">
            Projects
          </span>
        </h2>
        <div className="flex items-center gap-3 text-sm text-[#64748b]">
          <Button
            className="w-8 h-8 border border-[#e2e8f0] rounded flex items-center justify-center hover:bg-[#e2e8f0]/50 transition-colors p-0"
            size="icon"
            type="button"
            variant="outline"
          >
            &lt;
          </Button>
          <span className="w-8 h-8 border border-[#1e293b] rounded flex items-center justify-center text-[#1e293b] font-semibold bg-white">
            1
          </span>
          <Button
            className="w-8 h-8 border border-[#e2e8f0] rounded flex items-center justify-center hover:bg-[#e2e8f0]/50 transition-colors p-0"
            size="icon"
            type="button"
            variant="outline"
          >
            &gt;
          </Button>
          <span className="ml-4 px-3 py-1.5 border border-[#e2e8f0] rounded text-[#1e293b]">
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
                ? "bg-[#f97316] text-white"
                : "bg-white text-[#1e293b] border border-[#e2e8f0] hover:bg-[#e2e8f0]/50"
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
            className="flex flex-col bg-white border border-[#e2e8f0] rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
            key={project.id}
          >
            {/* Thumbnail Placeholder */}
            <div className="w-full h-56 bg-[#fbf9f6] relative overflow-hidden flex items-center justify-center border-b border-[#e2e8f0]">
              <span className="absolute top-4 right-4 px-3 py-1 bg-[#f97316] text-white text-xs font-bold rounded-full shadow-sm z-10">
                {project.badge}
              </span>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmJmOWY2Ij48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjZTJlOGYwIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-60" />
              <div className="text-[#94a3b8] font-mono text-sm tracking-widest z-10">
                IMAGE_PLACEHOLDER
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-[#1e293b] mb-3">
                {project.name}
              </h3>
              <p className="text-[#64748b] text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tool) => (
                  <span
                    className="px-3 py-1 text-xs font-medium text-[#1e293b] bg-white rounded-full border border-[#e2e8f0]"
                    key={tool}
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Footer Actions */}
              <div className="flex justify-between items-center mt-auto pt-4 border-t border-[#e2e8f0]/40">
                <div className="flex gap-2">
                  <a
                    className="flex items-center gap-1.5 text-xs font-bold text-white bg-[#0f172a] hover:bg-[#1e293b] px-4 py-2 rounded-lg transition-colors"
                    href={project.link}
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
                  {project.repo && (
                    <a
                      className="flex items-center justify-center w-8 h-8 text-white bg-[#0f172a] hover:bg-[#1e293b] rounded-lg transition-colors"
                      href={project.repo}
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
                <a
                  className="flex items-center gap-1.5 text-xs font-bold text-white bg-[#f97316] hover:bg-[#ea580c] px-4 py-2 rounded-lg transition-colors"
                  href={project.link}
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
