// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSdZH0i8y_ggOkmKEsa2mPBdcPPRu7bNA",
  authDomain: "todo-3c64f.firebaseapp.com",
  projectId: "todo-3c64f",
  storageBucket: "todo-3c64f.appspot.com",
  messagingSenderId: "270571642912",
  appId: "1:270571642912:web:409035b85a0d3a816a1c45",
  measurementId: "G-WDWV7HYH8E"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)