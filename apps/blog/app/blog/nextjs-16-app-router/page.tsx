import Link from "next/link";
import BlogHeader from "../../components/BlogHeader";

export default function NextjsAppRouter() {
  return (
    <div className="min-h-screen">
      <BlogHeader />
      <article className="prose max-w-4xl mx-auto px-6 pb-20">
        <div className="mb-8">
          <Link className="text-sm text-[#f97316] hover:underline" href="/">
            ← Back to all posts
          </Link>
        </div>
        <div className="flex items-center gap-3 mb-4 text-xs text-[#64748b]">
          <span>March 4, 2026</span>
          <span>·</span>
          <span>10 min read</span>
        </div>

        <h1>Next.js 16 App Router: Best Practices</h1>

        <p>
          Next.js 16 has solidified the App Router as the standard for building
          modern React applications. With the introduction of{" "}
          <code>use cache</code>, enhanced Server Actions, and improved
          streaming, the framework has matured significantly. Here&apos;s a
          detailed guide on how to structure and build production-ready
          applications.
        </p>

        <hr />

        <h2>1. Optimal Folder Structure</h2>

        <p>
          For large-scale projects, I recommend a{" "}
          <strong>feature-based routing</strong> structure that keeps related
          code together:
        </p>

        <pre>
          <code>{`app/
├── (marketing)/          # Route group - no URL prefix
│   ├── page.tsx         # Landing page
│   ├── pricing/
│   │   └── page.tsx
│   └── layout.tsx       # Marketing-specific layout
├── (dashboard)/
│   ├── layout.tsx       # Dashboard layout with sidebar
│   ├── overview/
│   │   └── page.tsx
│   ├── settings/
│   │   ├── page.tsx
│   │   ├── profile/
│   │   └── billing/
│   └── projects/
│       ├── page.tsx
│       ├── [id]/
│       │   ├── page.tsx
│       │   └── loading.tsx
│       └── new/
│           └── page.tsx
├── api/                 # API routes (when needed)
│   └── webhooks/
│       └── route.ts
├── layout.tsx           # Root layout
└── globals.css`}</code>
        </pre>

        <p>Key principles:</p>
        <ul>
          <li>
            <strong>Route Groups</strong> <code>(marketing)</code> — Group
            related routes without affecting URLs
          </li>
          <li>
            <strong>Colocation</strong> — Keep components, tests, and utilities
            close to where they&apos;re used
          </li>
          <li>
            <strong>Parallel Routes</strong> — Use <code>@modal</code> slots for
            complex UIs like modals
          </li>
        </ul>

        <h2>2. Data Fetching: Server vs Client</h2>

        <h3>
          Server-Side Fetching with <code>use cache</code>
        </h3>

        <p>
          Next.js 16 introduced <code>use cache</code> as the modern caching
          mechanism, replacing the old <code>unstable_cache</code>:
        </p>

        <pre>
          <code>{`// app/(dashboard)/projects/page.tsx
// No 'use client' — this is a Server Component by default

async function getProjects() {
  'use cache'
  
  const res = await fetch('https://api.example.com/projects', {
    next: { tags: ['projects'] }
  });
  
  return res.json();
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div>
      <h1>Projects</h1>
      {projects.map((project: Project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}`}</code>
        </pre>

        <h3>Client-Side Fetching</h3>
        <p>
          Use client-side fetching only when you need real-time updates or
          user-specific data that can&apos;t be cached on the server:
        </p>

        <pre>
          <code>{`'use client'

import { useEffect, useState } from 'react'

export function LiveNotifications() {
  const [notifications, setNotifications] = useState([])

  useEffect(() => {
    const ws = new WebSocket('wss://api.example.com/notifications')
    ws.onmessage = (event) => {
      setNotifications(prev => [...prev, JSON.parse(event.data)])
    }
    return () => ws.close()
  }, [])

  return (
    <div>
      {notifications.map((n, i) => (
        <NotificationItem key={n.id || i} notification={n} />
      ))}
    </div>
  )
}`}</code>
        </pre>

        <h2>3. Server Actions: Zero-API Form Handling</h2>

        <p>
          Server Actions eliminate the need for separate API routes for form
          submissions. Here&apos;s a practical contact form example:
        </p>

        <pre>
          <code>{`// app/actions/contact.ts
'use server'

import { revalidatePath } from 'next/cache'

interface ContactFormData {
  name: string
  email: string
  message: string
}

export async function submitContactForm(formData: FormData) {
  const data: ContactFormData = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    message: formData.get('message') as string,
  }

  // Validate
  if (!data.email || !data.message) {
    return { error: 'Email and message are required' }
  }

  // Save to database
  await db.contact.create({ data })

  // Optionally revalidate a page
  revalidatePath('/contact')

  return { success: true }
}`}</code>
        </pre>

        <pre>
          <code>{`// app/contact/page.tsx
import { submitContactForm } from '../actions/contact'

export default function ContactPage() {
  return (
    <form action={submitContactForm}>
      <input name="name" placeholder="Your name" />
      <input name="email" type="email" placeholder="Email" required />
      <textarea name="message" placeholder="Message" required />
      <button type="submit">Send</button>
    </form>
  )
}`}</code>
        </pre>

        <p>Benefits of this approach:</p>
        <ul>
          <li>
            <strong>No API route needed</strong> — The action runs directly on
            the server
          </li>
          <li>
            <strong>Progressive enhancement</strong> — Works even without
            JavaScript
          </li>
          <li>
            <strong>Type-safe</strong> — Full TypeScript support end-to-end
          </li>
          <li>
            <strong>Automatic revalidation</strong> — Use{" "}
            <code>revalidatePath</code> or <code>revalidateTag</code>
          </li>
        </ul>

        <hr />

        <p>
          <strong>Key takeaway:</strong> Default to Server Components and
          server-side data fetching. Only reach for{" "}
          <code>&apos;use client&apos;</code> when you need interactivity,
          browser APIs, or real-time features. The App Router is designed to
          keep as much work on the server as possible.
        </p>
      </article>
    </div>
  );
}
