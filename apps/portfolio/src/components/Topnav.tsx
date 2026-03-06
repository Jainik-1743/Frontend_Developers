import Link from "next/link";

import TransitionLink from "./TransitionLink";

export default function Topnav() {
  return (
    <header className="w-full flex items-center justify-between py-8 px-6 lg:pl-0 lg:pr-12 bg-transparent z-50">
      <div className="flex items-center">
        <TransitionLink
          className="text-2xl font-bold tracking-tight text-[#1e293b]"
          href="/"
        >
          Jainik{" "}
          <span className="bg-[#ffedd5] px-1 ml-0.5 text-[#1e293b]">
            Patel.
          </span>
        </TransitionLink>
      </div>

      <nav className="flex items-center gap-4 text-sm font-semibold text-[#1e293b]">
        <Link
          className="hover:text-[#f97316] transition-colors flex items-center gap-1.5"
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
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" x2="21" y1="14" y2="3"></line>
          </svg>
          Blog
        </Link>

        {/* Social Icons Placeholder */}
        <div className="flex items-center gap-3 border-l border-r border-[#e2e8f0] px-4 mx-1">
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
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </Link>
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
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect height="12" width="4" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </Link>
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
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </Link>
        </div>

        <Link
          className="flex items-center gap-1.5 px-3 py-1.5 border border-[#e2e8f0] rounded-md hover:bg-[#e2e8f0]/50 transition-colors"
          href="/resume.pdf"
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
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" x2="12" y1="15" y2="3"></line>
          </svg>
          Resume
        </Link>

        {/* Dark Mode Toggle Placeholder */}
        <button className="ml-2 hover:text-[#f97316] transition-colors p-1">
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
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </button>
      </nav>
    </header>
  );
}
