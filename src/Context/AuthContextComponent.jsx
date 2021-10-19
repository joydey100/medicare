import React, { createContext } from "react";
import useFirebase from "../Hooks/useFirebase";

export const AuthContext = createContext();

const AuthContextComponent = ({ children }) => {
  // Firebase
  const allFirebase = useFirebase();

  return (
    <AuthContext.Provider value={allFirebase}>{children}</AuthContext.Provider>
  );
};

export default AuthContextComponent;
