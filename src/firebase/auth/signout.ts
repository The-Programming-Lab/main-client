import firebase_app from "../config";
import { signOut, getAuth, GithubAuthProvider} from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function signout(){
    await signOut(auth);
}