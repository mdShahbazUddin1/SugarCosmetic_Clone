import React, { createContext, useContext, useState, useCallback } from "react";

const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const [addressToUpdate, setAddressToUpdate] = useState(null);
  const [defaultAddress, setDefaultAddress] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
  });

  const setAddressData = useCallback((address) => {
    setAddressToUpdate(address);
  }, []);

  const clearAddressData = useCallback(() => {
    setAddressToUpdate(null);
  }, []);

  const setDefaultAddressDetails = useCallback((details) => {
    setDefaultAddress(details);
  }, []);

  return (
    <AddressContext.Provider
      value={{
        addressToUpdate,
        setAddressData,
        clearAddressData,
        defaultAddress,
        setDefaultAddressDetails,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export const useAddressContext = () => {
  const context = useContext(AddressContext);
  if (!context) {
    throw new Error("useAddressContext must be used within an AddressProvider");
  }
  return context;
};
