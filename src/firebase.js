import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBL-DPIPH-HPljBgQBlIik56cKODr0oOQ8",
    authDomain: "linkedin-clone-dedfc.firebaseapp.com",
    projectId: "linkedin-clone-dedfc",
    storageBucket: "linkedin-clone-dedfc.appspot.com",
    messagingSenderId: "808252266103",
    appId: "1:808252266103:web:b06e9cf2af788172b79872",
    measurementId: "G-7Y5BJNZLCS"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };