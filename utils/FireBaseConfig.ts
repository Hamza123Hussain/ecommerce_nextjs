// src/utils/firebaseConfig.ts
import { initializeApp, FirebaseApp } from 'firebase/app'
import { getFirestore, Firestore } from 'firebase/firestore'

// Define your Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBF46uFuCIVJTnJwvt-DpcSHNTfrWksGEg',
  authDomain: 'ecommerce-a7d1e.firebaseapp.com',
  projectId: 'ecommerce-a7d1e',
  storageBucket: 'ecommerce-a7d1e.appspot.com',
  messagingSenderId: '183355592166',
  appId: '1:183355592166:web:37d005ce1fbd901c6c9a27',
  measurementId: 'G-PX70Y6EMSK',
}

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig)

export const db: Firestore = getFirestore(app)
