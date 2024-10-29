import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import fs from "fs";
import path from "path";
import { Book } from "./types";

const DATA_PATH = path.join(__dirname, "./data", "books.json");

const readBooksFromFile = (): Book[] => {
  const data = fs.readFileSync(DATA_PATH, "utf8");
  return JSON.parse(data);
};

const migrateData = async () => {
  const books = readBooksFromFile();
  const booksCollection = collection(db, "books");

  for (const book of books) {
    await addDoc(booksCollection, book);
  }

  console.log("Data migration completed.");
};

migrateData().catch(console.error);
