"use client";

import { useEffect, useState } from "react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@repo/ui/components/ui/avatar";
import { Button } from "@repo/ui/components/ui/button";
import axios from "axios";
import { User } from "firebase/auth";

import useFirebaseAuth from "@/src/hooks/firebase-auth";

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
      // eslint-disable-next-line no-console
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
      // eslint-disable-next-line no-console
      console.error("Error logging out", error);
    } else {
      setFirebaseUser(null);
      localStorage.removeItem("firebaseUser");
    }
  };

  return (
    <header className="flex items-center justify-between bg-gray-800 p-4 text-white">
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
            className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      ) : (
        <Button
          className="mr-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={handleSignInWithGoogle}
        >
          Login
        </Button>
      )}
    </header>
  );
};

export default Header;
