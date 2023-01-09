import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBibJ1iGDnInjCv5o3am-2VO4OT9iYCwrY",
    authDomain: "instagram-bc31d.firebaseapp.com",
    projectId: "instagram-bc31d",
    storageBucket: "instagram-bc31d.appspot.com",
    messagingSenderId: "131389632941",
    appId: "1:131389632941:web:e09f7778df0bc8f263f124"
};

const app = initializeApp(firebaseConfig);
const db = getAuth(app)

export default db;