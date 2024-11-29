import { Request, Response } from "express";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

const usersCollection = collection(db, "users");

export const users = async (req: Request, res: Response) => {
  try {
    const newUser = req.body;
    const docRef = await addDoc(usersCollection, newUser);
    const { id, ...userWithoutId } = newUser;
    res.status(201).json({ id: docRef.id, ...userWithoutId });
  } catch (error) {
    res.status(500).send("Error adding user");
  }
};

export const userQuery = async (req: Request, res: Response) => {
  try {
    const usersQuery = query(
      usersCollection,
      where("uid", "==", req.params.uid),
    );

    const querySnapshot = await getDocs(usersQuery);

    if (querySnapshot.empty) {
      res.status(404).send("User not found");
    } else {
      res.json(querySnapshot.docs[0].data());
    }
  } catch (error) {
    res.status(500).send("Error fetching user");
  }
};
