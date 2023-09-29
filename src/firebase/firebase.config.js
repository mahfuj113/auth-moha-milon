// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWZ_T34-nP-qZpN-p4GmCTX_fNU2YG0CQ",
  authDomain: "auth-moha-milon-d409a.firebaseapp.com",
  projectId: "auth-moha-milon-d409a",
  storageBucket: "auth-moha-milon-d409a.appspot.com",
  messagingSenderId: "425419614196",
  appId: "1:425419614196:web:b3b8af1df38a40127bbba1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;