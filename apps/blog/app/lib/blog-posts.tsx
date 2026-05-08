/* eslint-disable react/no-unescaped-entities */
import React from "react";
import CopyableCode from "../components/CopyableCode";

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
    slug: "nextjs-ai-skills",
    title: "Next.js AI Skills: Adding Topics",
    description:
      "Learn how to effectively use Cursor with Next.js skill files to keep your team synced with proper logic and mindsets.",
    date: "May 8, 2026",
    readTime: "3 min read",
    tags: ["Next.js", "AI", "Cursor", "Skills"],
    content: (
      <>
        <h2>How to Use Cursor Effectively: The Right Mindset</h2>
        <p>
          To get the most out of Cursor, it is highly recommended to use{" "}
          <strong>Skill files</strong>. While Cursor can consume more tokens
          when using them, they ensure all developers in a team stay in sync
          with the proper logic, mindset, and appropriate skills for specific
          tasks.
        </p>

        <hr className="my-8 border-[#e2e8f0]" />

        <h3>1. Next.js Best Practices</h3>
        <p>
          You can easily add the Next.js Best Practices skill by running the
          following command. This will provide your AI assistant with the
          optimal context for Next.js development.
        </p>

        <CopyableCode code="npx skills add https://github.com/vercel-labs/next-skills --skill next-best-practices" />

        <p className="mt-6">
          <strong>Link:</strong>{" "}
          <a
            href="http://skills.sh/vercel-labs/next-skills/next-best-practices"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f97316] hover:underline"
          >
            http://skills.sh/vercel-labs/next-skills/next-best-practices
          </a>
        </p>

        <hr className="my-8 border-[#e2e8f0]" />

        <h3>2. Next.js Cache Components</h3>
        <p>
          You can add the Next.js Cache Components skill by running the
          following command. This will teach your AI assistant the latest
          caching patterns and strategies.
        </p>

        <CopyableCode code="npx skills add https://github.com/vercel-labs/next-skills --skill next-cache-components" />

        <p className="mt-6">
          <strong>Link:</strong>{" "}
          <a
            href="https://skills.sh/vercel-labs/next-skills/next-cache-components"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f97316] hover:underline"
          >
            https://skills.sh/vercel-labs/next-skills/next-cache-components
          </a>
        </p>

        <hr className="my-8 border-[#e2e8f0]" />

        <h3>3. UI/UX Pro Max - Design Intelligence</h3>
        <p>
          This skill provides comprehensive design intelligence for web and
          mobile UI/UX across 10 technology stacks. It contains an extensive
          searchable database of styles, color palettes, font pairings, chart
          types, and priority-ranked rules for accessibility and responsiveness.
        </p>
        <p>
          <strong>When to apply:</strong> Use this skill when designing new
          pages (dashboards, SaaS, landing pages), creating UI components,
          choosing color schemes, or reviewing UI code for visual consistency
          and user experience.
        </p>

        <CopyableCode code="npx skills add https://github.com/nextlevelbuilder/ui-ux-pro-max-skill --skill ui-ux-pro-max" />

        <p className="mt-6">
          <strong>Link:</strong>{" "}
          <a
            href="https://skills.sh/nextlevelbuilder/ui-ux-pro-max-skill/ui-ux-pro-max"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f97316] hover:underline"
          >
            https://skills.sh/nextlevelbuilder/ui-ux-pro-max-skill/ui-ux-pro-max
          </a>
        </p>

        <hr className="my-8 border-[#e2e8f0]" />

        <h3>4. Vercel React Best Practices</h3>
        <p>
          A comprehensive performance optimization guide for React and Next.js
          applications, maintained by Vercel. It contains prioritized rules
          across 8 categories, including async patterns, bundle size
          optimization, and server-side caching.
        </p>
        <p>
          <strong>When to apply:</strong> Reference these guidelines when
          writing new React components or Next.js pages, implementing data
          fetching, or performing code reviews and performance audits.
        </p>

        <CopyableCode code="npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices" />

        <p className="mt-6">
          <strong>Link:</strong>{" "}
          <a
            href="https://skills.sh/vercel-labs/agent-skills/vercel-react-best-practices"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f97316] hover:underline"
          >
            https://skills.sh/vercel-labs/agent-skills/vercel-react-best-practices
          </a>
        </p>

        <hr className="my-8 border-[#e2e8f0]" />

        <h3>5. Find Skills (Ecosystem Discovery)</h3>
        <p>
          This is one of the most popular skills available. It allows your AI
          assistant to discover, verify, and install specialized agent skills
          from the open ecosystem whenever you need extended capabilities.
        </p>
        <p>
          <strong>When to apply:</strong> Use this whenever you find yourself
          asking "how do I do X" or "is there a skill for X". It automatically
          integrates with the Skills CLI to search and recommend packages based
          on install counts and GitHub stars.
        </p>

        <CopyableCode code="npx skills add https://github.com/vercel-labs/skills --skill find-skills" />

        <p className="mt-6">
          <strong>Link:</strong>{" "}
          <a
            href="https://skills.sh/vercel-labs/skills/find-skills"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f97316] hover:underline"
          >
            https://skills.sh/vercel-labs/skills/find-skills
          </a>
        </p>

        <hr className="my-8 border-[#e2e8f0]" />

        <h3>6. shadcn/ui Component Management</h3>
        <div className="border-l-4 border-orange-500 pl-4 py-2 my-6 bg-orange-500/10 rounded-r-sm">
          <p className="m-0 text-sm font-medium text-orange-700 dark:text-orange-300">
            ⚠️ <strong>Important:</strong> Only add this skill if you are using
            shadcn/ui inside your Next.js project.
          </p>
        </div>
        <p>
          This skill manages the full component lifecycle for shadcn/ui,
          including searching registries, adding components, viewing docs, and
          intelligently merging updates. It enforces critical rules across
          forms, composition, semantic styling, and icons.
        </p>
        <p>
          <strong>Principles enforced:</strong> Use existing components before
          writing custom UI, compose layouts rather than reinventing them, and
          always utilize built-in variants and semantic colors.
        </p>

        <CopyableCode code="npx skills add https://github.com/shadcn/ui --skill shadcn" />

        <p className="mt-6">
          <strong>Link:</strong>{" "}
          <a
            href="https://skills.sh/shadcn/ui/shadcn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f97316] hover:underline"
          >
            https://skills.sh/shadcn/ui/shadcn
          </a>
        </p>

        <hr className="my-8 border-[#e2e8f0]" />

        <h3>7. Vercel Composition Patterns</h3>
        <p>
          A guide focused on React composition patterns designed to help you
          scale components flexibly while avoiding the dreaded "boolean prop
          proliferation." It covers component architecture, state management,
          and modern React 19 APIs.
        </p>
        <p>
          <strong>When to apply:</strong> Use these guidelines when refactoring
          bloated components with too many boolean props, designing reusable
          component libraries, or reviewing overall component architecture.
        </p>

        <CopyableCode code="npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-composition-patterns" />

        <p className="mt-6">
          <strong>Link:</strong>{" "}
          <a
            href="https://skills.sh/vercel-labs/agent-skills/vercel-composition-patterns"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f97316] hover:underline"
          >
            https://skills.sh/vercel-labs/agent-skills/vercel-composition-patterns
          </a>
        </p>

        <hr className="my-8 border-[#e2e8f0]" />

        <h3>8. Better Auth Best Practices</h3>
        <div className="border-l-4 border-orange-500 pl-4 py-2 my-6 bg-orange-500/10 rounded-r-sm">
          <p className="m-0 text-sm font-medium text-orange-700 dark:text-orange-300">
            ⚠️ <strong>Important:</strong> Only add this skill if you are using
            Better Auth inside your Next.js project.
          </p>
        </div>
        <p>
          A comprehensive guide for complete Better Auth server and client
          setup. It covers everything from installation, database migrations
          (Prisma, Drizzle, MongoDB), and session management, to security
          configurations and plugins like 2FA and SSO.
        </p>
        <p>
          <strong>When to apply:</strong> Use this when implementing
          authentication, setting up environment variables (
          <code>BETTER_AUTH_SECRET</code>), or configuring type-safe client
          methods and database adapters.
        </p>

        <CopyableCode code="npx skills add https://github.com/better-auth/skills --skill better-auth-best-practices" />

        <p className="mt-6">
          <strong>Link:</strong>{" "}
          <a
            href="https://skills.sh/better-auth/skills/better-auth-best-practices"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f97316] hover:underline"
          >
            https://skills.sh/better-auth/skills/better-auth-best-practices
          </a>
        </p>

        <hr className="my-8 border-[#e2e8f0]" />

        <h3>9. Tailwind CSS Patterns</h3>
        <p>
          An expert guide for building modern, responsive user interfaces with
          Tailwind CSS v4.1+. It covers utility composition, mobile-first
          design, dark mode, component patterns (cards, navigation, forms), and
          performance optimization.
        </p>
        <p>
          <strong>When to apply:</strong> Use this skill when styling
          React/Vue/Svelte components, building responsive grid layouts,
          implementing design systems, or optimizing your CSS workflow.
        </p>

        <CopyableCode code="npx skills add https://github.com/giuseppe-trisciuoglio/developer-kit --skill tailwind-css-patterns" />

        <p className="mt-6">
          <strong>Link:</strong>{" "}
          <a
            href="https://skills.sh/giuseppe-trisciuoglio/developer-kit/tailwind-css-patterns"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f97316] hover:underline"
          >
            https://skills.sh/giuseppe-trisciuoglio/developer-kit/tailwind-css-patterns
          </a>
        </p>
      </>
    ),
  },
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
          React is incredibly fast out of the box. However, as your applications
          grow from simple to-do lists into massive enterprise dashboards, you
          might notice your app feeling sluggish. Buttons might take a
          half-second to click, or typing in an input field might feel delayed.
        </p>
        <p>
          Most developers panic and start wrapping everything in{" "}
          <code>useMemo</code> or <code>useCallback</code>. This is a huge
          mistake. Before we can optimize React, we must understand exactly how
          it thinks. Let's dive deep into React's brain using some
          easy-to-understand analogies.
        </p>

        <hr className="my-8 border-[#e2e8f0]" />

        <h2>1. The React Reconciliation Process (The "Painter" Analogy) 🎨</h2>

        <p>
          <strong>Student Analogy:</strong> Imagine React is a highly skilled
          but slightly blind painter. The DOM (what you see on screen) is the
          canvas.
        </p>
        <p>
          When state changes, React doesn't just look at the screen and say,
          "Ah, let me just change that one button." Instead, it pulls out a
          piece of scratch paper (the <strong>Virtual DOM</strong>) and redraws
          the <em>entire</em> screen from scratch.
        </p>
        <p>
          Then, it places the scratch paper next to the actual canvas and plays
          a game of "Spot the Difference" (this process is called{" "}
          <strong>Reconciliation</strong> or <strong>Diffing</strong>). If it
          spots a difference, it updates ONLY that tiny part of the actual
          canvas.
        </p>

        <p>
          <strong>Why is this important?</strong> Redrawing on scratch paper
          (Virtual DOM) is insanely fast. But painting on the actual canvas
          (Real DOM) is very slow. React's entire goal is to touch the actual
          canvas as little as possible.
        </p>

        <h2>2. The #1 Cause of Performance Issues: The Parent-Child Rule</h2>

        <p>
          There is one golden rule in React that causes 90% of performance bugs:
        </p>
        <blockquote className="border-l-4 border-blue-500 pl-4 italic bg-blue-50 py-2 my-4 rounded-r-md text-blue-900">
          "Whenever a Parent component re-renders, ALL of its Children
          components will re-render, regardless of whether their props changed."
        </blockquote>

        <p>
          Let's look at a concrete example. Imagine a <code>House</code>{" "}
          component that contains a <code>LightSwitch</code> and an extremely
          expensive <code>SmartTV</code> component.
        </p>

        <pre>
          <code>{`// ❌ BAD: The TV re-renders every time we toggle the light!
function House() {
  const [isLightOn, setIsLightOn] = useState(false);

  return (
    <div>
      <button onClick={() => setIsLightOn(!isLightOn)}>
        Toggle Light: {isLightOn ? "ON" : "OFF"}
      </button>

      {/* The TV takes 500ms to render! */}
      <ExpensiveSmartTV /> 
    </div>
  );
}`}</code>
        </pre>

        <p>
          Every time you click "Toggle Light", the <code>House</code> state
          changes. React redraws the <code>House</code>, and because the{" "}
          <code>ExpensiveSmartTV</code> is inside the House, React forces the TV
          to redraw too! The light switch will feel terribly slow because it's
          waiting for the TV to finish rendering.
        </p>

        <h2>3. React.memo (The "Do Not Disturb" Sign) 🚪</h2>

        <p>
          To fix the issue above, we can use <code>React.memo()</code>.
        </p>
        <p>
          <strong>Student Analogy:</strong> Wrapping a component in{" "}
          <code>React.memo</code> is like putting a "Do Not Disturb" sign on its
          door. It tells React:{" "}
          <em>
            "Hey, unless the props you give me have physically changed since the
            last time, DO NOT force me to redraw. Just use the last version."
          </em>
        </p>

        <pre>
          <code>{`// ✅ GOOD: The TV will now ignore the House re-rendering
const ExpensiveSmartTV = React.memo(function ExpensiveSmartTV() {
  console.log("TV is rendering!");
  return <div>Watching Netflix...</div>;
});

function House() {
  const [isLightOn, setIsLightOn] = useState(false);

  return (
    <div>
      <button onClick={() => setIsLightOn(!isLightOn)}>
        Toggle Light
      </button>
      {/* Because it's wrapped in memo, this will NOT re-render! */}
      <ExpensiveSmartTV /> 
    </div>
  );
}`}</code>
        </pre>

        <h2>4. useMemo (The "Sticky Note" Memory) 📝</h2>

        <p>
          What if we have to do some really heavy math inside our component?
        </p>
        <p>
          <strong>Student Analogy:</strong> Imagine you have to multiply{" "}
          <code>4,829 × 8,391</code> in your head. It takes you 10 minutes. If
          someone asks you to do it again 5 seconds later, are you going to
          recalculate it? No! You write the answer on a sticky note.
        </p>
        <p>
          <code>useMemo</code> is React's sticky note. It remembers the result
          of an expensive calculation so it doesn't have to do it again on the
          next render.
        </p>

        <pre>
          <code>{`function ProductList({ products, category }) {
  const [theme, setTheme] = useState("light");

  // ❌ BAD: We loop through 10,000 products every time we click the theme button!
  const filteredProducts = products.filter(p => p.category === category);

  // ✅ GOOD: We only filter if 'products' or 'category' actually change!
  const optimizedFilteredProducts = useMemo(() => {
    return products.filter(p => p.category === category);
  }, [products, category]);

  return (
    <div className={theme}>
      <button onClick={() => setTheme("dark")}>Toggle Theme</button>
      {optimizedFilteredProducts.map(p => <div key={p.id}>{p.name}</div>)}
    </div>
  );
}`}</code>
        </pre>

        <h2>5. useCallback (The "Business Card" Memory) 📇</h2>

        <p>
          In JavaScript, every time a function is declared inside a component,
          it gets a brand new memory address on every render.
        </p>
        <p>
          <code>const a = () =&gt; {"{}"}</code> and{" "}
          <code>const b = () =&gt; {"{}"}</code> are completely different
          functions to JavaScript, even if they look identical.
        </p>
        <p>
          This ruins <code>React.memo</code>. If you pass a function down to a
          memoized child component, the child will think the function has
          changed on every render, ignoring the "Do Not Disturb" sign!
        </p>
        <p>
          <strong>Student Analogy:</strong> <code>useCallback</code> is like
          printing a business card. Instead of writing your phone number on a
          new napkin every time you meet someone, you hand them the exact same
          business card. They can look at the card and know it's the exact same
          person.
        </p>

        <pre>
          <code>{`const ChildButton = React.memo(({ onClick }) => {
  console.log("Button rendered!");
  return <button onClick={onClick}>Click Me</button>;
});

function Parent() {
  const [count, setCount] = useState(0);

  // ❌ BAD: A new memory address is created every render. 
  // ChildButton will re-render every time, breaking React.memo!
  const handleClickBad = () => {
    console.log("Clicked!");
  };

  // ✅ GOOD: The memory address is saved. 
  // ChildButton sees the EXACT SAME function and skips re-rendering.
  const handleClickGood = useCallback(() => {
    console.log("Clicked!");
  }, []);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <ChildButton onClick={handleClickGood} />
    </div>
  );
}`}</code>
        </pre>

        <h2>6. Advanced: React Fiber (The "Restaurant Chef" Analogy) 👨‍🍳</h2>

        <p>
          In React 16, the entire core engine was rewritten to something called{" "}
          <strong>React Fiber</strong>.
        </p>
        <p>
          <strong>Student Analogy:</strong> Imagine a chef in a restaurant (the
          browser's main thread). Before Fiber, when a massive order of 100
          steaks came in (a huge component tree rendering), the chef would lock
          the kitchen door and refuse to do anything else until all 100 steaks
          were cooked. If a waiter asked for a simple glass of water (a user
          typing in an input field), they had to wait for the steaks to finish.
          The app felt frozen!
        </p>
        <p>
          <strong>React Fiber introduces "Time Slicing".</strong> Now, the chef
          cooks one steak, pauses, looks out the window to see if anyone needs
          water, serves the water instantly, and then goes back to the steaks.
        </p>
        <p>
          Fiber breaks rendering work into tiny "chunks". This allows React to
          pause rendering, handle high-priority user interactions (like typing
          or clicking), and then resume rendering the heavy stuff in the
          background!
        </p>

        <hr className="my-8 border-[#e2e8f0]" />

        <p>
          <strong>Summary for Students:</strong>
        </p>
        <ul>
          <li>
            <strong>Virtual DOM:</strong> Drawing on scratch paper before
            painting the real canvas.
          </li>
          <li>
            <strong>Parent-Child Rule:</strong> If dad re-renders, the kids
            re-render.
          </li>
          <li>
            <strong>React.memo:</strong> A "Do Not Disturb" sign for components.
          </li>
          <li>
            <strong>useMemo:</strong> A sticky note for expensive math.
          </li>
          <li>
            <strong>useCallback:</strong> A business card for functions so their
            memory address doesn't change.
          </li>
          <li>
            <strong>React Fiber:</strong> A smart chef that pauses cooking to
            serve water (handle clicks).
          </li>
        </ul>
        <p>
          Only use these optimization tools when you actually notice your app
          slowing down. Premature optimization is the root of all evil!
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

        <h2>The "School Library" Analogy 📚</h2>
        <p>
          <strong>Student Analogy:</strong> Think of State Management like a
          school library.
        </p>
        <p>
          <strong>Redux Toolkit</strong> is like a massive, highly-regulated
          university library. You can't just take a book; you have to fill out a
          request form (an <em>Action</em>), give it to the librarian (the{" "}
          <em>Reducer</em>), and they update the master catalogue (the{" "}
          <em>Store</em>) before giving you the book. It's safe and predictable,
          but it takes time.
        </p>
        <p>
          <strong>Zustand</strong> is like a classroom bookshelf. It's right
          there in the room. You just walk up, take a book, and write your name
          on a clipboard. It's fast, easy, and gets the job done without the
          bureaucracy!
        </p>

        <h2>1. Zustand: The Elegant Minimalist</h2>
        <p>
          Zustand solves global state by discarding the Context API provider
          hell and simply hooking into React&apos;s external store mechanisms.
          It relies on a single hook, which you can create without wrapping your
          app.
        </p>

        <pre>
          <code>{`import { create } from 'zustand'

// 1. Define the shape of your "bookshelf"
type BearStore = {
  bears: number
  increasePopulation: () => void
  removeAllBears: () => void
}

// 2. Create the "bookshelf"
const useBearStore = create<BearStore>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))

// 3. Use it anywhere! No providers needed!
function BearCounter() {
  const bears = useBearStore((state) => state.bears)
  return <h1>{bears} around here ...</h1>
}`}</code>
        </pre>

        <p>
          <strong>Why students love it:</strong> There is almost zero
          "boilerplate" (extra setup code). You create a hook, and you use it.
          That's it!
        </p>

        <h2>2. Redux Toolkit: The Enterprise Standard</h2>
        <p>
          Redux Toolkit (RTK) takes classic Redux and strips out the unnecessary
          boilerplate. When building enterprise software requiring advanced
          devtools, time-travel debugging, or complex side-effect management
          (like RTK Query for fetching data), RTK is undefeated.
        </p>

        <h2>3. The Verdict: Which should you learn first?</h2>
        <p>
          If you are a student or building a personal project,{" "}
          <strong>learn Zustand first.</strong> It will teach you how global
          state works without overwhelming you with terminology like "reducers",
          "thunks", and "dispatchers".
        </p>
        <p>
          For 80% of projects, Zustand will be vastly faster to set up and
          easier to maintain. However, for large enterprise apps where strict
          rules are needed (like our university library), you will eventually
          need Redux Toolkit.
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
    title: "React Context API vs Zustand: Explained Simple",
    description:
      "When should you use the native React Context API versus an external library like Zustand? A beginner-friendly breakdown of re-renders.",
    date: "March 12, 2026",
    readTime: "9 min read",
    tags: ["React", "Performance", "State"],
    content: (
      <>
        <p>
          A common mistake among new React developers is assuming that the{" "}
          <strong>Context API</strong> is a full replacement for State
          Management tools like Zustand or Redux. But there is a huge difference
          in how they work under the hood!
        </p>

        <hr className="my-8 border-[#e2e8f0]" />

        <h2>The "Megaphone vs. Phone Call" Analogy 📢📞</h2>
        <p>
          <strong>Student Analogy:</strong>
        </p>
        <p>
          <strong>React Context</strong> is like a teacher with a megaphone. If
          the teacher announces, "The red team scored a point!",{" "}
          <em>everyone</em> in the school hears it, even if they aren't on the
          red team. They all have to stop what they are doing and listen.
        </p>
        <p>
          <strong>Zustand</strong> is like a direct phone call. If the red team
          scores, the teacher calls <em>only</em> the members of the red team.
          The rest of the school keeps working without interruption.
        </p>

        <h2>1. The Problem with React Context (The Megaphone)</h2>
        <p>
          When you place an object inside a Context Provider, anytime a single
          property in that object changes, <strong>every component</strong> that
          consumes that context will re-render.
        </p>
        <pre>
          <code>{`// A Context storing both 'theme' and 'user'
const AppContext = createContext();

function Profile() {
  // We only care about the user here
  const { user } = useContext(AppContext);
  return <div>{user.name}</div>;
}

// ⚠️ PROBLEM: If the 'theme' changes from light to dark, 
// the Profile component WILL re-render, even though it only uses 'user'!`}</code>
        </pre>

        <h2>2. Zustand to the Rescue (The Phone Call)</h2>
        <p>
          Because Zustand lives outside the React tree, component re-renders are
          only triggered by the exact slice of state they subscribe to.
        </p>

        <pre>
          <code>{`// With Zustand, only components using 'username' rerender when username changes
const username = useStore(state => state.username);

// If the 'theme' changes in the Zustand store, this component ignores it completely!`}</code>
        </pre>

        <h2>3. Conclusion: When to use which?</h2>
        <p>
          <strong>Use Context API</strong> for data that changes very rarely,
          like:
        </p>
        <ul>
          <li>Dark Mode / Light Mode theme</li>
          <li>The current user's login token</li>
          <li>Language preferences (English, Spanish)</li>
        </ul>
        <p>
          <strong>Use Zustand</strong> for data that changes frequently, like:
        </p>
        <ul>
          <li>Items in a shopping cart</li>
          <li>Coordinates in a drawing app</li>
          <li>Live chat messages</li>
        </ul>
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
  {
    slug: "typescript-generics-for-students",
    title: "TypeScript Generics: Explained Simply for Students",
    description:
      "A beginner-friendly guide to understanding TypeScript Generics. Learn how to write reusable, type-safe code with easy-to-understand analogies.",
    date: "May 4, 2026",
    readTime: "8 min read",
    tags: ["TypeScript", "Generics", "Beginners"],
    content: (
      <>
        <p>
          If you've just started learning TypeScript, you might have seen syntax
          like <code>&lt;T&gt;</code> and felt completely confused. Don't worry!
          Generics are simply a way to write flexible code that works with
          multiple data types while still remaining type-safe.
        </p>

        <hr className="my-8 border-[#e2e8f0]" />

        <h2>The Vending Machine Analogy 🥤</h2>
        <p>
          <strong>Student Analogy:</strong> Imagine a vending machine. If you
          build a vending machine that only accepts and dispenses <em>Soda</em>,
          it's not very reusable. What if you want to sell <em>Chips</em> later?
        </p>
        <p>
          A <strong>Generic Vending Machine</strong> is designed to accept{" "}
          <em>any</em> type of item. When you plug it in, you say, "This machine
          is for Soda." The machine now knows it should only accept and return
          Soda. Generics do exactly this for your functions!
        </p>

        <h2>1. The Problem Without Generics</h2>
        <p>
          Let's say we want a function that takes an item and returns it in an
          array.
        </p>
        <pre>
          <code>{`// If we only use numbers
function makeArray(item: number): number[] {
  return [item];
}

// But what if we want a string array? We'd have to write a new function!
function makeStringArray(item: string): string[] {
  return [item];
}`}</code>
        </pre>

        <h2>2. The Generic Solution</h2>
        <p>
          Instead of hardcoding <code>number</code> or <code>string</code>, we
          use a placeholder type, usually called <code>T</code> (for Type).
        </p>
        <pre>
          <code>{`// T is our placeholder variable
function makeArray<T>(item: T): T[] {
  return [item];
}

// Now we can use it for anything!
const numArr = makeArray<number>(5); // returns number[]
const strArr = makeArray<string>("hello"); // returns string[]`}</code>
        </pre>

        <p>
          <strong>Professional Tip:</strong> TypeScript is smart enough to{" "}
          <em>infer</em> the type, so you don't always need to write{" "}
          <code>&lt;number&gt;</code>. You can just write{" "}
          <code>makeArray(5)</code>, and TypeScript automatically knows{" "}
          <code>T</code> is a number!
        </p>

        <h2>3. Real-World Use Case: Fetching Data</h2>
        <p>
          When you fetch data from an API, you don't know what shape the data
          will have. Generics allow you to define the shape when you call the
          function.
        </p>
        <pre>
          <code>{`interface User {
  id: number;
  name: string;
}

// A generic fetch function
async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return await response.json();
}

// Usage:
const user = await fetchData<User>('/api/user/1');
console.log(user.name); // Type-safe! TypeScript knows 'user' has a 'name' property.`}</code>
        </pre>
        <p>
          Mastering generics takes time, but remembering the "Vending Machine"
          analogy will help you grasp why they are essential for clean, reusable
          code!
        </p>
      </>
    ),
  },
  {
    slug: "understanding-promises-async-await",
    title: "Understanding Promises and Async/Await in JavaScript",
    description:
      "Struggling with asynchronous JavaScript? This guide breaks down Promises, async, and await using relatable real-world analogies.",
    date: "May 3, 2026",
    readTime: "10 min read",
    tags: ["JavaScript", "Async", "Web Development"],
    content: (
      <>
        <p>
          JavaScript is <strong>single-threaded</strong>, meaning it can only do
          one thing at a time. So, how does it fetch data from the internet
          without freezing the entire webpage? The answer is Asynchronous
          Programming using <strong>Promises</strong> and{" "}
          <strong>Async/Await</strong>.
        </p>

        <hr className="my-8 border-[#e2e8f0]" />

        <h2>The Coffee Shop Analogy ☕</h2>
        <p>
          <strong>Student Analogy:</strong> Imagine you are at a coffee shop.
          You place your order and pay. The cashier doesn't make you stand there
          blocking the line while your coffee is being made. Instead, they give
          you a <strong>receipt with an order number (a Promise)</strong>. You
          step aside, and the cashier takes the next customer's order. When your
          coffee is ready, they call your number, and you get your coffee!
        </p>
        <p>
          A <strong>Promise</strong> in JavaScript is just like that receipt.
          It's a guarantee that <em>eventually</em>, you will either get your
          data (coffee) or an error (the machine broke).
        </p>

        <h2>1. Anatomy of a Promise</h2>
        <p>A Promise has three states:</p>
        <ul>
          <li>
            <strong>Pending:</strong> You are waiting for your coffee.
          </li>
          <li>
            <strong>Fulfilled (Resolved):</strong> You got your coffee.
          </li>
          <li>
            <strong>Rejected:</strong> They ran out of coffee beans.
          </li>
        </ul>

        <pre>
          <code>{`const orderCoffee = new Promise((resolve, reject) => {
  let coffeeMachineWorking = true;

  if (coffeeMachineWorking) {
    resolve("Here is your Latte!"); // Success
  } else {
    reject("Sorry, machine is broken."); // Failure
  }
});

// Using the Promise (.then / .catch)
orderCoffee
  .then(coffee => console.log(coffee))
  .catch(error => console.error(error));`}</code>
        </pre>

        <h2>2. Enter Async/Await</h2>
        <p>
          Using <code>.then()</code> and <code>.catch()</code> can get messy if
          you have multiple orders (known as Callback Hell or Promise Chaining).{" "}
          <code>async/await</code> was introduced to make asynchronous code look
          and behave like synchronous code!
        </p>
        <pre>
          <code>{`// The modern, readable way
async function getMyCoffee() {
  try {
    // Wait here until the coffee is ready!
    const coffee = await orderCoffee;
    console.log(coffee);
  } catch (error) {
    // If the promise is rejected, it jumps here
    console.error("Oh no: ", error);
  }
}

getMyCoffee();`}</code>
        </pre>

        <h2>3. Why This Matters Professionally</h2>
        <p>
          Whenever you make a network request using <code>fetch()</code>, you
          are dealing with Promises. In modern React and Next.js, using{" "}
          <code>async/await</code> properly ensures your UI doesn't freeze and
          errors are caught gracefully.
        </p>
      </>
    ),
  },
  {
    slug: "css-flexbox-vs-grid",
    title: "CSS Flexbox vs. Grid: When to use which?",
    description:
      "A clear, visual guide for students to understand the difference between CSS Flexbox and CSS Grid, and exactly when to use each.",
    date: "May 2, 2026",
    readTime: "7 min read",
    tags: ["CSS", "Design", "Frontend"],
    content: (
      <>
        <p>
          Centering a div used to be the hardest joke in web development. Then
          came Flexbox and CSS Grid, changing everything. But a common question
          remains:{" "}
          <em>When should I use Flexbox, and when should I use Grid?</em>
        </p>

        <hr className="my-8 border-[#e2e8f0]" />

        <h2>The Bookshelf vs. The Chessboard Analogy 📚♟️</h2>
        <p>
          <strong>Student Analogy:</strong>
          <br />
          <strong>Flexbox</strong> is like organizing books on a single shelf.
          You can push them all to the left, space them evenly, or stretch them
          to fill the shelf. It only cares about <strong>one dimension</strong>{" "}
          at a time (a row OR a column).
          <br />
          <strong>CSS Grid</strong> is like a chessboard. You have rows AND
          columns. You can place a knight exactly at Row 3, Column 4. It
          controls <strong>two dimensions</strong> simultaneously.
        </p>

        <h2>1. Flexbox (One-Dimensional)</h2>
        <p>Use Flexbox when you want to align a group of items in a line.</p>
        <ul>
          <li>Navigation bars (items in a row)</li>
          <li>Centering an icon inside a button</li>
          <li>A vertical list of user comments</li>
        </ul>
        <pre>
          <code>{`.navbar {
  display: flex;
  justify-content: space-between; /* Spreads items out */
  align-items: center; /* Centers items vertically */
}`}</code>
        </pre>

        <h2>2. CSS Grid (Two-Dimensional)</h2>
        <p>
          Use Grid when you need to define an overall page layout or a complex
          component with both rows and columns.
        </p>
        <ul>
          <li>
            The main layout of a website (Header, Sidebar, Main Content, Footer)
          </li>
          <li>A photo gallery with distinct rows and columns</li>
          <li>A dashboard layout</li>
        </ul>
        <pre>
          <code>{`.dashboard {
  display: grid;
  grid-template-columns: 250px 1fr; /* Sidebar is 250px, Main content takes the rest */
  grid-template-rows: 60px 1fr; /* Header is 60px, Main content takes the rest */
  gap: 20px; /* Space between grid items */
}`}</code>
        </pre>

        <h2>3. The Professional Strategy: Use Both!</h2>
        <p>
          You don't have to choose just one. The best developers use them
          together. Use <strong>Grid for the macro-layout</strong> (the big
          picture: sidebar, header, footer) and use{" "}
          <strong>Flexbox for the micro-layout</strong> (aligning links inside
          the header, or buttons inside a card).
        </p>
      </>
    ),
  },
];
