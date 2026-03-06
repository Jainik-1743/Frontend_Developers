import Link from "next/link";
import BlogHeader from "./components/BlogHeader";

const posts = [
  {
    slug: "react-performance",
    title: "Advanced React Performance Optimization",
    description:
      "A deep dive into fixing common performance bottlenecks in enterprise React applications. Learn when (and when not) to use useMemo, useCallback, and React.memo.",
    date: "March 6, 2026",
    readTime: "12 min read",
    tags: ["React", "Performance", "Enterprise"],
  },
  {
    slug: "nextjs-16-app-router",
    title: "Next.js 16 App Router: Best Practices",
    description:
      "A detailed guide on structuring and building applications using the Next.js 16 App Router, covering use cache, Server Actions, and optimal folder structures.",
    date: "March 4, 2026",
    readTime: "10 min read",
    tags: ["Next.js", "App Router", "Server Components"],
  },
  {
    slug: "zustand-vs-redux",
    title: "Modern State Management: Zustand vs. Redux Toolkit",
    description:
      "An architectural review comparing Zustand and Redux Toolkit for managing state in modern React applications. Which should you choose?",
    date: "March 2, 2026",
    readTime: "8 min read",
    tags: ["Zustand", "Redux", "State Management"],
  },
  {
    slug: "custom-hooks",
    title: "Mastering Custom Hooks for Reusable Logic",
    description:
      "A practical, code-heavy guide to building advanced custom hooks like useDebounce, useLocalStorage, and useIntersectionObserver.",
    date: "February 28, 2026",
    readTime: "9 min read",
    tags: ["React", "Custom Hooks", "TypeScript"],
  },
];

export default function BlogHome() {
  return (
    <div className="min-h-screen">
      <BlogHeader />
      <main className="max-w-4xl mx-auto px-6 pb-20">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-[#1e293b] mb-3">
            Technical{" "}
            <span className="underline decoration-[3px] decoration-[#f97316] underline-offset-4">
              Blog
            </span>
          </h1>
          <p className="text-lg text-[#64748b]">
            Thoughts on React, Next.js, architecture, and building scalable web
            applications.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <Link
              className="group block p-6 bg-white border border-[#e2e8f0] rounded-xl hover:shadow-lg hover:border-[#f97316]/30 transition-all duration-300"
              href={`/blog/${post.slug}`}
              key={post.slug}
            >
              <div className="flex items-center gap-3 mb-3 text-xs text-[#64748b]">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-xl font-bold text-[#1e293b] group-hover:text-[#f97316] transition-colors mb-2">
                {post.title}
              </h2>
              <p className="text-[#64748b] text-sm leading-relaxed mb-4">
                {post.description}
              </p>
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <span
                    className="px-3 py-1 text-xs font-medium text-[#1e293b] bg-[#fbf9f6] rounded-full border border-[#e2e8f0]"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
