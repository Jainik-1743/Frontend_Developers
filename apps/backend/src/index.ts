import express from "express";
import cors from "cors";
import booksRoutes from "./routes/book-routes";
import userRoutes from "./routes/user-routes";

const PORT = process.env.PORT || 45454;

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/books", booksRoutes);
app.use("/", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
