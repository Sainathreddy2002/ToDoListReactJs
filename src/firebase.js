// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGky_Rz9dBYqZok5HxhAHreC4fdYSPSCU",
  authDomain: "react-practice-1d94e.firebaseapp.com",
  projectId: "react-practice-1d94e",
  storageBucket: "react-practice-1d94e.appspot.com",
  messagingSenderId: "523543022155",
  appId: "1:523543022155:web:779e0b978998c95f64dbce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)