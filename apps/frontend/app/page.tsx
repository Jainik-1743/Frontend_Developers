"use client";

import BookCard from "@/src/components/book-card";
import axios from "axios";
import { useEffect, useState } from "react";
import { Book } from "@repo/types/book";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);
  const [fetchMore, setFetchMore] = useState(true);
  const [page, setPage] = useState(1);

  const { ref, inView } = useInView({
    threshold: 1.0,
    initialInView: false,
  });

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get("http://localhost:45454/books", {
        params: {
          page,
          limit: 10,
        },
      });

      setBooks((prevBooks) => [...prevBooks, ...response.data]);
      if (response.data.length < 10) {
        setFetchMore(false);
      }
    };

    if (fetchMore) fetchBooks();
  }, [page, fetchMore]);

  useEffect(() => {
    if (inView && fetchMore) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [inView, fetchMore]);

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8">Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

      <div ref={ref} className="mt-8 text-center">
        {fetchMore ? (
          <p>Loading more books...</p>
        ) : (
          <p>No more books available.</p>
        )}
      </div>
    </div>
  );
}
