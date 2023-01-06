import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJMOX_btXZtsJGOopgLLpaP94hmuiT5nY",
  authDomain: "latracal-solutions.firebaseapp.com",
  projectId: "latracal-solutions",
  storageBucket: "latracal-solutions.appspot.com",
  messagingSenderId: "351842523028",
  appId: "1:351842523028:web:de4fce816751440891a181",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
