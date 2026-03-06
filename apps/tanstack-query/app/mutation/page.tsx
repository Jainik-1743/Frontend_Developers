"use client";

import { useState } from "react";

import Link from "next/link";

import { Button } from "@repo/ui/components/ui/button";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
}

const fetchPosts = async (): Promise<Post[]> => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts?_limit=5",
  );
  return data;
};

const createPost = async (newPost: Omit<Post, "id">): Promise<Post> => {
  const { data } = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    newPost,
  );
  return data;
};

export default function MutationPage() {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const { data: posts, isLoading } = useQuery({
    queryKey: ["posts", "mutation"],
    queryFn: fetchPosts,
  });

  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: (newPost) => {
      // In a real app we would invalidate queries to refetch from server:
      // queryClient.invalidateQueries({ queryKey: ["posts", "mutation"] });

      // But since JSONPlaceholder doesn't actually save the post, we optimistically update the cache
      queryClient.setQueryData(
        ["posts", "mutation"],
        (oldData: Post[] | undefined) => {
          return oldData ? [newPost, ...oldData] : [newPost];
        },
      );
      setTitle("");
      setBody("");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && body) {
      mutation.mutate({ title, body });
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto flex flex-col gap-6 font-[family-name:var(--font-geist-sans)]">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Mutations</h1>
          <p className="text-muted-foreground hidden sm:block">
            Creating and updating data with React Query
          </p>
        </div>
        <Link href="/" passHref>
          <Button variant="outline">Back Home</Button>
        </Link>
      </div>

      <form
        className="border p-6 rounded-lg bg-card shadow-sm flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-semibold">Create New Post</h2>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Title</label>
          <input
            className="border p-2 rounded-md bg-background"
            onChange={(e) => setTitle(e.target.value)}
            required
            type="text"
            value={title}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Body</label>
          <textarea
            className="border p-2 rounded-md bg-background h-24"
            onChange={(e) => setBody(e.target.value)}
            required
            value={body}
          />
        </div>
        <Button disabled={mutation.isPending} type="submit">
          {mutation.isPending ? "Creating..." : "Submit Post"}
        </Button>
      </form>

      <div className="border rounded-lg p-6 bg-secondary/20">
        <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
        {isLoading && <p>Loading posts...</p>}
        {posts && (
          <ul className="space-y-4">
            {posts.map((post) => (
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
