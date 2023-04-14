import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GithubAuthProvider, User } from 'firebase/auth';
import { FC } from 'react';

const App: FC = () => {
  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  };

  const firebaseApp = initializeApp(firebaseConfig);

  async function signInWithGithubAndGetIdToken(): Promise<void> {
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
  );
};

export default App;