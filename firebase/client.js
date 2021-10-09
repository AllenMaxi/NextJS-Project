import * as firebase from "firebase/app";
import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCoyDOe6l8XrULow5lzht3WU4IHR3ad1cY",
  authDomain: "nextwit-a74d4.firebaseapp.com",
  projectId: "nextwit-a74d4",
  storageBucket: "nextwit-a74d4.appspot.com",
  messagingSenderId: "899784970965",
  appId: "1:899784970965:web:8beb31b2efaccdbc49485c",
  measurementId: "G-C36SJP3YD1",
};

firebase.initializeApp(firebaseConfig);

export const loginWithGitHub = () => {
  const auth = getAuth();
  const provider = new GithubAuthProvider();
  return signInWithPopup(auth, provider);
};
