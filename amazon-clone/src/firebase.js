import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDEZdK5NE_dK8xR2KNagacx4P0fDcxdCQw",
  authDomain: "challenge-1ee93.firebaseapp.com",
  databaseURL: "https://challenge-1ee93.firebaseio.com",
  projectId: "challenge-1ee93",
  storageBucket: "challenge-1ee93.appspot.com",
  messagingSenderId: "463601580739",
  appId: "1:463601580739:web:7f87733b187add22da4076",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
