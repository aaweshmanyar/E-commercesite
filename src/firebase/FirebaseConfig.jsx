import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0JcFTcj1uODF7JFp_GMjLzzHG_AyOk0M",
  authDomain: "e-commercesite-ddf92.firebaseapp.com",
  projectId: "e-commercesite-ddf92",
  storageBucket: "e-commercesite-ddf92.appspot.com",
  messagingSenderId: "930552163638",
  appId: "1:930552163638:web:955ac96fbdeb8105c75797"
};


const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export{fireDB, auth};