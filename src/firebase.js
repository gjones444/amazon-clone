import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCXJNIcM4duRD88QgnzKJeoyiGe3QtdJVQ",
    authDomain: "clone-4c29d.firebaseapp.com",
    projectId: "clone-4c29d",
    storageBucket: "clone-4c29d.appspot.com",
    messagingSenderId: "228441696640",
    appId: "1:228441696640:web:fea9378a55aed6233cb965"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };