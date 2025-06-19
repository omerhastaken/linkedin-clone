// src/actions/index.js

// 1. signInWithPopup'ı firebase/auth'tan import edin
import { signInWithPopup } from "firebase/auth";
// 2. auth ve provider'ı firebase.js dosyanızdan import edin
import { auth, provider } from "../firebase";

// ... diğer action creator'larınız (setUser, setLoading vs.)

export function signInAPI() {
  return (dispatch) => {
    dispatch(/* setLoading(true) */); // Yüklenme durumunu başlat

    // 3. Doğru sözdizimini kullanın: signInWithPopup(auth, provider)
    signInWithPopup(auth, provider)
      .then((payload) => {
        // payload.user ile kullanıcı bilgilerini alabilirsiniz
        console.log(payload);
        dispatch(/* setUser(payload.user) */); // Kullanıcıyı state'e kaydet
        dispatch(/* setLoading(false) */); // Yüklenme durumunu bitir
      })
      .catch((error) => {
        alert(error.message);
        dispatch(/* setLoading(false) */); // Hata durumunda yüklenmeyi bitir
      });
  };
}