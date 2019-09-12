import firebase from 'firebase'
import "firebaseui";
import "firebaseui/dist/firebaseui.css";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "api-key",
  authDomain: "project-id.firebaseapp.com",
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "project-id",
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "sender-id",
  appID: "app-id",
};
firebase.initializeApp(firebaseConfig)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const ui = new firebaseui.auth.AuthUI(auth);

// firebase collections
const eatingWindowsCollection = db.collection('eatingWindows')

export {
    db,
    ui,
    auth,
    eatingWindowsCollection
}
