import {
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Stack,
  Text,
  Button,
  Center,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

function LoginModal({ isOpen, onClose, token, setVerifiedToken }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [sendOtp, setSendOtp] = useState(false);
  const [verifyOtp, setVerifyOtp] = useState("");

  const handleInputChange = (event) => {
    const inputValue = event.target.value;

    if (inputValue.length <= 10) {
      setPhoneNumber(inputValue);
    }
  };
  const handleOtpInput = (e) => {
    const otpInput = e.target.value;
    if (otpInput.length <= 6) {
      setVerifyOtp(otpInput);
    }
  };
  const isButtonDisabled = phoneNumber.length < 10;
  const isOtpButtonDisabled = verifyOtp.length < 6;
  const sendOtpPhone = async () => {
    try {
      const response = await fetch(`http://localhost:8080/send-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber: "+91" + phoneNumber }),
      });
      if (response.ok) {
        alert("otp send ");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {}, [token]);

  const sendVerifyOtpPhone = async () => {
    try {
      const response = await fetch(`http://localhost:8080/verify-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phoneNumber: "+91" + phoneNumber,
          otp: verifyOtp,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const newToken = data.token;
        setVerifiedToken(newToken);
        alert("OTP Verified successfully");
        setSendOtp(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Modal
        size="2xl"
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={true}
        motionPreset="scale"
      >
        <ModalOverlay />
        <ModalContent>
          <Box
            bg={`url('https://media.sugarcosmetics.com/upload/loginPageBackGroundTexture.png')`}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            zIndex="-1"
          />
          {/* <ModalHeader>Create your account</ModalHeader> */}
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Flex justify="center" align="center" height="100%">
              <Center mt={"20px"}>
                <Image src="https://media.sugarcosmetics.com/upload/Hi!.png" />
              </Center>
            </Flex>
            <Box mt={"20px"}>
              <Text color={"black"} fontWeight={"bold"} textAlign={"center"}>
                LogIn/SignUp Using Phone
              </Text>
            </Box>

            <Box width={"50%"} m={"auto"} mt={"20px"} textAlign={"center"}>
              <Stack spacing={4}>
                {!sendOtp ? (
                  <InputGroup>
                    <InputLeftAddon padding={"20px"} borderColor={"gray.400"}>
                      +91
                    </InputLeftAddon>
                    <Input
                      value={phoneNumber}
                      onChange={handleInputChange}
                      type="number"
                      placeholder="Enter Number"
                      color={"gray.700"}
                      borderRadius="1px 0 0 1px"
                      outline="none"
                      borderColor={"gray.400"}
                      _hover={false}
                      _focus={{
                        borderColor: "gray.400",
                        outline: "none",
                        boxShadow: "none",
                        caretColor: "#F50057",
                      }}
                      _placeholder={{ color: "gray.600" }}
                      padding={"20px"}
                    />
                  </InputGroup>
                ) : (
                  <Input
                    type="number"
                    value={verifyOtp}
                    onChange={handleOtpInput}
                    placeholder="Enter OTP"
                    color={"gray.700"}
                    borderRadius="1px 0 0 1px"
                    outline="none"
                    borderColor={"gray.400"}
                    _hover={false}
                    _focus={{
                      borderColor: "gray.400",
                      outline: "none",
                      boxShadow: "none",
                      caretColor: "#F50057",
                    }}
                    _placeholder={{ color: "gray.600" }}
                    padding={"20px"}
                  />
                )}
              </Stack>

              {!sendOtp ? (
                <Button
                  backgroundColor={"black"}
                  color={"white"}
                  _hover={false}
                  mt={"20px"}
                  isDisabled={isButtonDisabled}
                  onClick={() => {
                    setSendOtp(true);
                    sendOtpPhone();
                  }}
                >
                  SEND ME OTP
                </Button>
              ) : (
                <Button
                  backgroundColor={"black"}
                  color={"white"}
                  _hover={false}
                  mt={"20px"}
                  isDisabled={isOtpButtonDisabled}
                  onClick={() => {
                    sendVerifyOtpPhone();
                  }}
                >
                  Verify OTP
                </Button>
              )}
            </Box>
            <Box mt={"20px"}>
              <Text fontSize={"14px"}>
                Registering for this site allows you to access your order status
                and history. Just fill in the above fields, and we'll get a new
                account set up for you in no time. We will only ask you for
                information necessary to make the purchase process faster and
                easier.
              </Text>
            </Box>
          </ModalBody>

          <ModalFooter
            backgroundColor={"black"}
            w={"100%"}
            display="flex"
            alignItems="center"
            justifyContent={"center"}
          >
            <Text color={"white"}>
              Copyright © 2023 SUGAR Cosmetics. All rights reserved.
            </Text>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default LoginModal;
