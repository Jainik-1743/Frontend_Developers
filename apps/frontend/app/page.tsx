"use client";

import { useEffect, useState } from "react";

import { Book } from "@repo/types/book";
import axios from "axios";
import debounce from "lodash.debounce";

import BookCard from "@/src/components/book-card";
import Loader from "@/src/components/loader";

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);
  const [fetchMore, setFetchMore] = useState(true);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // Fetch books function
  const fetchBooks = async (currentPage: number) => {
    if (loading) return; // Prevent multiple simultaneous calls
    setLoading(true);

    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/books`,
        {
          params: { page: currentPage, limit: 10 },
        },
      );

      setBooks((prevBooks) => [...prevBooks, ...response.data]);

      if (response.data.length < 10) {
        setFetchMore(false);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(`Error fetching books for page ${currentPage}:`, error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (loading || !fetchMore) return;

      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.body.offsetHeight - 200; // Trigger 200px before reaching bottom

      if (scrollPosition >= threshold) {
        setPage((prevPage) => prevPage + 1);
      }
    }, 300);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading, fetchMore]);

  useEffect(() => {
    if (page > 1) {
      fetchBooks(page);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div className="container mx-auto mb-16 min-h-screen p-4">
      <h1 className="mb-8 text-center text-4xl font-bold">Books</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {books.map((book) => (
          <BookCard book={book} key={book.id} />
        ))}
      </div>

      <div className="mt-8 text-center">{loading && <Loader />}</div>
    </div>
  );
}
