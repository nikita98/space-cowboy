import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { initializeApp } from "firebase/app";
// import firebase from "firebase/app";
// import 'firebase/database'


initializeApp({
    apiKey: "AIzaSyCPCR34VFtUMy-h-g3WLLvXBKJiMXXS2nw",
    authDomain: "space-cowboy-544b3.firebaseapp.com",
    projectId: "space-cowboy-544b3",
    storageBucket: "space-cowboy-544b3.appspot.com",
    messagingSenderId: "432621862485",
    appId: "1:432621862485:web:fe95ef5ffe813daab3dedc"
})

createApp(App).use(store).use(router).mount('#app')

// let app

// firebase.auth().onAuthStateChanged(() => {
//     console.log(123123);
//     // if (!app) {
        
//     // }
// })

