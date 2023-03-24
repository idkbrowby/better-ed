// Import the functions you need from the SDKs you need
import {deleteApp,getApp,getApps,initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth ,setPersistence, inMemoryPersistence} from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIvoPFZawrHFkbR-8JL2ZflJFkFbOyoss",
  authDomain: "better-ed-1c078.firebaseapp.com",
  projectId: "better-ed-1c078",
  storageBucket: "better-ed-1c078.appspot.com",
  messagingSenderId: "536300734086",
  appId: "1:536300734086:web:ef30dae0220106f4b2b307"
};

// Initialize Firebase
let firebaseApp;

if(!getApps().length){
    firebaseApp=initializeApp(firebaseConfig);
}
else{
    firebaseApp=getApp();
    deleteApp(firebaseApp);
    firebaseApp=initializeApp(firebaseConfig);
}

export const auth = getAuth(firebaseApp);