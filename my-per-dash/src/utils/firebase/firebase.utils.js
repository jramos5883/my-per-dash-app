import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkz2HzF3TRfe_5lnu2OQVQ0RkpoFHRhLo",
  authDomain: "my-per-dash-40eff.firebaseapp.com",
  projectId: "my-per-dash-40eff",
  storageBucket: "my-per-dash-40eff.appspot.com",
  messagingSenderId: "421097290835",
  appId: "1:421097290835:web:1631e76fa6f4a7f6e35aa6",
};

const myPerDashApp = initializeApp(firebaseConfig);

// Firebase Google Auth/SignIn Setup
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//Firebase Database Setup
