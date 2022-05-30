import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRjQ21nupjzbJA2G4z7NCLbY1ZyAPKvvw",
  authDomain: "crud-9138f.firebaseapp.com",
  projectId: "crud-9138f",
  storageBucket: "crud-9138f.appspot.com",
  messagingSenderId: "690347380796",
  appId: "1:690347380796:web:5736ab7bf106b4a8df3339",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export {firebase}
