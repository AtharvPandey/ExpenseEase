// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxPDySj4SfNukgvIAHOnwNDc-bkCuGsdM",
  authDomain: "expenseease-by-atharv.firebaseapp.com",
  projectId: "expenseease-by-atharv",
  storageBucket: "expenseease-by-atharv.appspot.com",
  messagingSenderId: "784094952851",
  appId: "1:784094952851:web:d49f9fd51e08057bd07c66",
  measurementId: "G-L8370FFL9R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
