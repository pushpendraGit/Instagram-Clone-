import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyBvKGGs9Q3F97PXb8a7wOfHDzBBP041R5g",
    authDomain: "insta-ef82b.firebaseapp.com",
    databaseURL: "https://insta-ef82b.firebaseio.com",
    projectId: "insta-ef82b",
    storageBucket: "insta-ef82b.appspot.com",
    messagingSenderId: "465738133505",
    appId: "1:465738133505:web:930bdf9f7ab5cf6dc65000"
  })

const db = firebaseApp.firestore();

const auth = firebase.auth()

const storage = firebase.storage();

export {db, auth, storage};
