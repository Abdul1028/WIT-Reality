// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqFTgBTs10Qx3Km2eVWASTum-1Eoy64xo",
  authDomain: "wit-reality.firebaseapp.com",
  projectId: "wit-reality",
  storageBucket: "wit-reality.appspot.com",
  messagingSenderId: "901537370419",
  appId: "1:901537370419:web:ebf1286dfe48ba6b2eee46"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp() 

const auth = getAuth(app);
export {app,auth}