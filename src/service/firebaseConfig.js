// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import getFirestore for Firestore
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8TIQCawJH-6un0xNmmMJByAKwOWSZMf8",
  authDomain: "trip-planer1.firebaseapp.com",
  projectId: "trip-planer1",
  storageBucket: "trip-planer1.firebasestorage.app",
  messagingSenderId: "789791703923",
  appId: "1:789791703923:web:f8ec19dff5419d1412bb06",
  measurementId: "G-XBLKLT4JWN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // Initialize Firestore
