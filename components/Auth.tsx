import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app, database, auth } from "../utils/firebaseConfig";
import { Button } from "@chakra-ui/react";
import { useState } from "react";

const provider = new GoogleAuthProvider();

const Auth = () => {
  const [user, isUser] = useState(auth.currentUser);
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential!.accessToken;
        const user = result.user;
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return <Button onClick={signInWithGoogle}>Sign In with Google</Button>;
};

export default Auth;
