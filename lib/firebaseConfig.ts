// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASEAPIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASEAUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASEPROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASESTORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASEMSGSENDERID,
  appId: process.env.NEXT_PUBLIC_FIREBASEAPPID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASEMEASUREMENTID,
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider}

