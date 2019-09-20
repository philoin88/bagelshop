import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyB8erCVknbdilvvetg6hQbhYOo5R5OHY0o",
  authDomain: "bagel-shop-f1267.firebaseapp.com",
  databaseURL: "https://bagel-shop-f1267.firebaseio.com",
  projectId: "bagel-shop-f1267",
  storageBucket: "",
  messagingSenderId: "565203374756",
  appId: "1:565203374756:web:8fe445aa3bebba10634c31"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()
export const dbMenuAdd = db.collection('menuItems')