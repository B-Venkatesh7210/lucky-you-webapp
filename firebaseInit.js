import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAFJUYafx2lqRLdmRb6zrsO96sZFT9PpG0",
  authDomain: "luckyyou-69f3c.firebaseapp.com",
  projectId: "luckyyou-69f3c",
  storageBucket: "luckyyou-69f3c.appspot.com",
  messagingSenderId: "965079235596",
  appId: "1:965079235596:web:d2c11627d0df2db6684229",
  measurementId: "G-1GVPM7XNHN",
  databaseURL: "gs://luckyyou-69f3c.appspot.com",
};

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

export default db;

