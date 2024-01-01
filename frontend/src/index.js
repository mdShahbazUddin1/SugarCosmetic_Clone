import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { AuthProvider } from "./context/UserContext";
import { AddressProvider } from "./context/AddressContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <ChakraProvider>
      <AddressProvider>
        <App />
      </AddressProvider>
    </ChakraProvider>
  </AuthProvider>
);
