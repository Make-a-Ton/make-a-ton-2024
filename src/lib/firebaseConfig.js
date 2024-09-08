// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "make-a-ton-32249.firebaseapp.com",
  projectId: "make-a-ton-32249",
  storageBucket: "make-a-ton-32249.appspot.com",
  messagingSenderId: "619336380250",
  appId: "1:619336380250:web:bc4075b9a925eddca50d63",
  measurementId: "G-BWS52CBSDH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
// const analytics = getAnalytics(app);
