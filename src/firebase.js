import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAFx551RaIEYURRnzjlXVGqE43G4ZJGf4o",
  authDomain: "hathyo-135c1.firebaseapp.com",
  projectId: "hathyo-135c1",
  storageBucket: "hathyo-135c1.firebasestorage.app",
  messagingSenderId: "640001228581",
  appId: "1:640001228581:web:885d9ed16e92f525dda4cc",
  measurementId: "G-DNEPB9ENF8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
