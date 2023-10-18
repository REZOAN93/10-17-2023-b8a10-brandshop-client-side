import { createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const user = { name: "shawon" };
  const authInfo = { user };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
