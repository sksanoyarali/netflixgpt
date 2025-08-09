// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCfIROCegif5X_zFgC6Pr1y9sQx0RCaYT8',
  authDomain: 'netflixgpt-3f615.firebaseapp.com',
  projectId: 'netflixgpt-3f615',
  storageBucket: 'netflixgpt-3f615.firebasestorage.app',
  messagingSenderId: '97816804191',
  appId: '1:97816804191:web:3c1f78efd0b4ccefd3d4ea',
  measurementId: 'G-S56HKHLZX1',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const auth = getAuth()
