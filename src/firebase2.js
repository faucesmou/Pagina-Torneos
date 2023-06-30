import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig2 = {
  apiKey: "AIzaSyCPGAnFT0Xi9PCICa2TVGdOJpJYyGzFpSI",
  authDomain: "usuarios-2bd7c.firebaseapp.com",
  databaseURL: "https://usuarios-2bd7c-default-rtdb.firebaseio.com/",
  projectId: "usuarios-2bd7c",
  storageBucket: "usuarios-2bd7c.appspot.com",
  messagingSenderId: "929046183598",
  appId: "1:929046183598:web:23923a6e26fd02b02ff73f",
};

const firebaseUsuarios = firebase.initializeApp(firebaseConfig2, 'usuarios');

const databaseUsuarios = firebaseUsuarios.database();

export default databaseUsuarios;
