// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// const firebaseConfig = {
//   apiKey: "AIzaSyD6E0IbwZTwsXokz4g6PSsnSv3LTtB8LWA",
//   authDomain: "challengerobot-99a77.firebaseapp.com",
//   projectId: "challengerobot-99a77",
//   storageBucket: "challengerobot-99a77.appspot.com",
//   messagingSenderId: "999569970231",
//   appId: "1:999569970231:web:8aceda9167c2b896b11bb2"
// };

const firebaseConfig = {
  apiKey: "AIzaSyAgredbV-FbtGHKd86PrvkxES5XOtgWPJI",
  authDomain: "codigo-facilito-34273.firebaseapp.com",
  projectId: "codigo-facilito-34273",
  storageBucket: "codigo-facilito-34273.appspot.com",
  messagingSenderId: "794205377162",
  appId: "1:794205377162:web:2095478fd9f0635bf81373"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);

export default firebaseApp;
