import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { API_KEY, AUTH_DOMAIN, P_ID, S_BUCKET, M_SENDER_ID, APP_ID } from '@env'

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: P_ID,
  storageBucket: S_BUCKET,
  messagingSenderId: M_SENDER_ID,
  appId: APP_ID
}

console.log(firebaseConfig)
// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
