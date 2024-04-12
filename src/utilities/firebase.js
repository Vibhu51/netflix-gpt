// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6yv9gmSisl3rGc4xLf7T81jIUamexgCQ",
  authDomain: "netflix-gpt-6c56f.firebaseapp.com",
  projectId: "netflix-gpt-6c56f",
  storageBucket: "netflix-gpt-6c56f.appspot.com",
  messagingSenderId: "626732483540",
  appId: "1:626732483540:web:e669a7a930b013c3154c41",
  measurementId: "G-V6LC335Q4J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line
const analytics = getAnalytics(app);
export const auth = getAuth();