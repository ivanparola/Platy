
import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
const app = firebase.initializeApp(firebaseConfig);
const authUser = firebase.auth(app)
const db = firebase.firestore(app);

export function signup1(email, password) {
    return authUser.createUserWithEmailAndPassword(email, password);
}

export function login1(email, password) {
    return authUser.signInWithEmailAndPassword(email, password);
}

export function logout1() {
    return authUser.signOut();
}

export function current1() {
      return authUser.currentUser;
}



export default {
    firebase,
    db,
}