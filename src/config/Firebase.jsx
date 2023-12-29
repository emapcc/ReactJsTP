// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMlE8LJ78wVq4rAsOcABONepGfyyAR88U",
  authDomain: "react-tp-9327f.firebaseapp.com",
  projectId: "react-tp-9327f",
  storageBucket: "react-tp-9327f.appspot.com",
  messagingSenderId: "323559814983",
  appId: "1:323559814983:web:c3f507c767152badfebe62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// libros.forEach((libr) => {
//     addDoc(collection(db, 'libros'), libr)
//         .then((elem) => {
//             console.log(`se agrego preducto con id: ${elem.id}`);
//         })
//         .catch((err) => console.log(err))
// })