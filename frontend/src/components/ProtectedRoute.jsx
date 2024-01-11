import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/UserContext";

const ProtectedRoute = ({ children }) => {
  const { isAuth } = useContext(AuthContext);

  if (!isAuth) return <Navigate to={"/bag"} />;

  return children;
};

export default ProtectedRoute;
