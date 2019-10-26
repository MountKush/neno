import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
}


!firebase.apps.length ? firebase.initializeApp(config) : null

firebase.firestore().settings({ timestampsInSnapshots: true })

const storage = firebase.storage()
const firestore = firebase.firestore()
const auth = firebase.auth

export { storage, firestore, auth }
