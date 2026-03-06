import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between py-6 px-6 md:px-12 border-b border-white/5 bg-black/50 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center">
        <Link
          className="text-xl font-bold tracking-tight text-white hover:text-white/80 transition-colors"
          href="/"
        >
          Jainik Patel.
        </Link>
      </div>

      <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#888888]">
        <Link className="hover:text-white transition-colors" href="/">
          Home
        </Link>
        <Link className="hover:text-white transition-colors" href="#journey">
          Journey
        </Link>
        <Link className="hover:text-white transition-colors" href="#skills">
          Skills
        </Link>
        <Link className="hover:text-white transition-colors" href="#projects">
          Projects
        </Link>
        <Link className="hover:text-white transition-colors" href="#contact">
          Contact
        </Link>

        <span className="w-[1px] h-4 bg-white/20 mx-2"></span>

        <Link
          className="hover:text-white transition-colors"
          href="https://blog.jainikpatel.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Blog
        </Link>
        <Link
          className="hover:text-white transition-colors"
          href="/resume.pdf"
          rel="noopener noreferrer"
          target="_blank"
        >
          Resume
        </Link>
      </nav>

      {/* Mobile Menu Button Placeholder */}
      <button className="md:hidden text-white p-2">
        <svg
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6H20M4 12H20M4 18H20"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </button>
    </header>
  );
}
