import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { app } from "../../firebase.config";

export const HelperOfFirebase = createContext(null);
const auth = getAuth(app);
const GoogleLLC = new GoogleAuthProvider();

const Helper = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   }

   const login = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   }

   const logout = () => {
      setLoading(true);
      return signOut(auth);
   }

   const updateUserProfile = (name) => {
      return updateProfile(auth.currentUser, {
         displayName: name
         // displayName: name, photoURL: "https://example.com/jane-q-user/profile.jpg"
      })
   }

   const loginWithGoogle = () => {
      setLoading(true);
      return signInWithPopup(auth, GoogleLLC);
   }

   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, currentUser => {
         console.log('currentUser', currentUser);
         setUser(currentUser);
         setLoading(false);
      });
      return () => {
         return unSubscribe();
      }
   }, []);

   const func = {
      user,
      loading,
      createUser,
      login,
      logout,
      loginWithGoogle,
      updateUserProfile
   }

   return (
      <HelperOfFirebase.Provider value={func}>
         {children}
      </HelperOfFirebase.Provider>
   );
};

Helper.propTypes = {
   children: PropTypes.node.isRequired,
}

export default Helper;