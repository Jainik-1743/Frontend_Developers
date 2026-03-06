"use client";

import Link from "next/link";

import { Button } from "@repo/ui/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
}

const fetchPosts = async (): Promise<Post[]> => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts?_limit=10",
  );
  return data;
};

export default function BasicPage() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts", "basic"],
    queryFn: fetchPosts,
  });

  return (
    <div className="p-8 max-w-4xl mx-auto flex flex-col gap-6 font-[family-name:var(--font-geist-sans)]">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Basic Data Fetching</h1>
          <p className="text-muted-foreground hidden sm:block">
            Demonstrates simple fetch with caching
          </p>
        </div>
        <Link href="/" passHref>
          <Button variant="outline">Back Home</Button>
        </Link>
      </div>

      <div className="border rounded-lg p-6 bg-secondary/20">
        {isLoading && <p className="text-xl animate-pulse">Loading posts...</p>}
        {isError && <p className="text-destructive">Error: {error?.message}</p>}
        {data && (
          <ul className="space-y-4">
            {data.map((post) => (
              <li
                className="p-4 border rounded-md bg-background shadow-sm hover:shadow-md transition-shadow"
                key={post.id}
              >
                <h3 className="font-semibold text-lg capitalize">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mt-2">{post.body}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
