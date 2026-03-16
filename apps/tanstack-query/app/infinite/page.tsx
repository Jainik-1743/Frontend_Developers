"use client";

import { useEffect, useRef } from "react";

import Link from "next/link";

import { Button } from "@repo/ui/components/ui/button";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
}

const fetchPostsPage = async ({
  pageParam = 1,
}): Promise<{ data: Post[]; nextPage: number | null }> => {
  const limit = 5;
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?_page=${pageParam}&_limit=${limit}`,
  );
  return {
    data,
    nextPage: data.length === limit ? pageParam + 1 : null,
  };
};

export default function InfinitePage(): React.JSX.Element {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ["posts", "infinite"],
    queryFn: fetchPostsPage,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialPageParam: 1,
  });

  // Intersection Observer for Infinite Scrolling
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!hasNextPage) return;

    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0] && entries[0].isIntersecting && !isFetchingNextPage) {
        fetchNextPage();
      }
    });

    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current);
    }

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  const posts = data?.pages.flatMap((page) => page.data) || [];

  return (
    <div className="p-8 max-w-4xl mx-auto flex flex-col gap-6 font-[family-name:var(--font-geist-sans)]">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Infinite Scrolling</h1>
          <p className="text-muted-foreground hidden sm:block">
            Automatically fetch more when scrolling
          </p>
        </div>
        <Link href="/" passHref>
          <Button variant="outline">Back Home</Button>
        </Link>
      </div>

      <div className="border rounded-lg p-6 bg-secondary/20">
        {isLoading && (
          <p className="text-xl animate-pulse">Loading first posts...</p>
        )}
        {isError && <p className="text-destructive">Error fetching posts</p>}

        {posts.length > 0 && (
          <ul className="space-y-4 mb-4">
            {posts.map((post) => (
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

        <div className="py-4 text-center" ref={loadMoreRef}>
          {isFetchingNextPage ? (
            <p className="text-muted-foreground animate-pulse">
              Loading more...
            </p>
          ) : hasNextPage ? (
            <p className="text-muted-foreground">Scroll down to load more</p>
          ) : (
            <p className="text-muted-foreground">Nothing more to load</p>
          )}
        </div>
      </div>
    </div>
  );
}
