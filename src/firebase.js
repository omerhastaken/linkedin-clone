// firebase.js için doğru kalıp
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBbpHplyQ54U_ZzGd2Obd7pQmvd1c5M-Dk",
  authDomain: "linkedin-clone-b322f.firebaseapp.com",
  projectId: "linkedin-clone-b322f",
  storageBucket: "linkedin-clone-b322f.firebasestorage.app",
  messagingSenderId: "285111943105",
  appId: "1:285111943105:web:7c1eeb5b57c94ccd3b3940",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, db, provider };
// VEYA varsayılan dışa aktarma kullanıyorsanız
// export default { auth, db };
