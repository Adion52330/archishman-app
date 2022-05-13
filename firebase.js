// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDHlmS8ugNx-DqK2rnRH8aOMMc1WD1Mw7Y',
  authDomain: 'archishman-app.firebaseapp.com',
  projectId: 'archishman-app',
  storageBucket: 'archishman-app.appspot.com',
  messagingSenderId: '715618499254',
  appId: '1:715618499254:web:17a9fc01e1708187e0c417',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
