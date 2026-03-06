import Link from "next/link";

export default function BlogHeader() {
  return (
    <header className="w-full max-w-4xl mx-auto flex items-center justify-between py-8 px-6">
      <Link
        className="text-2xl font-bold tracking-tight text-[#1e293b]"
        href="/"
      >
        Jainik{" "}
        <span className="bg-[#ffedd5] px-1 ml-0.5 text-[#1e293b]">Blog.</span>
      </Link>
      <nav className="flex items-center gap-6 text-sm font-medium text-[#64748b]">
        <Link className="hover:text-[#f97316] transition-colors" href="/">
          All Posts
        </Link>
        <Link
          className="hover:text-[#f97316] transition-colors"
          href="http://localhost:3106"
        >
          ← Portfolio
        </Link>
      </nav>
    </header>
  );
}
