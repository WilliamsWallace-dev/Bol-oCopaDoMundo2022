// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKGcxNnXsCR0avkXgrZD36O77woyLXACE",
  authDomain: "bolaocopa-1df95.firebaseapp.com",
  projectId: "bolaocopa-1df95",
  storageBucket: "bolaocopa-1df95.appspot.com",
  messagingSenderId: "948359283876",
  appId: "1:948359283876:web:8182291a11a5ba058b9231",
  measurementId: "G-3C806SPWV0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let db = getFirestore(app);
export default db;