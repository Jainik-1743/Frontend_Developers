"use client";

import { usePathname } from "next/navigation";

import TransitionLink from "./TransitionLink";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", id: "home" },
    { name: "Journey", href: "/journey", id: "journey" },
    { name: "Skills", href: "/skills", id: "skills" },
    { name: "Projects", href: "/projects", id: "projects" },
    { name: "Contact", href: "/contact", id: "contact" },
  ];

  return (
    <aside className="portfolio-sidebar fixed left-0 top-0 h-screen w-72 bg-transparent flex flex-col pt-24 pb-8 z-40 hidden lg:flex">
      <nav className="flex flex-col w-full gap-1 mt-8 px-6">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <TransitionLink
              className={`portfolio-sidebar-link relative flex items-center justify-between px-4 py-3.5 w-full transition-all duration-200 rounded-none ${
                isActive
                  ? "portfolio-sidebar-link-active text-[#ff5b00] font-semibold bg-[#fff3ee]"
                  : "text-[#1e293b] hover:text-[#ff5b00] hover:bg-[#f5f7fb]"
              }`}
              href={item.href}
              key={item.id}
            >
              {isActive && (
                <span className="absolute left-0 top-2.5 bottom-2.5 w-[3px] rounded bg-[#ff6b00]" />
              )}
              <span>{item.name}</span>
              {isActive && (
                <svg
                  className="opacity-70"
                  fill="none"
                  height="16"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              )}
            </TransitionLink>
          );
        })}
      </nav>
    </aside>
  );
}
