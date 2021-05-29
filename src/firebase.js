import firebase from "firebase";
// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyDxxZrRE7nJclslTzsIm6Kg4nlzuyvPbTo",
  authDomain: "todo-app-fe065.firebaseapp.com",
  projectId: "todo-app-fe065",
  storageBucket: "todo-app-fe065.appspot.com",
  messagingSenderId: "91392279304",
  appId: "1:91392279304:web:275341d4f2513c67e862bd",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
