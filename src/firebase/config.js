import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCPCR34VFtUMy-h-g3WLLvXBKJiMXXS2nw",
  authDomain: "space-cowboy-544b3.firebaseapp.com",
  databaseURL: "https://space-cowboy-544b3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "space-cowboy-544b3",
  storageBucket: "space-cowboy-544b3.appspot.com",
  messagingSenderId: "432621862485",
  appId: "1:432621862485:web:fe95ef5ffe813daab3dedc"
};

// init firebase
const app = initializeApp(firebaseConfig)

// init firebase auth
const auth = getAuth()
const database = getDatabase(app);

export { auth, database }