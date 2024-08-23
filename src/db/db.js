import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBAEqOe3DLd60meAua1mQUboDQRSaqoINQ",
  authDomain: "joystick-ecommerce.firebaseapp.com",
  projectId: "joystick-ecommerce",
  storageBucket: "joystick-ecommerce.appspot.com",
  messagingSenderId: "66662347666",
  appId: "1:66662347666:web:5d6769e892baeabba8874b"
};



const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db