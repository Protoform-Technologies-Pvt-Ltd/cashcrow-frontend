// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDdLxz2UEW7tmnDZpUfAbhERJGvv-Aj7h4",
  authDomain: "cashcrow-v1.firebaseapp.com",
  projectId: "cashcrow-v1",
  storageBucket: "cashcrow-v1.firebasestorage.app",
  messagingSenderId: "333211426416",
  appId: "1:333211426416:web:8e0ff9b72ffbcdb01bdeb5",
  measurementId: "G-Q1P1GCS0GP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);