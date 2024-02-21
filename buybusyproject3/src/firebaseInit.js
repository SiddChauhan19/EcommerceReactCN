// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkR90B1Irz4Pd8b1uVyNIKPsh3m99zg2A",
  authDomain: "ecommercswebcn.firebaseapp.com",
  projectId: "ecommercswebcn",
  storageBucket: "ecommercswebcn.appspot.com",
  messagingSenderId: "993026459660",
  appId: "1:993026459660:web:ff24749c3a45478829c629"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);