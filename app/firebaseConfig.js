// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCTna89SXaWXGA3IRKrMIQXRbAKqLyMFFw",
    authDomain: "redux-21dee.firebaseapp.com",
    databaseURL: "https://redux-21dee-default-rtdb.firebaseio.com",
    projectId: "redux-21dee",
    storageBucket: "redux-21dee.appspot.com",
    messagingSenderId: "422168044138",
    appId: "1:422168044138:web:911a33643178b733f12013",
    measurementId: "G-H426S2410H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const DB = getDatabase(app);