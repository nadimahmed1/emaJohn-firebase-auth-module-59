// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCmLgXcw6fWeNHN-fHjOvHLAgaxr_oEhN0",
    authDomain: "ema-john-firebase-rout-auth.firebaseapp.com",
    projectId: "ema-john-firebase-rout-auth",
    storageBucket: "ema-john-firebase-rout-auth.appspot.com",
    messagingSenderId: "519424659441",
    appId: "1:519424659441:web:455ba4dd856a45c2b2fe50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;