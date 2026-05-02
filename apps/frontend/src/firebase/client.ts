import { initializeApp, getApps, getApp, FirebaseOptions } from "firebase/app";
import { browserLocalPersistence, initializeAuth, Auth } from "firebase/auth";

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

let _auth: Auth | undefined;

export function getFirebaseAuth(): Auth {
  if (_auth) return _auth;

  const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

  _auth = initializeAuth(app, {
    persistence: browserLocalPersistence,
  });

  return _auth;
}
