import Link from "next/link";
import BlogHeader from "../../components/BlogHeader";

export default function ReactPerformance() {
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
          <span>March 6, 2026</span>
          <span>·</span>
          <span>12 min read</span>
        </div>

        <h1>Advanced React Performance Optimization</h1>

        <p>
          After 3.5+ years building scalable enterprise React applications,
          I&apos;ve learned that performance optimization is both an art and a
          science. Most developers reach for <code>useMemo</code> and{" "}
          <code>React.memo</code> too early, or use them incorrectly. This guide
          covers the when, why, and how of real-world React performance tuning.
        </p>

        <hr />

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

        <hr />

        <p>
          <strong>Key takeaway:</strong> Don&apos;t optimize prematurely. Use
          React DevTools Profiler to identify actual bottlenecks, then apply the
          right tool. Most performance issues come from unnecessary re-renders
          caused by improper component structure, not missing memoization.
        </p>
      </article>
    </div>
  );
}
