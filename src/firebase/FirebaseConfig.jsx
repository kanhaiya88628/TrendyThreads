// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA7znwO3VBo_9CXfmm0Y0xxJp2KzAaa0I",
  authDomain: "trendythreads-ed39c.firebaseapp.com",
  projectId: "trendythreads-ed39c",
  storageBucket: "trendythreads-ed39c.appspot.com",
  messagingSenderId: "429484194521",
  appId: "1:429484194521:web:79ce1a3d6a405a42569cc8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
