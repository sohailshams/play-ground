// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP-1uzPvffS-9weY_e6iD5O9jwsmTY89I",
  authDomain: "test-1d31b.firebaseapp.com",
  projectId: "test-1d31b",
  storageBucket: "test-1d31b.appspot.com",
  messagingSenderId: "287165895658",
  appId: "1:287165895658:web:c751d76d61a5d9c4585893",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GithubAuthProvider(app);

export { auth, provider };
