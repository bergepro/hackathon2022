// Import the functions you need from the SDKs you need
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseCfg";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
