// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

    databaseURL: import.meta.env.VITE_DATABASE_URL
};


// Initialize Firebase

initializeApp (firebaseConfig);
const database = getDatabase ()

export { database }