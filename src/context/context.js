import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config.js";
export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  // AUTH CONTROLLERS

  //------Create user with email and password
  const createUser = async (email, password) => {
    setLoader(true);
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  //------Update User FullName and Photo
  const updateUser = async (displayName, photoURL) => {
    return await updateProfile(auth.currentUser, { displayName, photoURL });
  };

  //------SignIn With Google Account
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = async () => {
    setLoader(true);
    return await signInWithPopup(auth, googleProvider);
  };

  //------ User LogOut
  const LogOut = async () => {
    return await signOut(auth);
  };

  // COURSE CONTROLLERS

  const authentication = { createUser, updateUser, LogOut, googleSignIn };
  const courses = {};

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
