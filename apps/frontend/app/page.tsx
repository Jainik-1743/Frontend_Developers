"use client";

import BookCard from "@/src/components/book-card";
import axios from "axios";
import { useEffect, useState } from "react";

export interface Book {
  ISBN: string;
  author: string;
  coverImage: string;
  description: string;
  genre: string;
  id: number;
  language: string;
  pages: number;
  price: number;
  publicationDate: string;
  publisher: string;
  title: string;
}

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    axios.get("http://localhost:45454/books").then((response) => {
      setBooks(response.data);
    });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
