// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXtvQzwfPAm89MpiwoWuXFVaB4UIL9Mqs",
  authDomain: "oshare-59ab6.firebaseapp.com",
  projectId: "oshare-59ab6",
  storageBucket: "oshare-59ab6.appspot.com",
  messagingSenderId: "805225706599",
  appId: "1:805225706599:web:165126df9a281f250710c2",
  measurementId: "G-ZYSYRLBLHZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;