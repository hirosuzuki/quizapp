// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLYZtNlPsNfMrOw91Hysyio47qUIBkwUc",
  authDomain: "quizapp-jp-2023.firebaseapp.com",
  projectId: "quizapp-jp-2023",
  storageBucket: "quizapp-jp-2023.appspot.com",
  messagingSenderId: "489341681407",
  appId: "1:489341681407:web:c25513b3e928459a2016ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("Firbase init", app)
