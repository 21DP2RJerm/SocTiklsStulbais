import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfp6zEUa9x6ihtWnrw4W2Cd4dDSe9ZWo0",
  authDomain: "checkmatesoctiklschess.firebaseapp.com",
  projectId: "checkmatesoctiklschess",
  storageBucket: "checkmatesoctiklschess.appspot.com",
  messagingSenderId: "199363688348",
  appId: "1:199363688348:web:8a70adfe0799c805c6ba59"
};

initializeApp(firebaseConfig);

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
