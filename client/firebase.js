// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-417e7.firebaseapp.com",
  projectId: "mern-estate-417e7",
  storageBucket: "mern-estate-417e7.appspot.com",
  messagingSenderId: "280542783143",
  appId: "1:280542783143:web:3cee7cd798fa4a38ff5d82",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
