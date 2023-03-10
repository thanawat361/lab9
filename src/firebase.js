import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCOjcdw9yu-Chfmyc2JFfBsFCjLBg5FmDU",
  authDomain: "lab9-ebcd8.firebaseapp.com",
  databaseURL: "https://lab9-ebcd8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "lab9-ebcd8",
  storageBucket: "lab9-ebcd8.appspot.com",
  messagingSenderId: "541094609210",
  appId: "1:541094609210:web:45e042d13297df8895d003",
  measurementId: "G-BZ3E6G6X4S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export default db;
