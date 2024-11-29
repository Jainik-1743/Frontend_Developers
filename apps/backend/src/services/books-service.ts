import { Book } from "@repo/types/book";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

const booksCollection = collection(db, "books");

export const getAllBooks = async (
  page: number,
  limit: number,
): Promise<Book[]> => {
  const querySnapshot = await getDocs(booksCollection);
  const books: Book[] = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
  })) as Book[];

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  return books.slice(startIndex, endIndex);
};

export const getBookById = async (id: string): Promise<Book | null> => {
  const bookQuery = query(booksCollection, where("id", "==", id));
  const querySnapshot = await getDocs(bookQuery);

  if (querySnapshot.empty) {
    return null;
  }

  return querySnapshot.docs[0].data() as Book;
};
