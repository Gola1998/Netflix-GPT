// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDwI5GSB7yNRg_MsUYOwvZdhuHZvF1X6I",
  authDomain: "netflixgpt-3010.firebaseapp.com",
  projectId: "netflixgpt-3010",
  storageBucket: "netflixgpt-3010.firebasestorage.app",
  messagingSenderId: "92553863056",
  appId: "1:92553863056:web:37e94b1dbd5146b502dd15",
  measurementId: "G-QTX8FRN34L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);