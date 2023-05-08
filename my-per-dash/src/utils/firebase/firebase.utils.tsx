// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkz2HzF3TRfe_5lnu2OQVQ0RkpoFHRhLo",
  authDomain: "my-per-dash-40eff.firebaseapp.com",
  projectId: "my-per-dash-40eff",
  storageBucket: "my-per-dash-40eff.appspot.com",
  messagingSenderId: "421097290835",
  appId: "1:421097290835:web:1631e76fa6f4a7f6e35aa6",
};

// Initialize Firebase
const myPerDashApp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(myPerDashApp);
