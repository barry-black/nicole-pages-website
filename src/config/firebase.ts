import { initializeApp } from "firebase/app";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyDIwvxbIWE7IKRUdGx_iUfaZLOPP76UiBs",
  authDomain: "nicolepages-website.firebaseapp.com",
  projectId: "nicolepages-website",
  storageBucket: "nicolepages-website.firebasestorage.app",
  messagingSenderId: "214671891231",
  appId: "1:214671891231:web:50ef9a66480b8690666e2a"
};

// ✅ Initialisation de l'application Firebase côté client
const app = initializeApp(firebaseConfig);

// ✅ Accès aux Cloud Functions, avec région définie (important pour éviter les erreurs)
const functions = getFunctions(app, "europe-west1");

export { app, functions };
