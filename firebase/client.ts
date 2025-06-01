// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getApp, getApps, initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxX2NZvm52kyK_p53St0mxzgKPWBtPZaQ",
  authDomain: "interview-prep-bot-ai.firebaseapp.com",
  projectId: "interview-prep-bot-ai",
  storageBucket: "interview-prep-bot-ai.firebasestorage.app",
  messagingSenderId: "948816167759",
  appId: "1:948816167759:web:c733d736543ddde2e77b3a",
  measurementId: "G-VL92ZEML5P",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
