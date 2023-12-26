// AuthContext.js
import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // Initialize the token from local storage on component mount
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  // Update local storage whenever the token changes
  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  const setVerifiedToken = (newToken) => {
    setToken(newToken);
  };

  return (
    <AuthContext.Provider value={{ token, setVerifiedToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
