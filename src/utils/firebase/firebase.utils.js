// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'sam-clothing-db-ea453.firebaseapp.com',
  projectId: 'sam-clothing-db-ea453',
  storageBucket: 'sam-clothing-db-ea453.appspot.com',
  messagingSenderId: '1028254337302',
  appId: '1:1028254337302:web:52d862b91e16fc89cda837',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
