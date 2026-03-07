import { notFound } from "next/navigation";
import BlogPostLayout from "../../components/BlogPostLayout";
import { blogs } from "../../lib/blog-posts";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  // Await the params object in Next.js 16
  const { slug } = await params;

  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <BlogPostLayout
      title={post.title}
      date={post.date}
      readTime={post.readTime}
    >
      {post.content}
    </BlogPostLayout>
  );
}
