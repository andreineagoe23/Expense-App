import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2GGWFv-Q2TmqQ59Pub8rvQmsbJwd68a0",
    authDomain: "expenseapp-481e2.firebaseapp.com",
    projectId: "expenseapp-481e2",
    storageBucket: "expenseapp-481e2.appspot.com",
    messagingSenderId: "310642663",
    appId: "1:310642663:web:3d42fc30caa1370f3bdf42",
    measurementId: "G-S6VGC2CQ17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize auth object

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };