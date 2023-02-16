import firebase from "firebase/compat/app";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAx66tF-Gco8KN9iR3ISt_NzUfn4HYZPjE",
    authDomain: "cart-c9d18.firebaseapp.com",
    projectId: "cart-c9d18",
    storageBucket: "cart-c9d18.appspot.com",
    messagingSenderId: "694417331195",
    appId: "1:694417331195:web:63e7cb38c10af1f6d4b15e"
  };
  
  //latest version initiliaze and export db like this below
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();