import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDIORFMBcyY4cnwkAsfwt-JLynDSJcdIRI",
  authDomain: "contact-app-ed7ef.firebaseapp.com",
  projectId: "contact-app-ed7ef",
  storageBucket: "contact-app-ed7ef.appspot.com",
  messagingSenderId: "425718760871",
  appId: "1:425718760871:web:cf7b2e0ed72deab31c2282",
};
firebase.initializeApp(firebaseConfig);
export default firebase;
