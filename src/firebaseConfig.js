import firebase from 'firebase'
import "firebaseui";
import "firebaseui/dist/firebaseui.css";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDyFhUD9f3XQqdUEbIevt7hsZc7LcB7hYs",
    authDomain: "trackomad.firebaseapp.com",
    databaseURL: "https://trackomad.firebaseio.com",
    projectId: "trackomad",
    storageBucket: "trackomad.appspot.com",
    messagingSenderId: "223356418198",
    appId: "1:223356418198:web:0bd46a93b4baee385deab7"
  };
firebase.initializeApp(firebaseConfig)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser
const ui = new firebaseui.auth.AuthUI(auth);

// firebase collections
const usersCollection = db.collection('users')
const eatingWindowsCollection = db.collection('eatingWindows')

export {
    db,
    ui,
    auth,
    currentUser,
    usersCollection,
    eatingWindowsCollection
}