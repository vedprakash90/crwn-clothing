import firebase from 'firebase/app'
import  'firebase/firebase-firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAPYq0kbBmJmRkBbzL-yUhILqXDNPFTAp8",
    authDomain: "crown-db-2042d.firebaseapp.com",
    databaseURL: "https://crown-db-2042d.firebaseio.com",
    projectId: "crown-db-2042d",
    storageBucket: "crown-db-2042d.appspot.com",
    messagingSenderId: "369126985162",
    appId: "1:369126985162:web:14f2f3fa2380ac4269d333",
    measurementId: "G-7SRSEMX3ER"
  };

  firebase.initializeApp(config)

  export const auth=firebase.auth()

  export const firestore=firebase.firestore()

  const provider=new firebase.auth.GoogleAuthProvider()

  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle=()=>auth.signInWithPopup(provider)

  export default firebase

