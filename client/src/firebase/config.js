// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDEFnENDGFAtF55OCixTNXztONEESnV6pY",
    authDomain: "graphicsai.firebaseapp.com",
    projectId: "graphicsai",
    storageBucket: "graphicsai.appspot.com",
    messagingSenderId: "502849556607",
    appId: "1:502849556607:web:3cff0de24b310a4a5baf4a",
    measurementId: "G-LC35C3SH5K"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const database = getDatabase();
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    'login_hint': 'user@example.com'
});