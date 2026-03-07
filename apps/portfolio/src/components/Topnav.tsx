"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@repo/ui/components/ui/button";
import { useTheme } from "next-themes";

import TransitionLink from "./TransitionLink";

const navItems = [
  { name: "Home", href: "/", id: "home" },
  { name: "Journey", href: "/journey", id: "journey" },
  { name: "Skills", href: "/skills", id: "skills" },
  { name: "Projects", href: "/projects", id: "projects" },
  { name: "Contact", href: "/contact", id: "contact" },
];

export default function Topnav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = mounted && resolvedTheme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="w-full px-6 lg:pl-0 lg:pr-12 bg-transparent z-50 border-b border-[#e2e8f0]">
        <div className="hidden md:flex items-center justify-between py-8">
          <div className="flex flex-col gap-3">
            <TransitionLink
              className="text-3xl font-medium text-[#1e293b]"
              href="/"
            >
              Jainik{" "}
              <span className="font-light bg-[#ffedd5]/70 px-1 text-[#1e293b]">
                Patel.
              </span>
            </TransitionLink>
          </div>

          <div className="flex items-center gap-4 md:gap-8 min-w-0">
            <Link
              className="flex items-center gap-1.5 px-3 py-2 text-sm text-[#1e293b] hover:text-[#f97316] transition-colors whitespace-nowrap"
              href="http://localhost:3007"
              rel="noopener noreferrer"
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
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" x2="21" y1="14" y2="3" />
              </svg>
              <span>Blog</span>
            </Link>

            <div className="flex items-center gap-3 text-[#1e293b]">
              <Link className="hover:text-[#f97316] transition-colors" href="#">
                <svg
                  fill="none"
                  height="18"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="18"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </Link>
              <span className="text-[#94a3b8]">|</span>
              <Link
                className="hover:text-[#f97316] transition-colors"
                href="https://linkedin.com/in/jainik-patel-461666203"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  fill="none"
                  height="18"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="18"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect height="12" width="4" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
              <span className="text-[#94a3b8]">|</span>
              <Link
                className="hover:text-[#f97316] transition-colors"
                href="mailto:jainikpatel1743@gmail.com"
              >
                <svg
                  fill="none"
                  height="18"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="18"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </Link>
            </div>

            <Button asChild className="h-9 px-4" size="sm" variant="outline">
              <Link
                href="/Jainik_Patel_React_Developer.pdf"
                rel="noopener noreferrer"
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
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
                Resume
              </Link>
            </Button>

            <Button
              aria-label="Toggle theme"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              size="icon"
              type="button"
              variant="ghost"
            >
              {isDark ? (
                <svg
                  fill="none"
                  height="18"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="18"
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" x2="12" y1="1" y2="3" />
                  <line x1="12" x2="12" y1="21" y2="23" />
                  <line x1="4.22" x2="5.64" y1="4.22" y2="5.64" />
                  <line x1="18.36" x2="19.78" y1="18.36" y2="19.78" />
                  <line x1="1" x2="3" y1="12" y2="12" />
                  <line x1="21" x2="23" y1="12" y2="12" />
                  <line x1="4.22" x2="5.64" y1="19.78" y2="18.36" />
                  <line x1="18.36" x2="19.78" y1="5.64" y2="4.22" />
                </svg>
              ) : (
                <svg
                  fill="none"
                  height="18"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="18"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </Button>
          </div>
        </div>

        <div className="flex md:hidden items-center justify-between py-5">
          <TransitionLink
            className="text-2xl font-semibold tracking-tight text-[#1e293b]"
            href="/"
          >
            Jainik{" "}
            <span className="font-light bg-[#ffedd5]/70 px-1 ml-0.5 text-[#1e293b]">
              Patel.
            </span>
          </TransitionLink>

          <div className="flex items-center gap-2">
            <Button
              aria-label="Toggle theme"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              size="icon"
              type="button"
              variant="ghost"
            >
              {isDark ? (
                <svg
                  fill="none"
                  height="18"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="18"
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" x2="12" y1="1" y2="3" />
                  <line x1="12" x2="12" y1="21" y2="23" />
                  <line x1="4.22" x2="5.64" y1="4.22" y2="5.64" />
                  <line x1="18.36" x2="19.78" y1="18.36" y2="19.78" />
                  <line x1="1" x2="3" y1="12" y2="12" />
                  <line x1="21" x2="23" y1="12" y2="12" />
                  <line x1="4.22" x2="5.64" y1="19.78" y2="18.36" />
                  <line x1="18.36" x2="19.78" y1="5.64" y2="4.22" />
                </svg>
              ) : (
                <svg
                  fill="none"
                  height="18"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="18"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </Button>
            <Button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((prev) => !prev)}
              size="icon"
              type="button"
              variant="ghost"
            >
              {menuOpen ? (
                <svg
                  fill="none"
                  height="22"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="22"
                >
                  <line x1="18" x2="6" y1="6" y2="18" />
                  <line x1="6" x2="18" y1="6" y2="18" />
                </svg>
              ) : (
                <svg
                  fill="none"
                  height="22"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="22"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="14" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
              )}
            </Button>
          </div>
        </div>
      </header>

      <div
        aria-hidden="true"
        className={`fixed inset-0 bg-black/40 z-[90] transition-opacity duration-300 lg:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />

      <nav
        className={`fixed top-0 left-0 h-screen w-72 bg-white dark:bg-[#0b1220] z-[95] flex flex-col pt-8 pb-10 px-8 shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-10">
          <TransitionLink
            className="text-2xl font-semibold tracking-tight text-[#1e293b]"
            href="/"
            onClick={closeMenu}
          >
            Jainik{" "}
            <span className="font-light bg-[#ffedd5]/70 px-1 ml-0.5 text-[#1e293b]">
              Patel.
            </span>
          </TransitionLink>
          <Button
            aria-label="Close menu"
            onClick={closeMenu}
            size="icon"
            type="button"
            variant="ghost"
          >
            <svg
              fill="none"
              height="22"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="22"
            >
              <line x1="18" x2="6" y1="6" y2="18" />
              <line x1="6" x2="18" y1="6" y2="18" />
            </svg>
          </Button>
        </div>

        <div className="flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <TransitionLink
                className={`relative flex items-center justify-between px-4 py-4 text-base font-medium transition-all duration-200 rounded-none ${
                  isActive
                    ? "text-[#ff5b00] font-semibold bg-[#fff3ee] dark:bg-[#152d56]"
                    : "text-[#1e293b] hover:text-[#ff5b00] hover:bg-[#f5f7fb] dark:hover:bg-[#102447]"
                }`}
                href={item.href}
                key={item.id}
                onClick={closeMenu}
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
        </div>
      </nav>
    </>
  );
}
