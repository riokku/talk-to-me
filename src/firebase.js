// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq64S4CCN00IHDW_FjciVU6FPbOc-XXJs",
  authDomain: "talktome-d1af4.firebaseapp.com",
  projectId: "talktome-d1af4",
  storageBucket: "talktome-d1af4.appspot.com",
  messagingSenderId: "38605255901",
  appId: "1:38605255901:web:a08823755b8b5bedb6d734"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
