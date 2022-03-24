import { NFTStorage, File } from "nft.storage";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  collection,
  addDoc,
  doc,
  setDoc,
  onSnapshot,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import fs from "fs";

const firebaseConfig = {
  apiKey: "AIzaSyAFJUYafx2lqRLdmRb6zrsO96sZFT9PpG0",
  authDomain: "luckyyou-69f3c.firebaseapp.com",
  projectId: "luckyyou-69f3c",
  storageBucket: "luckyyou-69f3c.appspot.com",
  messagingSenderId: "965079235596",
  appId: "1:965079235596:web:d2c11627d0df2db6684229",
  measurementId: "G-1GVPM7XNHN",
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage();

const data = fs.readFileSync("../../img/Ethereum.png");
let file = new File([data], "devfolioDp.png", {
  type: "image/png",
});
const metadata = {
  contentType: "image/png",
};

const storageRef = ref(storage, "screenshot/devfolioDp.png");
const uploadTask = uploadBytesResumable(storageRef, data, metadata);

uploadTask.on(
  "state_changed",
  (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log("Upload is " + progress + "% done");
    switch (snapshot.state) {
      case "paused":
        console.log("Upload is paused");
        break;
      case "running":
        console.log("Upload is running");
        break;
    }
  },
  (error) => {
    console.log("within errror");
    switch (error.code) {
      case "storage/unauthorized":
        break;
      case "storage/canceled":
        break;
      case "storage/unknown":
        break;
    }
  },
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log("File available at", downloadURL);
    });
  }
);


