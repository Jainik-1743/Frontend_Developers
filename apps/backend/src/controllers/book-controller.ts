import { Request, Response } from "express";
import { getAllBooks, getBookById } from "../services/books-service";

export const fetchBooks = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const books = await getAllBooks(page, limit);
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Error fetching books" });
  }
};

export const fetchBookById = async (req: Request, res: Response) => {
  try {
    const book = await getBookById(req.params.id);
    if (!book) {
      res.status(404).send("Book not found");
      return;
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: "Error fetching book" });
  }
};
