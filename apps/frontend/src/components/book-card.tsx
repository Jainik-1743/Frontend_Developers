import Image from "next/image";

import { Book } from "@repo/types/book";
import { Button } from "@repo/ui/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => (
  <Card className="mx-auto w-full max-w-sm">
    <CardHeader>
      <CardTitle className="truncate">{book.title}</CardTitle>
      <CardDescription>{book.author}</CardDescription>
    </CardHeader>
    <CardContent>
      <Image
        alt={book.title}
        className="h-[200px] object-cover"
        height={200}
        priority
        src={book.coverImage}
        width={300}
      />
      <p className="mt-2">{book.description}</p>
      <p className="mt-2 font-bold">Price: ${book.price}</p>
    </CardContent>
    <CardFooter className="flex justify-between">
      <Button variant="outline">Details</Button>
      <Button>Add to Cart</Button>
    </CardFooter>
  </Card>
);

export default BookCard;
