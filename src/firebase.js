import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

/* import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; */

const firebaseConfig = {
    apiKey: "AIzaSyBhsHsymWI06RVODvyTfwa6b0ud9lFRfxc",
  authDomain: "torneo-ecd27.firebaseapp.com",
  databaseURL: "https://torneo-ecd27-default-rtdb.firebaseio.com",
  projectId: "torneo-ecd27",
  storageBucket: "torneo-ecd27.appspot.com",
  messagingSenderId: "388599099608",
  appId: "1:388599099608:web:eeaff3c56412e0dd07e7ad",
  measurementId: "G-9MR4J0DZ80"
};


firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export default database;
