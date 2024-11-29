export interface Book {
  ISBN: string;
  author: string;
  coverImage: string;
  description: string;
  genre: string;
  id: number;
  language: string;
  pages: number;
  price: number;
  publicationDate: string;
  publisher: string;
  title: string;
}

export interface User {
  id?: string;
  uid: string;
  displayName: string;
  isAnonymous: boolean;
  isVerified: boolean;
  email: string;
  photoURL?: string; // Optional field
  [key: string]: any; // Additional optional fields
}
