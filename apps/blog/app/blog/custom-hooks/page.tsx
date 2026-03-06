import Link from "next/link";
import BlogHeader from "../../components/BlogHeader";

export default function CustomHooks() {
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
          <span>February 28, 2026</span>
          <span>·</span>
          <span>9 min read</span>
        </div>

        <h1>Mastering Custom Hooks for Reusable Logic</h1>

        <p>
          After 3.5+ years of building React applications, I&apos;ve found that{" "}
          <strong>custom hooks are the single most powerful pattern</strong> for
          writing clean, maintainable code. They let you extract complex logic
          from components, making your UI layer pure and your business logic
          testable.
        </p>

        <hr />

        <h2>The Philosophy: Separate UI from Logic</h2>

        <p>
          A well-architected React component should be &quot;dumb&quot; — it
          receives data and renders JSX. All the heavy lifting (API calls, event
          listeners, local storage sync, debouncing) should live in custom
          hooks. This separation gives you:
        </p>

        <ul>
          <li>
            <strong>Testability</strong> — Test hooks in isolation with{" "}
            <code>renderHook</code>
          </li>
          <li>
            <strong>Reusability</strong> — Use the same logic across multiple
            components
          </li>
          <li>
            <strong>Readability</strong> — Components become 20-30 lines instead
            of 200+
          </li>
        </ul>

        <h2>Hook #1: useDebounce</h2>

        <p>
          Essential for search inputs, auto-save, and API rate limiting. Without
          debouncing, a search input can fire hundreds of API calls as the user
          types.
        </p>

        <pre>
          <code>{`import { useEffect, useState } from 'react'

/**
 * Debounces a value by a specified delay.
 * Returns the debounced value that only updates
 * after the delay has passed without changes.
 */
export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}`}</code>
        </pre>

        <h3>Usage Example:</h3>
        <pre>
          <code>{`function SearchComponent() {
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 300)

  useEffect(() => {
    if (debouncedQuery) {
      // This only fires 300ms after the user STOPS typing
      searchAPI(debouncedQuery).then(setResults)
    }
  }, [debouncedQuery])

  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search..."
    />
  )
}`}</code>
        </pre>

        <h2>Hook #2: useLocalStorage</h2>

        <p>
          Syncs React state with <code>localStorage</code>, supporting SSR
          (Server-Side Rendering) and automatic JSON serialization.
        </p>

        <pre>
          <code>{`import { useCallback, useEffect, useState } from 'react'

/**
 * Like useState, but persists to localStorage.
 * Handles SSR, JSON serialization, and storage events.
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((prev: T) => T)) => void, () => void] {
  // Initialize from localStorage (SSR-safe)
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue
    try {
      const item = window.localStorage.getItem(key)
      return item ? (JSON.parse(item) as T) : initialValue
    } catch {
      return initialValue
    }
  })

  // Update localStorage when state changes
  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      setStoredValue((prev) => {
        const valueToStore =
          value instanceof Function ? value(prev) : value
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(key, JSON.stringify(valueToStore))
        }
        return valueToStore
      })
    },
    [key]
  )

  // Remove from localStorage
  const removeValue = useCallback(() => {
    setStoredValue(initialValue)
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(key)
    }
  }, [key, initialValue])

  // Sync across tabs
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.newValue) {
        setStoredValue(JSON.parse(e.newValue) as T)
      }
    }
    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [key])

  return [storedValue, setValue, removeValue]
}`}</code>
        </pre>

        <h3>Usage Example:</h3>
        <pre>
          <code>{`function ThemeToggle() {
  const [theme, setTheme] = useLocalStorage<'light' | 'dark'>(
    'theme',
    'light'
  )

  return (
    <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>
      Current: {theme}
    </button>
  )
}`}</code>
        </pre>

        <h2>Hook #3: useIntersectionObserver</h2>

        <p>
          Perfect for lazy loading images, infinite scroll, and triggering
          scroll-based animations (like the timeline dots in my portfolio!).
        </p>

        <pre>
          <code>{`import { useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverOptions {
  threshold?: number | number[]
  rootMargin?: string
  triggerOnce?: boolean
}

/**
 * Observes when an element enters or leaves the viewport.
 * Returns a ref to attach to the target element and
 * a boolean indicating visibility.
 */
export function useIntersectionObserver<T extends HTMLElement>(
  options: UseIntersectionObserverOptions = {}
): [React.RefObject<T | null>, boolean, IntersectionObserverEntry | null] {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = false } = options
  const elementRef = useRef<T | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([observerEntry]) => {
        setEntry(observerEntry)
        setIsVisible(observerEntry.isIntersecting)

        // Unobserve after first intersection if triggerOnce
        if (observerEntry.isIntersecting && triggerOnce) {
          observer.unobserve(element)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, rootMargin, triggerOnce])

  return [elementRef, isVisible, entry]
}`}</code>
        </pre>

        <h3>Usage Example:</h3>
        <pre>
          <code>{`function LazyImage({ src, alt }: { src: string; alt: string }) {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({
    triggerOnce: true,
    rootMargin: '200px', // Start loading 200px before visible
  })

  return (
    <div ref={ref} className="min-h-[300px]">
      {isVisible ? (
        <img src={src} alt={alt} className="animate-fadeIn" />
      ) : (
        <div className="bg-gray-200 animate-pulse h-full" />
      )}
    </div>
  )
}

function AnimatedSection({ children }: { children: React.ReactNode }) {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <div
      ref={ref}
      className={\`transition-all duration-700 \${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }\`}
    >
      {children}
    </div>
  )
}`}</code>
        </pre>

        <hr />

        <p>
          <strong>Key takeaway:</strong> Custom hooks are about{" "}
          <em>composition over inheritance</em>. Every time you find yourself
          duplicating stateful logic between components, extract it into a hook.
          Your future self (and your team) will thank you.
        </p>
      </article>
    </div>
  );
}
