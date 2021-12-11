import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyBewvgedfA36q_7Lq4k8DG5bANoJ1g2BWM',
  authDomain: 'meals4u-577ed.firebaseapp.com',
  projectId: 'meals4u-577ed',
  storageBucket: 'meals4u-577ed.appspot.com',
  messagingSenderId: '1068900008919',
  appId: '1:1068900008919:web:25983445bdc1d4a39a4192'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
