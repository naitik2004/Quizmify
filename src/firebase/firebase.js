// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb2CaZDVPhXBa5eN05doMvVuR9dlQrOEM",
  authDomain: "quizmify-7c6f7.firebaseapp.com",
  projectId: "quizmify-7c6f7",
  storageBucket: "quizmify-7c6f7.firebasestorage.app",
  messagingSenderId: "70777160100",
  appId: "1:70777160100:web:a1fef3ceef7b9433e0c131"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {app,auth,provider}



