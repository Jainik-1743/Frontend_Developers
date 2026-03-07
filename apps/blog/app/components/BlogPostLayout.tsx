import Link from "next/link";
import React from "react";
import BlogHeader from "./BlogHeader";

interface BlogLayoutProps {
  title: string;
  date: string;
  readTime: string;
  children: React.ReactNode;
}

export default function BlogPostLayout({
  title,
  date,
  readTime,
  children,
}: BlogLayoutProps) {
  return (
    <div className="min-h-screen">
      <BlogHeader />
      <article className="prose max-w-4xl mx-auto px-6 pb-20">
        <div className="mb-8">
          <Link className="text-sm text-[#f97316] hover:underline" href="/blog">
            ← Back to all posts
          </Link>
        </div>
        <div className="flex items-center gap-3 mb-4 text-xs text-[#64748b]">
          <span>{date}</span>
          <span>·</span>
          <span>{readTime}</span>
        </div>

        <h1>{title}</h1>

        {children}
      </article>
    </div>
  );
}
