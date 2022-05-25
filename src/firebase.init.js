// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-gS2Rhey-nw5k0WNVA1pFaeTQjvhRE0k",
  authDomain: "power-tool-items.firebaseapp.com",
  projectId: "power-tool-items",
  storageBucket: "power-tool-items.appspot.com",
  messagingSenderId: "1080315599372",
  appId: "1:1080315599372:web:619f45a19eca50dd092c29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
