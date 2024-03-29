import {
  signInWithGooglePopup,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";
import "./signin.styles.css";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
  };
  return (
    <div>
      <h1>Sign In!</h1>
      <button onClick={logGoogleUser}>Sign in with Google!</button>
    </div>
  );
};

export default SignIn;
