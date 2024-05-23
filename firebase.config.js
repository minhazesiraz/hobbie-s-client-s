// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyDsDd2VTDv6Ti4XP_O_cQRiXZjuMXEUlCQ",
   authDomain: "hobbie-s-client-s.firebaseapp.com",
   projectId: "hobbie-s-client-s",
   storageBucket: "hobbie-s-client-s.appspot.com",
   messagingSenderId: "929660188821",
   appId: "1:929660188821:web:a0b7a2f2cc3d2eec5c039c",
   measurementId: "G-H8J3V6MNLZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);