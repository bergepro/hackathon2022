// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseCfg";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
