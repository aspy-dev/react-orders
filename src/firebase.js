import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAQ5V8tKuSXzinCwDarzDkwZb2OTgaGkAI",
  authDomain: "react-orders-d7409.firebaseapp.com",
  projectId: "react-orders-d7409",
  storageBucket: "react-orders-d7409.appspot.com",
  messagingSenderId: "1078184915276",
  appId: "1:1078184915276:web:816dd2f2df46881afd1fe9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };