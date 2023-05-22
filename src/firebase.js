import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"


var firebaseConfig = {
    apiKey: "AIzaSyBbpHplyQ54U_ZzGd2Obd7pQmvd1c5M-Dk",
    authDomain: "linkedin-clone-b322f.firebaseapp.com",
    projectId: "linkedin-clone-b322f",
    storageBucket: "linkedin-clone-b322f.appspot.com",
    messagingSenderId: "285111943105",
    appId: "1:285111943105:web:7c1eeb5b57c94ccd3b3940"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);

