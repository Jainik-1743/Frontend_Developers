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
import Image from "next/image";

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => (
  <Card className="w-full max-w-sm mx-auto">
    <CardHeader>
      <CardTitle className="truncate">{book.title}</CardTitle>
      <CardDescription>{book.author}</CardDescription>
    </CardHeader>
    <CardContent>
      <Image
        src={book.coverImage}
        alt={book.title}
        width={300}
        height={200}
        priority
        className="object-cover h-[200px]"
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
