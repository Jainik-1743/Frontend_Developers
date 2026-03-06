import Link from "next/link";

import { Button } from "@repo/ui/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 flex-1 items-center justify-center max-w-3xl text-center">
        <h1 className="text-4xl font-bold">TanStack Query Examples</h1>
        <p className="text-muted-foreground text-lg">
          Explore different data fetching strategies using React Query and the
          JSONPlaceholder API.
        </p>

        <div className="grid gap-4 md:grid-cols-2 mt-8 w-full p-4">
          <Link href="/basic" passHref>
            <Button className="w-full text-lg h-16" variant="outline">
              1. Basic Data Fetching
            </Button>
          </Link>
          <Link href="/mutation" passHref>
            <Button className="w-full text-lg h-16" variant="outline">
              2. Mutations (Create Post)
            </Button>
          </Link>
          <Link href="/pagination" passHref>
            <Button className="w-full text-lg h-16" variant="outline">
              3. Pagination
            </Button>
          </Link>
          <Link href="/infinite" passHref>
            <Button className="w-full text-lg h-16" variant="outline">
              4. Infinite Scrolling
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
