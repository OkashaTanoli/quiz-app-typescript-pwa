importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyBr_mzC_3E3hYMRSYqpMVFsMyEdWCPsf4U",
    authDomain: "quiz-app-typwa.firebaseapp.com",
    projectId: "quiz-app-typwa",
    storageBucket: "quiz-app-typwa.appspot.com",
    messagingSenderId: "576965675114",
    appId: "1:576965675114:web:1593da33056f52b3bde213",
    measurementId: "G-CC7BW5MK4P"
})

firebase.messaging()