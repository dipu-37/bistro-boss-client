// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqCo_t8wP1s1sq58mFLtVNjW1j-Vw-Dgw",
  authDomain: "bistro-boss-229e3.firebaseapp.com",
  projectId: "bistro-boss-229e3",
  storageBucket: "bistro-boss-229e3.appspot.com",
  messagingSenderId: "755660075593",
  appId: "1:755660075593:web:19796b455af44fe1a2c598"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
