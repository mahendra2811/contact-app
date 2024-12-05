// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCO7DnkKcahyd-PnaB0LTi9gp2PEamBuxk",
  authDomain: "vite-contact-e0404.firebaseapp.com",
  projectId: "vite-contact-e0404",
  storageBucket: "vite-contact-e0404.firebasestorage.app",
  messagingSenderId: "882515824794",
  appId: "1:882515824794:web:e760005b573ce3a433cf23",
  measurementId: "G-3NFHVY7R4Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);