import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyCfzjPKsQWvnyJFOD8zJ0J7uwFkqW2hpq4",
    authDomain: "futurafastigheter.firebaseapp.com",
    databaseURL: "https://futurafastigheter.firebaseio.com",
    projectId: "futurafastigheter",
    storageBucket: "futurafastigheter.appspot.com",
    messagingSenderId: "859750613506",
    appId: "1:859750613506:web:8b92502a1e7d8f78ec9d1b",
    measurementId: "G-64HC9MCQ76"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();