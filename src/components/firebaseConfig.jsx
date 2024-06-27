import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwD2QGwgcyxhUyzpUXByxOb0aW3GUejgM",
  authDomain: "fir-auth-24aff.firebaseapp.com",
  projectId: "fir-auth-24aff",
  storageBucket: "fir-auth-24aff.appspot.com",
  messagingSenderId: "221064511468",
  appId: "1:221064511468:web:45b8a52d6ccdbaae628ac9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };