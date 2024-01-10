import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD725L0GyHjQtJB3xup05ElhTRiti-y_hE",
  authDomain: "chating-b665e.firebaseapp.com",
  projectId: "chating-b665e",
  storageBucket: "chating-b665e.appspot.com",
  messagingSenderId: "610526880845",
  appId: "1:610526880845:web:eb7ad857323f786fa9a804"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)