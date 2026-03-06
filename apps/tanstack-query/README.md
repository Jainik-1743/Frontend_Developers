# TanStack Query & Caching

## Why do we need caching?

When building modern web applications, we frequently fetch data from an API (like JSONPlaceholder). Without caching:

1. **Redundant Network Requests**: Every time a user navigates between pages, or a component re-mounts, the app makes the same API call. This wastes bandwidth and slows down the app.
2. **Poor User Experience**: Users have to look at loading spinners repeatedly for data they just saw seconds ago.
3. **Server Load**: The backend server receives more requests than necessary, which can increase costs and reduce performance.

Caching solves this by storing the result of an API request in memory. When the app needs that data again, it can instantly retrieve it from the cache instead of making a new request.

## When should we use caching?

You should use caching (via a tool like TanStack Query) when:

- **Data is purely server-side state**: The data is owned by the server and we only have a "snapshot" of it on the client.
- **Data doesn't change every millisecond**: If data is relatively stable (e.g., a list of posts, user profiles, product details), caching provides a huge performance boost.
- **Data is shared across components**: Multiple components on the screen need the same data. Instead of prop-drilling or putting it in Redux, TanStack Query will deduplicate the requests and share the cached data.
- **You need advanced features effortlessly**: Features like background refetching (fetching fresh data silently while showing cached data), optimistic updates, pagination, and infinite scrolling.

## Why TanStack Query?

TanStack Query (formerly React Query) is often described as the "missing data-fetching library for React".

- It handles **caching, deduplication, and background updates** out of the box.
- It provides a simple API (`useQuery`, `useMutation`) that gives you `data`, `isLoading`, `isError`, etc., so you don't have to manually manage state with `useState` and `useEffect`.
- It automatically manages **stale data** (knowing when to refetch).

## Pages in this App

This application demonstrates the usage of `@tanstack/react-query` with the JSONPlaceholder API. We have separated the concepts into different pages:

1. **/basic** - Basic Data Fetching (`useQuery`)
2. **/mutation** - Creating/Updating Data (`useMutation`)
3. **/pagination** - Paginated Data Fetching
4. **/infinite** - Infinite Scrolling (`useInfiniteQuery`)
