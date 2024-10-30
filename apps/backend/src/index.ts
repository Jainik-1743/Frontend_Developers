import express, { Request, Response } from "express";
import { db } from "./firebase";
import {
  collection,
  getDocs,
  doc,
  addDoc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";
import cors from "cors";
import { Book } from "@repo/types/book";

const app = express();
const PORT = 45454;

app.use(cors());
app.use(express.json());

const booksCollection = collection(db, "books");

app.get("/books", async (req: Request, res: Response) => {
  try {
    const querySnapshot = await getDocs(booksCollection);
    const books: Book[] = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
    })) as Book[];

    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 100;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedBooks = books.slice(startIndex, endIndex);

    res.json(paginatedBooks);
  } catch (error) {
    res.status(500).send("Error fetching books");
  }
});

app.get("/books/:id", async (req: Request, res: Response) => {
  try {
    const booksQuery = query(
      booksCollection,
      where("id", "==", parseInt(req.params.id)),
    );
    const querySnapshot = await getDocs(booksQuery);

    if (querySnapshot.empty) {
      res.status(404).send("Book not found");
    } else {
      res.json(querySnapshot.docs[0].data());
    }
  } catch (error) {
    res.status(500).send("Error fetching book");
  }
});

app.post("/books", async (req: Request, res: Response) => {
  try {
    const newBook: Book = req.body;
    const docRef = await addDoc(booksCollection, newBook);
    const { id, ...bookWithoutId } = newBook;
    res.status(201).json({ id: docRef.id, ...bookWithoutId });
  } catch (error) {
    res.status(500).send("Error adding book");
  }
});

app.delete("/books/:id", async (req: Request, res: Response) => {
  try {
    const bookDoc = doc(db, "books", req.params.id);
    await deleteDoc(bookDoc);
    res.status(200).send("Book deleted");
  } catch (error) {
    res.status(500).send("Error deleting book");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
