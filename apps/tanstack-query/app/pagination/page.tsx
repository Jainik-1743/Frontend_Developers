"use client";

import { useState } from "react";

import Link from "next/link";

import { Button } from "@repo/ui/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
}

const fetchPostsPage = async (page: number, limit: number): Promise<Post[]> => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`,
  );
  return data;
};

export default function PaginationPage(): React.JSX.Element {
  const [page, setPage] = useState(1);
  const limit = 5;

  const { data, isLoading, isError, isPlaceholderData } = useQuery({
    queryKey: ["posts", "pagination", page],
    queryFn: () => fetchPostsPage(page, limit),
    // KEEP PREVIOUS DATA WHILE FETCHING NEXT PAGE FOR SMOOTHER UX
    placeholderData: (previousData) => previousData,
  });

  return (
    <div className="p-8 max-w-4xl mx-auto flex flex-col gap-6 font-[family-name:var(--font-geist-sans)]">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Pagination</h1>
          <p className="text-muted-foreground hidden sm:block">
            Smooth paginated data fetching
          </p>
        </div>
        <Link href="/" passHref>
          <Button variant="outline">Back Home</Button>
        </Link>
      </div>

      <div className="flex items-center justify-between border p-4 rounded-lg bg-card">
        <Button
          disabled={page === 1}
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          variant="secondary"
        >
          Previous Page
        </Button>
        <span className="font-semibold text-lg">Page {page}</span>
        <Button
          disabled={isPlaceholderData || data?.length !== limit || page >= 20}
          onClick={() => {
            // In a real app we determine if more pages exist from the API
            if (!isPlaceholderData && data?.length === limit) {
              setPage((old) => old + 1);
            }
          }}
          variant="secondary"
        >
          Next Page
        </Button>
      </div>

      <div
        className={`border rounded-lg p-6 bg-secondary/20 transition-opacity ${isPlaceholderData ? "opacity-50" : "opacity-100"}`}
      >
        {isLoading ? (
          <p className="text-xl animate-pulse">Loading posts...</p>
        ) : isError ? (
          <p className="text-destructive">Error fetching posts</p>
        ) : (
          <ul className="space-y-4">
            {data?.map((post) => (
              <li
                className="p-4 border rounded-md bg-background shadow-sm hover:shadow-md transition-shadow"
                key={post.id}
              >
                <span className="text-xs font-mono bg-muted px-2 py-1 rounded text-muted-foreground mb-2 inline-block">
                  ID: {post.id}
                </span>
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
