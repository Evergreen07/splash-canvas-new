import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAu_PHaSmsJ4UCWGzh2mRvoaF2DY4Ny-c4",
  authDomain: "splash-canvas-new.firebaseapp.com",
  projectId: "splash-canvas-new",
  storageBucket: "splash-canvas-new.appspot.com",
  messagingSenderId: "536336480253",
  appId: "1:536336480253:web:d3137e6cd4913987024b94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage(app);

export {app, db, storage};