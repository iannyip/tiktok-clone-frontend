import firebase from "firebase/app";
import "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLIsWhFsD2-e93IkMtVRIioDJ1_cR_BOE",
  authDomain: "tiktok-clone-78b71.firebaseapp.com",
  projectId: "tiktok-clone-78b71",
  storageBucket: "tiktok-clone-78b71.appspot.com",
  messagingSenderId: "183541834052",
  appId: "1:183541834052:web:57b770fd9d98e4bbd03711"
};
// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
