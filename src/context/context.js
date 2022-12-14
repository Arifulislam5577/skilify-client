import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config.js";
import useFetch from "../hooks/useFetch.js";
export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loader, setLoader] = useState(true);
  const { error, loading, data } = useFetch(
    "https://skiliky-server.vercel.app/api/v1/course"
  );

  // AUTH CONTROLLERS

  //------Create user with email and password
  const createUser = async (email, password) => {
    setLoader(true);
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  //------Login with email and password
  const loginWithEmailAndPassword = async (email, password) => {
    setLoader(true);
    return await signInWithEmailAndPassword(auth, email, password);
  };

  //------Update User FullName and Photo
  const updateUser = async (displayName, photoURL) => {
    return await updateProfile(auth.currentUser, { displayName, photoURL });
  };

  //------SignIn With Google Account
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = async () => {
    setLoader(true);
    await signInWithPopup(auth, googleProvider);
  };

  //------ SignIn with Github Account
  const githubProvider = new GithubAuthProvider();
  const githubSignIn = async () => {
    setLoader(true);
    await signInWithPopup(auth, githubProvider);
  };

  //------ User LogOut
  const LogOut = async () => {
    return await signOut(auth);
  };

  // COURSE CONTROLLERS

  const authentication = {
    createUser,
    updateUser,
    LogOut,
    googleSignIn,
    loginWithEmailAndPassword,
    githubSignIn,
  };
  const courses = { loading, error, data };

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoader(false);
      } else {
        setUser(null);
      }
    });

    return () => subscribe();
  }, []);
  return (
    <DataContext.Provider
      value={{ ...authentication, ...courses, user, loader }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
