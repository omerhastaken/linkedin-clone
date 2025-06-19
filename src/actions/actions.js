import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase"

export function signInAPI() {
  return (dispatch) => {
    dispatch(setLoading(true));

    signInWithPopup(auth, provider)
      .then((payload) => {
        console.log(payload);
        dispatch(setUser(payload.user));
        dispatch(setLoading(false));
      })
      .catch((error) => {
        alert(error.message);
        dispatch(setLoading(false));
      });
  };
}
