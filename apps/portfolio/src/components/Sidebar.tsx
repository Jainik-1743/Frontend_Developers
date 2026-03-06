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
    <aside className="fixed left-0 top-0 h-screen w-64 bg-transparent border-r border-[#e2e8f0]/40 flex flex-col pt-24 pb-8 z-40 hidden lg:flex">
      <nav className="flex flex-col w-full gap-2 mt-8">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <TransitionLink
              className={`relative flex items-center justify-between px-8 py-3 w-full transition-all duration-300 ${
                isActive
                  ? "text-[#f97316] font-semibold bg-gradient-to-r from-[#f97316]/10 to-transparent border-l-2 border-[#f97316]"
                  : "text-[#1e293b] hover:text-[#f97316] hover:bg-[#1e293b]/5 border-l-2 border-transparent"
              }`}
              href={item.href}
              key={item.id}
            >
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
