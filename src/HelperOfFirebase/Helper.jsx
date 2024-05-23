import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { app } from "../../firebase.config";

export const HelperOfFirebase = createContext(null);
const auth = getAuth(app);

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
      logout
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