import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

let firebaseConfig = {
  apiKey: 'AIzaSyAj2I9eIxYn5vTXRtYnyj7BMaFm5-LrYJU',
  authDomain: 'react-redux-b08ed.firebaseapp.com',
  projectId: 'react-redux-b08ed',
  storageBucket: 'react-redux-b08ed.appspot.com',
  messagingSenderId: '972246763970',
  appId: '1:972246763970:web:4d963d3a74f2bfa2e4ae5b',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

let db = firebase.firestore().collection('favs')

export function getFavs(uid) {
  return db
    .doc(uid)
    .get()
    .then((snap) => {
      return snap.data().favoritos
    })
}

export function updateDB(array, uid) {
  return db.doc(uid).set({ favoritos: [...array] })
}

export function signOutGoogle() {
  firebase.auth().signOut()
}

export function loginWithGoogle() {
  let provider = new firebase.auth.GoogleAuthProvider()
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((snap) => snap.user)
}
