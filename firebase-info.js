// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged, getRedirectResult } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIRE_KEY,
    authDomain: "the-sous-chef.firebaseapp.com",
    projectId: "the-sous-chef",
    storageBucket: "the-sous-chef.appspot.com",
    messagingSenderId: "559102320958",
    appId: "1:559102320958:web:43bf9f4ace8b4834ed0c6f",
    measurementId: "G-YSFL3R80L9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);

export { auth };
