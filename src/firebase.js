// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBGlBDTiAqExwaWX10OnOJDboE1FfBiM40",
    authDomain: "noctara-b282b.firebaseapp.com",
    projectId: "noctara-b282b",
    storageBucket: "noctara-b282b.firebasestorage.app",
    messagingSenderId: "924509783104",
    appId: "1:924509783104:web:c65764e41a7d6aa9becba5",
    measurementId: "G-H6S78JBP4R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);