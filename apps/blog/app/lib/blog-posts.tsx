import React from "react";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  content: React.ReactNode;
}

export const blogs: BlogPost[] = [
  {
    slug: "react-performance",
    title: "Advanced React Performance Optimization",
    description:
      "A deep dive into fixing common performance bottlenecks in enterprise React applications. Learn when (and when not) to use useMemo, useCallback, and React.memo.",
    date: "March 6, 2026",
    readTime: "12 min read",
    tags: ["React", "Performance", "Enterprise"],
    content: (
      <>
        <p>
          After 3.5+ years building scalable enterprise React applications,
          I&apos;ve learned that performance optimization is both an art and a
          science. Most developers reach for <code>useMemo</code> and{" "}
          <code>React.memo</code> too early, or use them incorrectly. This guide
          covers the when, why, and how of real-world React performance tuning.
        </p>

        <hr className="my-8 border-[#e2e8f0]" />

        <h2>1. The React Reconciliation Process</h2>

        <p>
          Before optimizing anything, you need to understand{" "}
          <strong>how React decides what to re-render</strong>. React uses a
          process called &quot;reconciliation&quot; — a diffing algorithm that
          compares the previous Virtual DOM tree with the new one.
        </p>

        <p>
          Here&apos;s the key insight:{" "}
          <strong>
            React re-renders a component whenever its parent re-renders
          </strong>
          , regardless of whether props have changed. This is the #1 source of
          unnecessary renders in enterprise apps.
        </p>

        <pre>
          <code>{`// Every time App re-renders, ExpensiveList re-renders too
// even if 'items' hasn't changed!
function App() {
  const [count, setCount] = useState(0);
  const items = getItems(); // Same reference? Depends.

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>
        Count: {count}
      </button>
      <ExpensiveList items={items} />
    </div>
  );
}`}</code>
        </pre>

        <h2>2. When to Use useMemo, useCallback, and React.memo</h2>

        <h3>
          ✅ Use <code>useMemo</code> when:
        </h3>
        <ul>
          <li>
            You have computationally expensive calculations (filtering/sorting
            large datasets)
          </li>
          <li>
            You need referential equality for objects/arrays passed as props to
            memoized children
          </li>
          <li>You&apos;re computing derived state from expensive operations</li>
        </ul>

        <h3>
          ✅ Use <code>useCallback</code> when:
        </h3>
        <ul>
          <li>
            Passing callbacks to memoized child components (
            <code>React.memo</code>)
          </li>
          <li>
            The callback is a dependency in another hook&apos;s dependency array
          </li>
          <li>
            The callback is used in an effect that shouldn&apos;t re-run
            unnecessarily
          </li>
        </ul>

        <h3>❌ When NOT to use them:</h3>
        <ul>
          <li>
            <strong>Simple calculations</strong> — The overhead of memoization
            itself is more expensive
          </li>
          <li>
            <strong>Primitive props</strong> — Strings, numbers, and booleans
            are compared by value anyway
          </li>
          <li>
            <strong>Components that always re-render</strong> — If the parent
            always provides new data, memoization is wasted
          </li>
        </ul>

        <h2>3. Bad Code vs. Good Code</h2>

        <h3>❌ Bad: Unnecessary re-renders in a list</h3>
        <pre>
          <code>{`function UserList({ users }: { users: User[] }) {
  // This creates a new function on every render!
  const handleClick = (id: string) => {
    console.log('Clicked:', id);
  };

  // This creates a new filtered array every render!
  const activeUsers = users.filter(u => u.isActive);

  return (
    <div>
      {activeUsers.map(user => (
        <UserCard
          key={user.id}
          user={user}
          onClick={() => handleClick(user.id)}
        />
      ))}
    </div>
  );
}`}</code>
        </pre>

        <h3>✅ Good: Properly optimized list</h3>
        <pre>
          <code>{`const UserCard = React.memo(({ user, onClick }: UserCardProps) => {
  return (
    <div onClick={onClick}>
      <h3>{user.name}</h3>
      <span>{user.email}</span>
    </div>
  );
});

function UserList({ users }: { users: User[] }) {
  const activeUsers = useMemo(
    () => users.filter(u => u.isActive),
    [users]
  );

  const handleClick = useCallback((id: string) => {
    console.log('Clicked:', id);
  }, []);

  return (
    <div>
      {activeUsers.map(user => (
        <UserCard
          key={user.id}
          user={user}
          onClick={() => handleClick(user.id)}
        />
      ))}
    </div>
  );
}`}</code>
        </pre>

        <h2>4. Advanced: React Fiber Architecture</h2>

        <p>
          React Fiber is the reimplementation of React&apos;s core algorithm
          introduced in React 16. The key innovation is that{" "}
          <strong>rendering work can be split into chunks</strong> and spread
          across multiple frames.
        </p>

        <p>This enables:</p>
        <ul>
          <li>
            <strong>Concurrent rendering</strong> — React can pause, abort, or
            restart rendering
          </li>
          <li>
            <strong>Priority-based updates</strong> — User interactions get
            higher priority than background data
          </li>
          <li>
            <strong>Suspense</strong> — Components can &quot;suspend&quot;
            rendering while waiting for async data
          </li>
        </ul>

        <h2>5. Interview Q&amp;A: Fiber Architecture</h2>

        <h3>
          Q1: What is a &quot;Fiber&quot; in React, and how does it differ from
          the old &quot;Stack Reconciler&quot;?
        </h3>
        <p>
          <strong>Answer:</strong> A Fiber is a JavaScript object that
          represents a unit of work. Unlike the old stack-based reconciler which
          processed the entire tree synchronously (blocking the main thread),
          Fiber breaks work into units that can be paused, prioritized, and
          resumed. Each Fiber node contains information about the component, its
          props, state, and pointers to its parent, child, and sibling fibers (a
          linked list structure).
        </p>

        <h3>
          Q2: Explain the two phases of React&apos;s rendering process and why
          they matter for performance.
        </h3>
        <p>
          <strong>Answer:</strong> The <strong>Render phase</strong>{" "}
          (interruptible) is where React builds the work-in-progress tree by
          calling render functions and diffing. This phase produces no side
          effects. The <strong>Commit phase</strong> (synchronous,
          non-interruptible) is where React applies changes to the actual DOM
          and runs lifecycle methods/effects. Understanding this split matters
          because expensive logic in the render phase can be
          &quot;time-sliced,&quot; while commit-phase work blocks the main
          thread.
        </p>

        <h3>
          Q3: How does React decide the priority of updates, and how does{" "}
          <code>useTransition</code> leverage this?
        </h3>
        <p>
          <strong>Answer:</strong> React assigns &quot;lanes&quot; (priority
          levels) to updates. User-triggered events (click, input) are
          high-priority &quot;Sync&quot; lanes, while transitions are
          &quot;Default&quot; or &quot;Transition&quot; lanes.{" "}
          <code>useTransition</code> marks a state update as non-urgent, telling
          React it can be interrupted by higher-priority work. This keeps the UI
          responsive during expensive re-renders — for example, filtering a
          large list won&apos;t block typing in an input field.
        </p>

        <hr className="my-8 border-[#e2e8f0]" />

        <p>
          <strong>Key takeaway:</strong> Don&apos;t optimize prematurely. Use
          React DevTools Profiler to identify actual bottlenecks, then apply the
          right tool. Most performance issues come from unnecessary re-renders
          caused by improper component structure, not missing memoization.
        </p>
      </>
    ),
  },
  {
    slug: "nextjs-16-app-router",
    title: "Next.js 16 App Router: Best Practices",
    description:
      "A detailed guide on structuring and building applications using the Next.js 16 App Router, covering use cache, Server Actions, and optimal folder structures.",
    date: "March 4, 2026",
    readTime: "10 min read",
    tags: ["Next.js", "App Router", "Server Components"],
    content: (
      <>
        <p>
          Next.js 16 has solidified the App Router as the modern way to build
          full-stack React applications. By shifting closer to the server, we
          get less JavaScript to the client, better SEO, and faster initial page
          loads. However, the mental model shift from Pages Router is
          substantial. This guide covers the practical aspects of structuring
          Next.js 16 apps effectively.
        </p>

        <hr className="my-8 border-[#e2e8f0]" />

        <h2>1. The Power of React Server Components (RSC)</h2>

        <p>
          In the App Router,{" "}
          <strong>components are server-side by default</strong>. Instead of
          wrapping entire pages in `getServerSideProps`, each individual
          component can asynchronously fetch its own data. This completely
          changes how you build layouts.
        </p>

        <pre>
          <code>{`// app/dashboard/page.tsx
// This is a Server Component. It can be async!
import { Suspense } from 'react';
import { UserProfile, UserProfileSkeleton } from './components';

export default async function DashboardPage() {
  return (
    <main>
      <h1>Your Dashboard</h1>
      {/* Streaming architecture in action */}
      <Suspense fallback={<UserProfileSkeleton />}>
        <UserProfile />
      </Suspense>
    </main>
  );
}`}</code>
        </pre>

        <h2>2. Data Fetching and Caching</h2>

        <p>
          Next.js 16 introduced more granular controls over the Node.js `fetch`
          API. The framework will automatically deduplicate `fetch` requests and
          allows you to control cache invalidation cleanly.
        </p>

        <ul>
          <li>
            <strong>`force-cache`</strong>: Equivalent to `getStaticProps`.
          </li>
          <li>
            <strong>`no-store`</strong>: Equivalent to `getServerSideProps`—data
            is fetched on every request.
          </li>
          <li>
            <strong>ISR (Incremental Static Regeneration)</strong>: Passing{" "}
            <code>{`{ next: { revalidate: 60 } }`}</code> to fetch.
          </li>
        </ul>

        <h2>3. Server Actions for Mutations</h2>

        <p>
          Server Actions eliminate the need to manually build API routes for
          form submissions. They are asynchronous server functions that can be
          called directly from Client or Server components.
        </p>

        <pre>
          <code>{`// app/actions/user.ts
'use server'

import { revalidatePath } from 'next/cache';
import db from '@/lib/db';

export async function updateUserProfile(formData: FormData) {
  const name = formData.get('name');
  await db.user.update({ data: { name } });
  
  // Re-fetch data on the targeted path
  revalidatePath('/dashboard');
}`}</code>
        </pre>

        <h2>Summary</h2>
        <p>
          Embrace Server Components wherever possible and keep Client Components
          pushed down to the leaves of the render tree (where interactability is
          needed). This structural shift provides unparalleled performance when
          leveraged correctly.
        </p>
      </>
    ),
  },
  {
    slug: "zustand-vs-redux",
    title: "Modern State Management: Zustand vs. Redux Toolkit",
    description:
      "An architectural review comparing Zustand and Redux Toolkit for managing state in modern React applications. Which should you choose?",
    date: "March 2, 2026",
    readTime: "8 min read",
    tags: ["Zustand", "Redux", "State Management"],
    content: (
      <>
        <p>
          State management in React has evolved rapidly. Today, you no longer
          need complex flux-architecture boilerplate for small to medium state.
          Zustand and Redux Toolkit are the heavyweights in 2026. Here is my
          perspective on how to choose between them.
        </p>

        <hr className="my-8 border-[#e2e8f0]" />

        <h2>Zustand: The Elegant Minimalist</h2>
        <p>
          Zustand solves global state by discarding the Context API provider
          hell and simply hooking into React&apos;s external store mechanisms.
          It relies on a single hook, which you can create without wrapping your
          app.
        </p>

        <pre>
          <code>{`import { create } from 'zustand'

type BearStore = {
  bears: number
  increasePopulation: () => void
  removeAllBears: () => void
}

const useBearStore = create<BearStore>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))`}</code>
        </pre>

        <h2>Redux Toolkit: The Enterprise Standard</h2>
        <p>
          Redux Toolkit (RTK) takes classic Redux and strips out the
          boilerplate. When building enterprise software requiring advanced
          devtools, time-travel debugging, or complex side-effect management
          (like RTK Query or Observables), RTK is undefeated.
        </p>

        <h2>The Verdict</h2>
        <p>
          For 80% of projects, Zustand will be vastly faster to set up and
          easier to maintain. However, for large enterprise apps with strict
          architecture rules, use Redux Toolkit.
        </p>
      </>
    ),
  },
  {
    slug: "custom-hooks",
    title: "Mastering Custom Hooks for Reusable Logic",
    description:
      "A practical, code-heavy guide to building advanced custom hooks like useDebounce, useLocalStorage, and useIntersectionObserver.",
    date: "February 28, 2026",
    readTime: "9 min read",
    tags: ["React", "Custom Hooks", "TypeScript"],
    content: (
      <>
        <p>
          Custom hooks are React&apos;s answer to logic reuse. Instead of higher
          order components (HOCs) or render props, hooks let you cleanly
          encapsulate stateful behavior. Let&apos;s build some of the most
          essential hooks you&apos;ll need in any production app.
        </p>

        <hr className="my-8 border-[#e2e8f0]" />

        <h2>
          1. The <code>useDebounce</code> Hook
        </h2>
        <p>
          If you have a search input that fetches on every keystroke, you will
          rapidly hit API rate limits. <code>useDebounce</code> delays the
          effect.
        </p>
        <pre>
          <code>{`import { useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}`}</code>
        </pre>

        <h2>
          2. The <code>useLocalStorage</code> Hook
        </h2>
        <p>
          Syncing state to `localStorage` while retaining SSR safety. It
          supports generic types out of the box.
        </p>
        <pre>
          <code>{`import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.warn(error);
    }
  };

  return [storedValue, setValue] as const;
}`}</code>
        </pre>
      </>
    ),
  },
  {
    slug: "react-19-hooks",
    title: "React 19 Hooks: A Paradigm Shift",
    description:
      "An overview of the new React 19 hooks including useActionState, useOptimistic, and useFormStatus that are changing how we handle forms.",
    date: "March 10, 2026",
    readTime: "11 min read",
    tags: ["React 19", "Hooks", "Forms"],
    content: (
      <>
        <p>
          React 19 brings some of the biggest API additions since Hooks were
          first introduced in version 16.8. The core focus is around Server
          Actions and simplified form management. You no longer need heavy
          external libraries for rudimentary forms!
        </p>

        <hr className="my-8 border-[#e2e8f0]" />

        <h2>
          1. The <code>useActionState</code> Hook
        </h2>

        <p>
          Managing loading states, errors, and success states for Server Actions
          used to require writing manual state updates.{" "}
          <code>useActionState</code>
          (formerly useFormState) streamlines this completely.
        </p>

        <pre>
          <code>{`import { useActionState } from 'react';
import { submitForm } from './actions';

export default function CommentForm() {
  const [state, action, pending] = useActionState(submitForm, null);

  return (
    <form action={action}>
      <input name="comment" required />
      <button disabled={pending}>
        {pending ? 'Submitting...' : 'Submit'}
      </button>
      {state?.error && <p className="text-red-500">{state.error}</p>}
    </form>
  )
}`}</code>
        </pre>

        <h2>
          2. Implementing <code>useOptimistic</code>
        </h2>

        <p>
          Users expect zero latency. When a user clicks &quot;Like&quot;, the UI
          should update instantly. If the server request fails, the UI reverts.
          <code>useOptimistic</code> bakes this paradigm directly into React.
        </p>

        <pre>
          <code>{`import { useOptimistic } from 'react';

function LikeButton({ initialLikes, action }) {
  const [optimisticLikes, addOptimisticLike] = useOptimistic(
    initialLikes,
    (state, amount) => state + amount
  );

  return (
    <form action={async () => {
      addOptimisticLike(1); // Immediate UI update
      await action(); // Server logic
    }}>
      <button type="submit">Likes: {optimisticLikes}</button>
    </form>
  );
}`}</code>
        </pre>

        <p>
          By leveraging these hooks, we massively reduce boilerplate and make
          complex user interfaces much simpler to build.
        </p>
      </>
    ),
  },
  {
    slug: "tailwindcss-v4",
    title: "Embracing Tailwind CSS v4: What's New?",
    description:
      "An exploration of Tailwind v4's new engine, simplified configuration files, native container queries, and how it accelerates styling.",
    date: "March 9, 2026",
    readTime: "7 min read",
    tags: ["Tailwind", "CSS", "Styling"],
    content: (
      <>
        <p>
          Tailwind CSS v4 introduces the highly anticipated Oxide engine built
          in Rust, which processes CSS at an incredibly fast speed. It also
          massively simplifies configuration by leaning entirely into modern CSS
          variables.
        </p>

        <hr className="my-8 border-[#e2e8f0]" />

        <h2>Say Goodbye to tailwind.config.ts</h2>
        <p>
          Version 4 embraces convention over configuration. You no longer need a
          complex configuration file dictating where your styles apply or
          defining nested objects for custom colors. It&apos;s all CSS variables
          now.
        </p>

        <pre>
          <code>{`/* globals.css */
@import "tailwindcss";

@theme {
  --color-brand: #f97316;
  --color-brand-light: #fdba74;
  --font-inter: 'Inter', sans-serif;
}`}</code>
        </pre>

        <h2>Native Container Queries</h2>
        <p>
          We finally have native container queries integrated directly into
          core. Instead of styling elements based on the viewport width (using
          `@media`), we style them based on their physical container&apos;s
          width.
        </p>

        <pre>
          <code>{`<div class="@container">
  <div class="flex flex-col @sm:flex-row gap-4">
    <img src="/avatar.jpg" class="w-16 @sm:w-32" />
    <p>Flexible layouts anywhere!</p>
  </div>
</div>`}</code>
        </pre>
      </>
    ),
  },
  {
    slug: "turborepo-architecture",
    title: "Scaling with Turborepo in 2026",
    description:
      "How to effectively manage large scale monorepos using Turborepo's shared packages, remote caching, and task orchestration.",
    date: "March 8, 2026",
    readTime: "9 min read",
    tags: ["Turborepo", "Monorepo", "Architecture"],
    content: (
      <>
        <p>
          When navigating enterprise environments, separating concerns into
          shared libraries is essential. Turborepo handles the heavy lifting of
          orchestrating tasks across packages to ensure blazing fast CI and
          local builds.
        </p>

        <hr className="my-8 border-[#e2e8f0]" />

        <h2>Creating Centralized UI Packages</h2>
        <p>
          By extracting components into an internal `@repo/ui` package, we
          guarantee consistency across multiple applications within the same
          repository.
        </p>

        <pre>
          <code>{`// packages/ui/src/button.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium",
  {
    variants: { /* ... */ }
  }
);`}</code>
        </pre>

        <h2>Remote Caching</h2>
        <p>
          The true magic of Turborepo is remote caching via Vercel. When I build
          the monorepo locally, Vercel stores the artifacts. When my coworker
          pulls the code and runs `build`, Turborepo notices the inputs
          haven&apos;t changed since I compiled them, and instantly downloads
          the results instead of recompiling!
        </p>
      </>
    ),
  },
  {
    slug: "web-accessibility",
    title: "Demystifying A11y: Practical Accessibility",
    description:
      "A comprehensive developer's guide to building accessible React components using ARIA attributes, Radix UI, and logical keyboard focuses.",
    date: "March 7, 2026",
    readTime: "10 min read",
    tags: ["A11y", "Accessibility", "UI UX"],
    content: (
      <>
        <p>
          Web accessibility (a11y) is not optional anymore. In 2026, building
          inclusive software is an engineering baseline. Let&apos;s cover
          practical aspects of building accessible interactive widgets in React.
        </p>

        <hr className="my-8 border-[#e2e8f0]" />

        <h2>Semantic HTML First</h2>
        <p>
          A `div` with an `onClick` is not a button to screen readers. It lacks
          the inherent keyboard controls and semantic meaning. Always map user
          interactions to native semantically correct elements first.
        </p>

        <h2>Headless UI Libraries</h2>
        <p>
          Writing fully accessible dropdowns, modals, and tooltips from scratch
          is notoriously difficult due to focus-trapping and extensive ARIA
          roles. This is where Radix UI Primitives and React Aria shine.
        </p>

        <pre>
          <code>{`import * as Dialog from "@radix-ui/react-dialog";

export const AccessibleModal = () => (
  <Dialog.Root>
    <Dialog.Trigger>Edit Profile</Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-blackA6 fixed inset-0" />
      <Dialog.Content className="... modal styles">
        <Dialog.Title>Edit profile</Dialog.Title>
        <Dialog.Description>
          Make changes to your profile here. Click save when you're done.
        </Dialog.Description>
        <Dialog.Close aria-label="Close">
          X
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);`}</code>
        </pre>

        <h2>Keyboard Navigation is King</h2>
        <p>
          Test your application using only the <code>Tab</code>,{" "}
          <code>Space</code>, and <code>Enter</code> keys. Ensure focused
          elements have a highly visible `focus-visible` ring.
        </p>
      </>
    ),
  },
  {
    slug: "server-actions",
    title: "Server Actions: Replacing API Routes",
    description:
      "Deep dive into React Server Actions as mutations replacing traditional REST API routes and simplifying fullstack workflows.",
    date: "March 11, 2026",
    readTime: "8 min read",
    tags: ["React", "Next.js", "Server Actions"],
    content: (
      <>
        <p>
          Over the past few years, developers built fullstack React applications
          by fetching data via `useEffect` to API endpoint files. Server Actions
          remove the network boundary abstraction, letting you invoke server
          code seamlessly.
        </p>

        <hr className="my-8 border-[#e2e8f0]" />

        <h2>1. The Form Approach</h2>
        <p>
          The most robust way to use Server Actions is passing them to the{" "}
          <code>action</code>
          attribute of native forms. This gives progressive enhancement: the
          form works even if JavaScript is disabled.
        </p>

        <pre>
          <code>{`export default function SubscribeForm() {
  async function subscribe(formData: FormData) {
    'use server'; // This makes it a Server Action
    const email = formData.get('email');
    await db.insert(email);
  }

  return (
    <form action={subscribe}>
      <input type="email" name="email" required />
      <button>Subscribe</button>
    </form>
  )
}`}</code>
        </pre>

        <h2>2. Direct Invocations</h2>
        <p>
          While forms are preferred, you can easily invoke a Server Action
          directly via an `onClick` handler, typically wrapped in
          `useTransition` to track pending state.
        </p>
        <pre>
          <code>{`'use client';

import { useTransition } from 'react';
import { deletePost } from '@/actions';

export function DeleteButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();

  return (
    <button onClick={() => startTransition(() => deletePost(id))}>
      {isPending ? 'Deleting...' : 'Delete'}
    </button>
  );
}`}</code>
        </pre>
      </>
    ),
  },
  {
    slug: "context-vs-zustand",
    title: "React Context API vs Zustand",
    description:
      "When should you use the native React Context API versus an external library like Zustand? Breaking down rerenders and abstractions.",
    date: "March 12, 2026",
    readTime: "9 min read",
    tags: ["React", "Performance", "State"],
    content: (
      <>
        <p>
          A common mistake among intermediate React developers is equating
          Context with State Management. Context is not state management—it is
          Dependency Injection.
        </p>

        <hr className="my-8 border-[#e2e8f0]" />

        <h2>Context API Pitfalls</h2>
        <p>
          When you place a complex object inside a Context Provider, anytime a
          single property in that object changes,{" "}
          <strong>every component</strong> that consumes that context will
          re-render, even if they aren&apos;t using the changed property.
        </p>
        <p>
          This leads developers into memoization hell—splitting context into
          <code>StateContext</code> and <code>DispatchContext</code> to avoid
          cascades.
        </p>

        <h2>Zustand to the Rescue</h2>
        <p>
          Because Zustand lives outside the React tree, component re-renders are
          only triggered by the exact slice of state they subscribe to.
        </p>

        <pre>
          <code>{`// With Zustand, only components using 'username' rerender when username changes
const username = useStore(state => state.username);
`}</code>
        </pre>

        <h2>Conclusion</h2>
        <p>
          Use Context for low-frequency updates: themes, user login tokens, etc.
          Use Zustand or tools like it for high-frequency updates or complex
          domain state.
        </p>
      </>
    ),
  },
  {
    slug: "figma-mcp-antigravity",
    title: "Connecting Figma MCP to Antigravity: Troubleshooting Guide",
    description:
      "A complete step-by-step guide to connecting Figma's MCP server to AI agents. Learn how to bypass OAuth scope errors, Dev Mode restrictions, and config bugs.",
    date: "March 6, 2026",
    readTime: "8 min read",
    tags: ["Figma", "MCP", "Antigravity", "AI Agents"],
    content: (
      <>
        <p>
          Adding the Figma Model Context Protocol (MCP) server to an AI coding
          agent like Antigravity or Cursor is a massive workflow upgrade. It
          allows the AI to &quot;see&quot; your design tokens, colors, and
          layouts directly instead of relying on manual CSS inspection.
        </p>

        <p>
          However, setting it up isn&apos;t always smooth sailing. After
          spending hours troubleshooting connection refused errors and OAuth
          blocks, I compiled this guide to help you bypass the most common
          roadblocks and get back to coding.
        </p>

        <hr className="my-8 border-[#e2e8f0]" />

        <h2>Error 1: `serverURL or command must be specified`</h2>
        <p>
          When manually adding the official Figma remote server to your
          `mcp_config.json`, you might follow older documentation that tells you
          to use the `&quot;url&quot;` key. Some AI editors will reject this
          syntax.
        </p>
        <p>
          <strong>The Fix:</strong> Change &quot;url&quot; to
          &quot;serverURL&quot;. Your config should look exactly like this:
        </p>
        <pre>
          <code>{`{
  "mcpServers": {
    "figma": {
      "serverURL": "https://mcp.figma.com/mcp"
    }
  }
}`}</code>
        </pre>

        <h2>Error 2: `ECONNREFUSED 127.0.0.1:3845`</h2>
        <p>
          If you install the &quot;Figma Dev Mode MCP&quot; plugin directly from
          your editor&apos;s store, you might see a connection refused error on
          port 3845.
        </p>
        <p>
          <strong>The Cause:</strong> This specific integration requires the
          local Figma Desktop App to be running in the background with{" "}
          <strong>Dev Mode</strong> toggled on. If you are on a free Figma plan,
          you do not have access to Dev Mode, so the local server never actually
          starts to listen on that port.
        </p>

        <h2>Error 3: `Invalid scope: mcp:connect`</h2>
        <p>
          If you try to bypass the local server requirement by creating a custom
          OAuth app in the Figma Developer Portal (to use the remote server),
          you will hit a wall during the browser authentication step.
        </p>
        <p>
          <strong>The Cause:</strong> Figma has strictly locked down the
          `mcp:connect` permission scope. Currently, only pre-approved
          enterprise partner applications can request this permission. Custom
          developer apps are actively blocked from using it.
        </p>

        <hr className="my-8 border-[#e2e8f0]" />

        <h2>The Ultimate Solution (Works on Free Plans)</h2>
        <p>
          To bypass both the Dev Mode paywall and the OAuth scope restrictions
          entirely, we can use a highly popular open-source community server
          (`figma-developer-mcp`) and authenticate it via a Personal Access
          Token (PAT).
        </p>

        <h3>Step 1: Get a Figma Token</h3>
        <ol className="list-decimal pl-6 my-4 space-y-2">
          <li>
            Open Figma, click your profile, and go to the{" "}
            <strong>Settings</strong> menu.
          </li>
          <li>
            Navigate to the <strong>Security</strong> tab.
          </li>
          <li>
            Scroll down to <strong>Personal access tokens</strong> and click
            &quot;Generate new token&quot;.
          </li>
          <li>
            Ensure the token has read permissions for &quot;File content&quot;
            and copy the generated string.
          </li>
        </ol>

        <h3>Step 2: Update Your Config</h3>
        <p>
          Open your `mcp_config.json` file and configure it to use the `npx`
          command to run the community server directly. (Note: You must have
          Node.js installed on your machine for this to work).
        </p>

        <pre>
          <code>{`{
  "mcpServers": {
    "figma": {
      "command": "npx",
      "args": [
        "-y",
        "figma-developer-mcp",
        "--figma-api-key=YOUR_PERSONAL_ACCESS_TOKEN_HERE",
        "--stdio"
      ]
    }
  }
}`}</code>
        </pre>

        <p>
          Replace the placeholder with your actual token, save the file, and
          refresh your MCP servers panel in your editor. You are now fully
          connected!
        </p>
        <p>
          <strong>Pro Tip:</strong> To use it, simply copy the URL of a specific
          Frame or Component from your Figma file, paste it into your AI
          agent&apos;s chat, and ask it to generate a React component using
          Tailwind CSS.
        </p>
      </>
    ),
  },
];
