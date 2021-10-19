import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/Firebase-Init";

// initialize Firebase
initializeFirebase();

const useFirebase = () => {
  // user State and setUser
  const [user, setUser] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // get Auth and google Provider
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //   Current User
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      setLoading(false);
    });

    return () => unsubscribe;
  }, [auth]);

  //   Set user name on SignUp
  const setUserName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {})
      .catch((error) => {
        setError(error);
      });
    setLoading(false);
  };

  //   Create user or Sign up user
  const createUser = (name, email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   login user or sign in user
  const SignInEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   Log Out
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return {
    googleSignIn,
    user,
    setUser,
    createUser,
    error,
    setError,
    SignInEmail,
    loading,
    setLoading,
    setUserName,
    logOut,
  };
};

export default useFirebase;
