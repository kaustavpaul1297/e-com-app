// Version 9 requires importing all the elements of firebase using "/compat/name of the utility"

import firebase from "firebase/compat/app";

import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDAtGtWzbr6jRk5iU4HZBYPIlFdqvPnDUo",
  authDomain: "crown-db-30491.firebaseapp.com",
  projectId: "crown-db-30491",
  storageBucket: "crown-db-30491.appspot.com",
  messagingSenderId: "1024826107356",
  appId: "1:1024826107356:web:660d9a7a60805315d79b19",
  measurementId: "G-7LM6SSPLDG",
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
