// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3Oxegw2bhp5v0wKdZlp9DOH_q6Fv5koQ",
  authDomain: "clone-first-e957d.firebaseapp.com",
  projectId: "clone-first-e957d",
  storageBucket: "clone-first-e957d.firebasestorage.app",
  messagingSenderId: "845322242719",
  appId: "1:845322242719:web:36c8dbabd31915428570aa",
  measurementId: "G-WHPN8XG2K6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();