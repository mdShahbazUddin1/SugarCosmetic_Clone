import { Box, Grid, Flex, Checkbox, Text } from "@chakra-ui/react";
import React, { useState } from "react";
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

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle the state on checkbox change
  };

  return (
    <Box w={"75%"}>
      <Flex alignItems={"end"} justifyContent={"end"}>
        <Button onClick={onOpen} bg={"black"} color={"white"} _hover={false}>
          ADD NEW ADDRESS
        </Button>
      </Flex>
      <Box
        mt={"10px"}
        w={"32%"}
        bg={"white"}
        borderRadius={"10px"}
        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
      >
        <Box w={"90%"} m={"auto"} mt={"10px"} p={"10px 0 10px 0"}>
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Box>
              <Text>Md Shahbaz uddin</Text>
            </Box>
            <Box w={"20%"}>
              <Flex alignItems={"center"} justifyContent={"space-between"}>
                <GoPencil cursor={"pointer"} />
                <RiDeleteBin6Line cursor={"pointer"} />
              </Flex>
            </Box>
          </Flex>
          <Box mt={"20px"} fontSize={"14px"} color={"gray"}>
            <Text>Aza nagar,Jamui</Text>
            <Text>811307</Text>
            <Text>india,Jamui,Bihar,811307</Text>
            <Text>Phone Number : 9931797391</Text>
          </Box>
          <Flex alignItems={"center"} mt={"10px"}>
            <Box
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
          </Flex>
        </Box>
      </Box>
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
                  onChnage={setFirstName}
                />
                <AddressInput
                  placeholder="Last Name*"
                  type="text"
                  value={isLastName}
                  onChnage={setLastName}
                />
                <AddressInput
                  placeholder="Email*"
                  type="email"
                  value={isEmail}
                  onChnage={setEmail}
                />
                <AddressInput
                  placeholder="Phone Number*"
                  type="text"
                  value={isPhoneNumber}
                  onChnage={setPhoneNumber}
                />
                <AddressInput
                  placeholder="Flat/House Number*"
                  type="text"
                  value={isHouseNo}
                  onChnage={setHouseNo}
                />
                <AddressInput
                  placeholder="Apartment/Area/Locality*"
                  type="text"
                  value={isArea}
                  onChnage={setArea}
                />
                <AddressInput
                  placeholder="Pincode*"
                  type="text"
                  value={isPincode}
                  onChnage={setPincode}
                />
                <AddressInput
                  placeholder="State*"
                  type="text"
                  value={isState}
                  onChnage={setState}
                />
                <AddressInput
                  placeholder="City*"
                  type="text"
                  value={isCity}
                  onChnage={setCity}
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
                <Button
                  size={"lg"}
                  bg={"black"}
                  color={"white"}
                  _hover={false}
                  fontSize={"17px"}
                >
                  SAVE AND CONTINUE
                </Button>
              </Flex>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Addresses;
