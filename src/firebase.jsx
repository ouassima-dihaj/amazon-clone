import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA8PPUVwXFAabmZ-cbCheCv_7jRj2LkiRA",
    authDomain: "challenge-301e6.firebaseapp.com",
    projectId: "challenge-301e6",
    storageBucket: "challenge-301e6.appspot.com",
    messagingSenderId: "803157764113",
    appId: "1:803157764113:web:6678b7af4434a67bd4e9b0"
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };