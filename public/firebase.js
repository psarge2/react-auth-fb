import firebase from 'firebase/app'
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIERBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIERBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIERBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIERBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIERBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIERBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIERBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIERBASE_MEASUREMENT_ID
})

export const auth = app.auth()
export default app