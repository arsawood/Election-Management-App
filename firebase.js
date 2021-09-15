import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCsOoUkDkRDuSoAZCuCFVt513HQKYwGW5M",
  authDomain: "election2021-6c51d.firebaseapp.com",
  databaseURL: "https://election2021-6c51d-default-rtdb.firebaseio.com",
  projectId: "election2021-6c51d",
  storageBucket: "election2021-6c51d.appspot.com",
  messagingSenderId: "510522629557",
  appId: "1:510522629557:web:3b13c150ff82e1bb9a8dfc"
  });

const fire = firebaseApp
var db = firebaseApp.firestore();
export { fire, db };