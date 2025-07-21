//


import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCOzjMX2WUtMutOPCaatX0uM7ZhvB9ijCU",
  authDomain: "api-prueba-node-ff279.firebaseapp.com",
  projectId: "api-prueba-node-ff279",
  storageBucket: "api-prueba-node-ff279.firebasestorage.app",
  messagingSenderId: "749459355972",
  appId: "1:749459355972:web:4694aa134599c6716abf11"
};


const app = initializeApp(firebaseConfig);


const db = getFirestore(app);
export { db };