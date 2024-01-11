// AuthContext.js
import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // Initialize the token from local storage on component mount
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [isAuth, setAuth] = useState(false);
  const [bagItemCount, setBagItemCount] = useState(
    Number(localStorage.getItem("bagItemCount")) || 0
  );

  useEffect(() => {
    localStorage.setItem("bagItemCount", bagItemCount.toString());
  }, [bagItemCount]);

  // Update local storage whenever the token changes
  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  const setVerifiedToken = (newToken) => {
    setToken(newToken);
  };
  // Function to update bag count
  const updateBagItemCount = (count) => {
    setBagItemCount(count);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        setVerifiedToken,
        bagItemCount,
        updateBagItemCount,
        isAuth,
        setAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
