import { Box, Grid, Flex, Checkbox, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
} from "@chakra-ui/react";
import { GoPencil } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa6";
import AddressInput from "../components/AddressInput";
import { useAddressContext } from "../context/AddressContext";

function Addresses() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isFirstName, setFirstName] = useState("");
  const [isLastName, setLastName] = useState("");
  const [isEmail, setEmail] = useState("");
  const [isPhoneNumber, setPhoneNumber] = useState("");
  const [isHouseNo, setHouseNo] = useState("");
  const [isArea, setArea] = useState("");
  const [isPincode, setPincode] = useState("");
  const [isState, setState] = useState("");
  const [isCity, setCity] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isDefault, setIsDefault] = useState(false);
  const [isGetAddress, setIsGetAddress] = useState([]);
  const [isLoadingAddress, setIsLoadingAddress] = useState({});
  const { addressToUpdate, setAddressData } = useAddressContext();

  const toast = useToast();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const setDefaultAddress = async (addressId) => {
    setIsLoadingAddress((prevState) => ({
      ...prevState,
      [addressId]: true,
    }));
    try {
      const defaultAddress = {
        setdefault: !isDefault,
      };
      const res = await fetch(
        `http://localhost:8080/user/updateAddress/${addressId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
          body: JSON.stringify(defaultAddress),
        }
      );
      if (res.ok) {
        setIsLoadingAddress((prevState) => ({
          ...prevState,
          [addressId]: false,
        }));
        setIsDefault(false);
        getAllAdress();
      }
    } catch (error) {
      console.log(error);
      setIsLoadingAddress((prevState) => ({
        ...prevState,
        [addressId]: true,
      }));
    }
  };

  const addAddress = async () => {
    const newAddress = {
      firstname: isFirstName,
      lastname: isLastName,
      email: isEmail,
      phonenumber: isPhoneNumber,
      houseno: isHouseNo,
      area: isArea,
      pincode: isPincode,
      state: isState,
      city: isCity,
      setdefault: isChecked,
    };
    try {
      const res = await fetch("http://localhost:8080/user/addadress", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify(newAddress),
      });

      if (res.ok) {
        toast({
          title: "New Address Added",
          position: "bottom-left",
          isClosable: true,
          status: "success",
          variant: "solid",
          duration: 5000,
        });
        getAllAdress();
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Failed to add address",
        position: "bottom-left",
        isClosable: true,
        status: "error",
        variant: "solid",
        duration: 5000,
      });
    }
  };

  const getAllAdress = async () => {
    try {
      const res = await fetch("http://localhost:8080/user/getaddress", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      });
      if (res.ok) {
        const { addresses } = await res.json();
        const defaultAddress = addresses.find((address) => address.setdefault);

        // If a default address is found, update the context
        if (defaultAddress) {
          localStorage.setItem("addresses", JSON.stringify(defaultAddress));
        }

        setIsGetAddress(addresses);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateAddress = async () => {
    if (!addressToUpdate || !addressToUpdate._id) {
      console.error("No address to update");
      return;
    }

    const updatedAddress = {
      firstname: isFirstName,
      lastname: isLastName,
      phonenumber: isPhoneNumber,
      houseno: isHouseNo,
      area: isArea,
      pincode: isPincode,
      setdefault: isChecked === "true",
    };
    console.log(updatedAddress);
    try {
      const res = await fetch(
        `http://localhost:8080/user/updateAddress/${addressToUpdate._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
          body: JSON.stringify(updatedAddress),
        }
      );
      console.log(res);
      if (res.ok) {
        toast({
          title: "Address Updated",
          position: "bottom-left",
          isClosable: true,
          status: "success",
          variant: "solid",
          duration: 5000,
        });

        getAllAdress(); // Refresh the address list
        onClose(); // Close the drawer
      } else {
        toast({
          title: "Error",
          description: "Failed to update address",
          position: "bottom-left",
          isClosable: true,
          status: "error",
          variant: "solid",
          duration: 5000,
        });
      }
    } catch (error) {
      console.error("Error updating address", error);
      // Handle error scenarios here
    }
  };

  const deleteAddress = async (addressId) => {
    console.log(addressId);
    try {
      const res = await fetch(
        `http://localhost:8080/user/deleteAddress/${addressId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      if (res.ok) {
        toast({
          title: "Address Deleted",
          position: "bottom-left",
          isClosable: true,
          status: "success",
          variant: "solid",
          duration: 5000,
        });

        getAllAdress();
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update address",
        position: "bottom-left",
        isClosable: true,
        status: "error",
        variant: "solid",
        duration: 5000,
      });
    }
  };

  useEffect(() => {
    getAllAdress();
  }, [isGetAddress, isDefault]);

  useEffect(() => {
    if (addressToUpdate) {
      setFirstName(addressToUpdate.firstname || "");
      setLastName(addressToUpdate.lastname || "");
      setEmail(addressToUpdate.email || "");
      setPhoneNumber(addressToUpdate.phonenumber || "");
      setHouseNo(addressToUpdate.houseno || "");
      setArea(addressToUpdate.area || "");
      setPincode(addressToUpdate.pincode || "");
      setState(addressToUpdate.state || "");
      setCity(addressToUpdate.city || "");
      setIsChecked(addressToUpdate.setdefault || "");
    }
  }, [addressToUpdate]);

  const handleEdit = (addressId) => {
    const selectedAddress = isGetAddress.find((item) => item._id === addressId);
    setAddressData(selectedAddress);
    onOpen();
  };

  return (
    <Box w={"75%"}>
      <Flex alignItems={"end"} justifyContent={"end"}>
        <Button onClick={onOpen} bg={"black"} color={"white"} _hover={false}>
          ADD NEW ADDRESS
        </Button>
      </Flex>

      <Flex alignItems={"center"} gap={"10px"}>
        {isGetAddress?.map((item) => (
          <Box
            key={item._id}
            mt={"20px"}
            w={"32%"}
            bg={"white"}
            borderRadius={"10px"}
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
          >
            <Box w={"90%"} m={"auto"} mt={"10px"} p={"10px 0 10px 0"}>
              <Flex alignItems={"center"} justifyContent={"space-between"}>
                <Box>
                  <Text>
                    {item.firstname} {item.lastname}
                  </Text>
                </Box>
                <Box w={"20%"}>
                  <Flex alignItems={"center"} justifyContent={"space-between"}>
                    <GoPencil
                      cursor={"pointer"}
                      onClick={() => handleEdit(item._id)}
                    />
                    <RiDeleteBin6Line
                      cursor={"pointer"}
                      onClick={() => deleteAddress(item._id)}
                    />
                  </Flex>
                </Box>
              </Flex>
              <Box mt={"20px"} fontSize={"14px"} color={"gray"}>
                <Text>{item.area}</Text>
                <Text>{item.houseno}</Text>
                <Text>{item.pincode}</Text>
                <Text>
                  india,{item.state} {item.city} {item.pincode}
                </Text>
                <Text>Phone Number : {item.phonenumber}</Text>
              </Box>
              <Flex alignItems={"center"} mt={"10px"}>
                {item.setdefault === true ? (
                  <>
                    <Box
                      key={item._id}
                      color={"#E91E63"}
                      border={"1px solid #E91E63"}
                      p={"1px"}
                      borderRadius={"50%"}
                    >
                      <FaCheck />
                    </Box>
                    <Text ml={"10px"} fontSize={"14px"}>
                      Selected Address
                    </Text>
                  </>
                ) : (
                  <Checkbox
                    defaultChecked={isDefault}
                    size={"sm"}
                    onChange={() => setDefaultAddress(item._id)}
                    isDisabled={isLoadingAddress[item._id]}
                  >
                    {isLoadingAddress[item._id]
                      ? "Updating..."
                      : "Set as default address"}
                  </Checkbox>
                )}
              </Flex>
            </Box>
          </Box>
        ))}
      </Flex>

      <Drawer onClose={onClose} isOpen={isOpen} placement="bottom">
        <DrawerOverlay />
        <DrawerContent
          style={{
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
        >
          <DrawerCloseButton />
          <DrawerHeader
            fontWeight={"bold"}
            color={"black"}
            fontSize={"18px"}
            bg={"#EEEEEE"}
            style={{
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          >
            ADD NEW ADDRESSES
          </DrawerHeader>
          <DrawerBody>
            <Box mt={"25px"}>
              <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                <AddressInput
                  placeholder="First Name*"
                  type="text"
                  value={isFirstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <AddressInput
                  placeholder="Last Name*"
                  type="text"
                  value={isLastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <AddressInput
                  placeholder="Email*"
                  type="email"
                  value={isEmail}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <AddressInput
                  placeholder="Phone Number*"
                  type="text"
                  value={isPhoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <AddressInput
                  placeholder="Flat/House Number*"
                  type="text"
                  value={isHouseNo}
                  onChange={(e) => setHouseNo(e.target.value)}
                />
                <AddressInput
                  placeholder="Apartment/Area/Locality*"
                  type="text"
                  value={isArea}
                  onChange={(e) => setArea(e.target.value)}
                />
                <AddressInput
                  placeholder="Pincode*"
                  type="text"
                  value={isPincode}
                  onChange={(e) => setPincode(e.target.value)}
                />
                <AddressInput
                  placeholder="State*"
                  type="text"
                  value={isState}
                  onChange={(e) => setState(e.target.value)}
                />
                <AddressInput
                  placeholder="City*"
                  type="text"
                  value={isCity}
                  onChange={(e) => setCity(e.target.value)}
                />
              </Grid>
              <Checkbox
                defaultChecked={isChecked}
                mt={"20px"}
                color={"black"}
                onChange={handleCheckboxChange}
              >
                Set as default address
              </Checkbox>
              <Flex
                alignItems={"end"}
                justifyContent={"end"}
                mt={"40px"}
                mb={"20px"}
              >
                {addressToUpdate ? (
                  <Button
                    size={"lg"}
                    bg={"black"}
                    color={"white"}
                    _hover={false}
                    fontSize={"17px"}
                    onClick={updateAddress}
                  >
                    UPDATE
                  </Button>
                ) : (
                  <Button
                    size={"lg"}
                    bg={"black"}
                    color={"white"}
                    _hover={false}
                    fontSize={"17px"}
                    onClick={addAddress}
                  >
                    SAVE AND CONTINUE
                  </Button>
                )}
              </Flex>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Addresses;
