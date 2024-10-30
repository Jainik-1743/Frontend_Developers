import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
import { Button } from "@repo/ui/components/ui/button";
import { Book } from "@repo/types/book";

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <Card className="w-full max-w-sm mx-auto">
      <CardHeader>
        <CardTitle>{book.title}</CardTitle>
        <CardDescription>{book.author}</CardDescription>
      </CardHeader>
      <CardContent>
        <img
          src={book.coverImage}
          alt={book.title}
          className="w-full h-48 object-cover mb-4"
        />
        <p>{book.description}</p>
        <p className="mt-2 font-bold">Price: ${book.price}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Details</Button>
        <Button>Add to Cart</Button>
      </CardFooter>
    </Card>
  );
};

export default BookCard;
