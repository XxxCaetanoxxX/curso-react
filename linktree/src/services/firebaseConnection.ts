import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
import { getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDSYYCqUrJ-TC0ua9S6FWVAY8kfr-4cJuY",
  authDomain: "reactlinks-1962c.firebaseapp.com",
  projectId: "reactlinks-1962c",
  storageBucket: "reactlinks-1962c.firebasestorage.app",
  messagingSenderId: "684054329456",
  appId: "1:684054329456:web:b6b1e16ae24cced2b7dcb5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export{auth, db};