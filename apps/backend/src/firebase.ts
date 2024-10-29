import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAroDfMNpbhSxFvhfoGM9UTW4L_mVz5s_E",
  authDomain: "jainik-64d5f.firebaseapp.com",
  projectId: "jainik-64d5f",
  storageBucket: "jainik-64d5f.appspot.com",
  messagingSenderId: "79924288834",
  appId: "1:79924288834:web:25018b9818a02ce561bcdb",
  measurementId: "G-5N11E8SP1E",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
