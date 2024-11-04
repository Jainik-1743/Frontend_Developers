"use client";

import BookCard from "@/src/components/book-card";
import axios from "axios";
import { useEffect, useState } from "react";
import { Book } from "@repo/types/book";
import { useInView } from "react-intersection-observer";
import { Button } from "@repo/ui/components/ui/button";
import useFirebaseAuth from "@/src/hooks/firebase-auth";
import { User } from "firebase/auth";

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);
  const [fetchMore, setFetchMore] = useState(true);
  const [page, setPage] = useState(1);

  const [firebaseUser, setFirebaseUser] = useState<User | undefined>(undefined);

  const { signInWithGoogleProvider, logOut } = useFirebaseAuth();

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

  const handleSignInWithGoogle = async () => {
    const [userCredential, error] = await signInWithGoogleProvider();
    if (error) {
      console.log("Error signing in with Google", error);
    } else {
      const user = userCredential?.user;

      if (user) {
        setFirebaseUser(user);

        axios.post("http://localhost:45454/auth/google", {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          isAnonymous: user.isAnonymous,
          isVerified: user.emailVerified,
        });
      }
    }
  };

  const handleLogout = async () => {
    const [, error] = await logOut();
    if (error) {
      console.log("Error logging out", error);
    } else {
      setFirebaseUser(undefined);
    }
  };

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

      <p>{firebaseUser?.displayName}</p>

      <Button onClick={handleSignInWithGoogle}>Google Sign In</Button>

      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}
