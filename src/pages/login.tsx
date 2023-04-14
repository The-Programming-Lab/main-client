import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GithubAuthProvider } from 'firebase/auth';

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyBCdjPR5fIQLcpRe8yYKnp7r8mPnLp78_w",
    authDomain: "the-programming-lab-d883c.firebaseapp.com",
    databaseURL: "https://the-programming-lab-d883c-default-rtdb.firebaseio.com",
    projectId: "the-programming-lab-d883c",
    storageBucket: "the-programming-lab-d883c.appspot.com",
    messagingSenderId: "8803580286",
    appId: "1:8803580286:web:ce74d9065be3aaffffdb2f",
    measurementId: "G-K2VSFCED77"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  async function signInWithGithubAndGetIdToken() {
    const auth = getAuth();
    const provider = new GithubAuthProvider();
  
    try {
      const result = await signInWithPopup(auth, provider);
      const idToken = await auth.currentUser?.getIdToken();
      console.log('ID Token:', idToken);
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  }

  return (
    <div className="App">
      <div>
        <button onClick={signInWithGithubAndGetIdToken}>Sign in GitHub</button>
      </div>
    </div>
  )
}

export default App
