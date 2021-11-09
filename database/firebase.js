import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDM5owvoUEJH5gkAVOVT0bI3XpzlSzQQus",
    authDomain: "platy-dcdc8.firebaseapp.com",
    databaseURL: "https://platy-dcdc8-default-rtdb.firebaseio.com",
    projectId: "platy-dcdc8",
    storageBucket: "platy-dcdc8.appspot.com",
    messagingSenderId: "756181611305",
    appId: "1:756181611305:web:180871b0a265471f06fd38"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const db = firebase.firestore();

export default {
    firebase,
    db,
}