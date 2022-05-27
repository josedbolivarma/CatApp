import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBi1H4s3NKy8PCQILrD1O00u7r5658IzDI",
  authDomain: "catapi-4e055.firebaseapp.com",
  projectId: "catapi-4e055",
  storageBucket: "catapi-4e055.appspot.com",
  messagingSenderId: "425276761208",
  appId: "1:425276761208:web:6f75ad38c3b7c26c00398d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const db = getFirestore();

export {
  app, 
  google, 
  db
}