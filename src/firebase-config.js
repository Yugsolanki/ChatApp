// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDP1jEhYZokyY03i81zaTPv2JRYqLE8rxU",
  authDomain: "chatapp-98b3b.firebaseapp.com",
  projectId: "chatapp-98b3b",
  storageBucket: "chatapp-98b3b.appspot.com",
  messagingSenderId: "1038668725517",
  appId: "1:1038668725517:web:f39c7c00dda3e07f5b8444"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);