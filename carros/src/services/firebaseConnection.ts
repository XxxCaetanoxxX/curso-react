import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyCjnGRLCUwQQ189RUQISIkeCt1eu9KOP-4",
  authDomain: "webcarros-d251d.firebaseapp.com",
  projectId: "webcarros-d251d",
  storageBucket: "webcarros-d251d.firebasestorage.app",
  messagingSenderId: "346421172657",
  appId: "1:346421172657:web:ddde55f1c4971393e70590"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

export { db, auth, storage }