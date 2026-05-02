import {
  signInWithPopup,
  GoogleAuthProvider,
  UserCredential,
  AuthProvider,
  browserPopupRedirectResolver,
  signOut,
} from "firebase/auth";

import { getFirebaseAuth } from "../firebase/client";

export default function useFirebaseAuth() {
  const signInWithGoogleProvider = async (): Promise<
    [UserCredential | null, Error | null]
  > => {
    try {
      const auth = getFirebaseAuth();
      const googleProvider: AuthProvider =
        new GoogleAuthProvider().setCustomParameters({
          display: "popup",
          prompt: "select_account",
        });

      const userCredential = await signInWithPopup(
        auth,
        googleProvider,
        browserPopupRedirectResolver,
      );
      return [userCredential, null];
    } catch (error) {
      return [null, error as Error];
    }
  };

  const logOut = async (): Promise<[void | null, Error | null]> => {
    try {
      const auth = getFirebaseAuth();
      await signOut(auth);
      return [null, null];
    } catch (error) {
      return [null, error as Error];
    }
  };

  return { signInWithGoogleProvider, logOut };
}
