import firebase_app from "../config";
import { signInWithPopup, getAuth, GithubAuthProvider} from "firebase/auth";

const auth = getAuth(firebase_app);
const provider = new GithubAuthProvider();

export default async function Login(){
    let result = null;
    let error = null;

    try{
        result = await signInWithPopup(auth, provider);
    }
    catch (e){
        error = e;
    }

    return {result, error};
}