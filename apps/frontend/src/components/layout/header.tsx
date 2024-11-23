"use client";

import useFirebaseAuth from "@/src/hooks/firebase-auth";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@repo/ui/components/ui/avatar";
import { Button } from "@repo/ui/components/ui/button";
import axios from "axios";
import { User } from "firebase/auth";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [firebaseUser, setFirebaseUser] = useState<User | null>(null);

  const { signInWithGoogleProvider, logOut } = useFirebaseAuth();

  // Retrieve user from local storage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("firebaseUser");
    if (storedUser) {
      setFirebaseUser(JSON.parse(storedUser));
    }
  }, []);

  // Google Sign-In
  const handleSignInWithGoogle = async () => {
    const [userCredential, error] = await signInWithGoogleProvider();
    if (error) {
      console.error("Error signing in with Google", error);
    } else {
      const user = userCredential?.user;

      if (user) {
        setFirebaseUser(user);
        localStorage.setItem("firebaseUser", JSON.stringify(user));

        axios.post("http://localhost:45454/auth/google", {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          isAnonymous: user.isAnonymous,
          isVerified: user.emailVerified,
        });
      }
    }
  };

  // Logout
  const handleLogout = async () => {
    const [, error] = await logOut();
    if (error) {
      console.error("Error logging out", error);
    } else {
      setFirebaseUser(null);
      localStorage.removeItem("firebaseUser");
    }
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <span className="text-xl font-bold">Jainik</span>
      </div>
      {firebaseUser ? (
        <div className="flex items-center space-x-5">
          <Avatar>
            <AvatarImage src={firebaseUser?.photoURL || undefined} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <Button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </Button>
        </div>
      ) : (
        <Button
          onClick={handleSignInWithGoogle}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Login
        </Button>
      )}
    </header>
  );
};

export default Header;
