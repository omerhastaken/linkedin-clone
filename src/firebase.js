import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBbpHplyQ54U_ZzGd2Obd7pQmvd1c5M-Dk",
    authDomain: "linkedin-clone-b322f.firebaseapp.com",
    projectId: "linkedin-clone-b322f",
    storageBucket: "linkedin-clone-b322f.appspot.com",
    messagingSenderId: "285111943105",
    appId: "1:285111943105:web:7c1eeb5b57c94ccd3b3940"
};

const firebaseApp = firebase.initializeApp(fireabseConfig);
const db = fireabseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();;


export { auth, provider, storage };
export default db;
