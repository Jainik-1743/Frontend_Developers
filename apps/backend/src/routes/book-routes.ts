import express from "express";
import { fetchBookById, fetchBooks } from "../controllers/book-controller";

const router = express.Router();

router.get("/", fetchBooks);
router.get("/:id", fetchBookById);

export default router;
