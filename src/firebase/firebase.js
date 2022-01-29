import { initializeApp } from 'firebase/app'
import { getMessaging, getToken } from 'firebase/messaging'
import { getDatabase, set, ref } from 'firebase/database'

const config = {
    apiKey: "AIzaSyBr_mzC_3E3hYMRSYqpMVFsMyEdWCPsf4U",
    authDomain: "quiz-app-typwa.firebaseapp.com",
    projectId: "quiz-app-typwa",
    storageBucket: "quiz-app-typwa.appspot.com",
    messagingSenderId: "576965675114",
    appId: "1:576965675114:web:1593da33056f52b3bde213",
    measurementId: "G-CC7BW5MK4P"
}

const app = initializeApp(config)

const messaging = getMessaging(app);
const database = getDatabase(app)

const FirebaseMessaging = () => {
    getToken(messaging).then((token) => {
        console.log("Token", token)
        let le = token.split('')
        let fi = []
        for (var i = 0; i < 10; i++) {
            fi[i] = le[i]
        }
        set(ref(database, 'tokens/' + fi.join('')), token)
    })
        .catch((err) => {
            console.log(err)
        })
}

export default FirebaseMessaging

