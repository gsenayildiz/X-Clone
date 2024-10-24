import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBFCPYxNY4DyCldKs4ZHM6gW3nmQoAjVc0",
  authDomain: "twitter-clone-afbbd.firebaseapp.com",
  projectId: "twitter-clone-afbbd",
  storageBucket: "twitter-clone-afbbd.appspot.com",
  messagingSenderId: "293069060158",
  appId: "1:293069060158:web:0f75428b8c4a11d257f96f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth referansaını al
export const auth = getAuth(app);

//google sağlayıcının kurulumu
export const provider = new GoogleAuthProvider();

// veritabanının referansını al
export const db = getFirestore(app);

// storage referansını al
export const storage = getStorage(app);