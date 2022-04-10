import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider, app } from './config'
provider.setCustomParameters({
    'login_hint': 'user@example.com'
});
export const googleSignInPopUp = () => {
    return signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const { email, displayName, photoURL, lastLoginAt } = JSON.parse(JSON.stringify(result)).user;
            const user = { email, displayName, photoURL, lastLoginAt };
            // ...
            console.log(token, user);
            return ({ token, user });
        }).catch((error) => {
            console.log(error);
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            return ({ error });
        });
}