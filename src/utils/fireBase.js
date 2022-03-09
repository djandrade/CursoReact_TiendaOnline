import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBGa4fV15rAQsr0dGApM3wMKuQimCBcCPI",  
    authDomain: "coderhouse-project-24950.firebaseapp.com",
    projectId: "coderhouse-project-24950",
    storageBucket: "coderhouse-project-24950.appspot.com",
    messagingSenderId: "905471400373",
    appId: "1:905471400373:web:fe4b04c9c7039fb19621fc",
    measurementId: "G-FK0YSCYWTH"
  }; 

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);