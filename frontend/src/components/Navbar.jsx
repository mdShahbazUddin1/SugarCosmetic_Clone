import React from "react";
import {
  Box,
  Flex,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Text,
  ModalOverlay,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Center,
} from "@chakra-ui/react";
// import { Link } from "react-router-dom";
import { Search2Icon } from "@chakra-ui/icons";
import { CiHeart } from "react-icons/ci";
import { BiSolidUserCircle } from "react-icons/bi";
import { IoBagHandleOutline } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { BsFire } from "react-icons/bs";
import { SlBadge } from "react-icons/sl";
import { useState } from "react";

function Navbar() {
  const [isSearchSuggestionsVisible, setSearchSuggestionsVisible] =
    useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleInputChange = (event) => {
    const inputValue = event.target.value;

    if (inputValue.length <= 10) {
      setPhoneNumber(inputValue);
    }
  };
  const isButtonDisabled = phoneNumber.length < 10;
  return (
    <>
      <Box w="100%" h="80px" backgroundColor="black">
        <Flex
          alignItems="center"
          justifyContent="center"
          height="100%"
          margin={"0 20px 0 20px"}
        >
          <Box width={"95%"}>
            <Flex alignItems="center">
              <Box w="15%">
                <Image
                  w="100%"
                  src="https://d32baadbbpueqt.cloudfront.net/Logo/8bef3896-f9cd-4bc2-b7ae-4f7a06b49803.gif"
                  alt="Logo"
                />
              </Box>
              <Box ml="60px" width="58%">
                <Stack>
                  <InputGroup
                    onMouseEnter={() => setSearchSuggestionsVisible(true)}
                    onMouseLeave={() => setSearchSuggestionsVisible(false)}
                  >
                    <Input
                      type="text"
                      placeholder="Try Liquid Lipstick"
                      backgroundColor={"#212121"}
                      color={"white"}
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
                      _placeholder={{
                        color: "gray.600",
                      }}
                      padding={"20px"}
                      position={"relative"}
                      zIndex={10}
                    />

                    <Box
                      as={InputLeftAddon}
                      borderLeftRadius="0"
                      borderLeftBottomRadius="0"
                      borderTopRightRadius="10px"
                      borderBottomRightRadius="10px"
                      backgroundColor="white"
                      display="flex"
                      alignItems="center"
                      paddingLeft="10px"
                      padding={"20px"}
                      cursor={"pointer"}
                    >
                      <Icon as={Search2Icon} color="gray.800" />
                      <Text color="gray.800" ml="10px">
                        Search
                      </Text>
                    </Box>
                  </InputGroup>
                </Stack>
                {isSearchSuggestionsVisible && (
                  <Box
                    w={"34.5%"}
                    borderColor={"white"}
                    borderWidth={"1px"}
                    borderStyle={"solid"}
                    position={"absolute"}
                    zIndex={"2"}
                    backgroundColor={"white"}
                    padding={"10px"}
                    boxShadow="0 0 10px rgba(0, 0, 0, 0.1)"
                    onMouseEnter={() => setSearchSuggestionsVisible(true)}
                    onMouseLeave={() => setSearchSuggestionsVisible(false)}
                  >
                    <Box m={"0 5px 5px 5px"}>
                      <Box fontSize={"12px"} color={"gray.600"}>
                        <Flex alignItems={"center"}>
                          <FaArrowRightArrowLeft />
                          <Text ml={"10px"} fontWeight={"bold"}>
                            FREQUENTLY SEARCHED
                          </Text>
                        </Flex>
                        <Flex alignItems={"center"} mt={"10px"} gap={"10px"}>
                          <Box
                            padding={"5px"}
                            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                          >
                            <Text fontWeight={"bold"}>Gift Cards</Text>
                          </Box>
                          <Box
                            padding={"5px"}
                            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                          >
                            <Text fontWeight={"bold"}>Foundation</Text>
                          </Box>
                          <Box
                            padding={"5px"}
                            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                          >
                            <Text fontWeight={"bold"}>Lipsticks</Text>
                          </Box>
                          <Box
                            padding={"5px"}
                            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                          >
                            <Text fontWeight={"bold"}>La La Loves</Text>
                          </Box>
                          <Box
                            padding={"5px"}
                            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                          >
                            <Text fontWeight={"bold"}>Minis</Text>
                          </Box>
                        </Flex>
                      </Box>
                      <Box fontSize={"12px"} color={"gray.600"} mt={"15px"}>
                        <Flex alignItems={"center"}>
                          <BsFire />
                          <Text ml={"10px"} fontWeight={"bold"}>
                            HOT PICKS
                          </Text>
                        </Flex>
                        <Box width={"80%"} mt={"10px"}>
                          <Flex alignItems={"center"} gap={"20px"}>
                            <Box width={"23%"}>
                              <Box
                                width={"100%"}
                                height={"60px"}
                                borderRadius={"2px"}
                                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                              >
                                <Image
                                  width={"100%"}
                                  height={"100%"}
                                  borderRadius={"10px"}
                                  src="https://media.sugarcosmetics.com/upload/sugar-cosmetics-uptown-curl-lengthening-mascara-01-black-beauty-black-28122637828179.jpg"
                                />
                              </Box>
                              <Text fontWeight={"bold"} mt={"5px"}>
                                Mascara
                              </Text>
                            </Box>
                            <Box width={"23%"}>
                              <Box
                                width={"100%"}
                                height={"60px"}
                                borderRadius={"2px"}
                                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                              >
                                <Image
                                  width={"100%"}
                                  height={"100%"}
                                  borderRadius={"10px"}
                                  src="https://media.sugarcosmetics.com/upload/Brow.jpg"
                                />
                              </Box>
                              <Text fontWeight={"bold"} mt={"5px"}>
                                Brow
                              </Text>
                            </Box>
                            <Box width={"25%"}>
                              <Box
                                width={"100%"}
                                height={"60px"}
                                borderRadius={"2px"}
                                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                              >
                                <Image
                                  width={"100%"}
                                  height={"100%"}
                                  borderRadius={"10px"}
                                  src="https://media.sugarcosmetics.com/upload/EBO-128x165-sheet-mask...jpg"
                                />
                              </Box>
                              <Text fontWeight={"bold"} mt={"5px"}>
                                Face Mask
                              </Text>
                            </Box>
                            <Box width={"23%"}>
                              <Box
                                width={"100%"}
                                height={"60px"}
                                borderRadius={"2px"}
                                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                              >
                                <Image
                                  width={"100%"}
                                  height={"100%"}
                                  borderRadius={"10px"}
                                  src="https://media.sugarcosmetics.com/upload/Gifting.jpg"
                                />
                              </Box>
                              <Text fontWeight={"bold"} mt={"5px"}>
                                Gifting
                              </Text>
                            </Box>
                            <Box width={"23%"}>
                              <Box
                                width={"100%"}
                                height={"60px"}
                                borderRadius={"2px"}
                                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                              >
                                <Image
                                  width={"100%"}
                                  height={"100%"}
                                  borderRadius={"10px"}
                                  src="https://media.sugarcosmetics.com/upload/CDF.jpg"
                                />
                              </Box>
                              <Text fontWeight={"bold"} mt={"5px"}>
                                Bronzer
                              </Text>
                            </Box>
                          </Flex>
                        </Box>
                      </Box>
                      <Box fontSize={"12px"} color={"gray.600"} mt={"15px"}>
                        <Flex alignItems={"center"}>
                          <SlBadge />
                          <Text ml={"10px"} fontWeight={"bold"}>
                            BESTSELLERS
                          </Text>
                        </Flex>
                        <Box
                          width={"80%"}
                          mt={"10px"}
                          css={{
                            overflowX: "auto",
                            "&::-webkit-scrollbar": {
                              height: "6px",
                            },
                            "&::-webkit-scrollbar-thumb": {
                              backgroundColor: "rgba(0, 0, 0, 0.2)",
                              borderRadius: "12px",
                            },
                            "&::-webkit-scrollbar-track": {
                              backgroundColor: "transparent",
                            },
                          }}
                        >
                          <Flex alignItems={"center"} gap={"5px"}>
                            <Box width={"100%"}>
                              <Box
                                width={"100%"}
                                height={"120px"}
                                borderRadius={"10px"}
                                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                              >
                                <Image
                                  width={"100%"}
                                  height={"100%"}
                                  borderRadius={"10px"}
                                  src="https://cdn.shopify.com/s/files/1/0906/2558/files/521737983-parent-1st-card.jpg?v=1690905085"
                                />
                              </Box>
                              <Text
                                textAlign={"center"}
                                width={"100%"}
                                fontWeight={"bold"}
                                mt={"5px"}
                                fontSize={"10px"}
                              >
                                Maximeyes Drama Magnetic Lashes & Eyeliner
                              </Text>
                            </Box>
                            <Box width={"100%"}>
                              <Box
                                width={"100%"}
                                height={"120px"}
                                borderRadius={"10px"}
                                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                              >
                                <Image
                                  width={"100%"}
                                  height={"100%"}
                                  borderRadius={"10px"}
                                  src="https://cdn.shopify.com/s/files/1/0906/2558/files/a_00b52826-78d8-4da0-aba1-fbcbfb39dc33.jpg?v=1688228539"
                                />
                              </Box>
                              <Text
                                textAlign={"center"}
                                width={"100%"}
                                fontWeight={"bold"}
                                mt={"5px"}
                                fontSize={"10px"}
                              >
                                LA LA LOVE 18HR Liquid Lipstick - Set of 3
                              </Text>
                            </Box>
                            <Box width={"100%"}>
                              <Box
                                width={"100%"}
                                height={"120px"}
                                borderRadius={"10px"}
                                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                              >
                                <Image
                                  width={"100%"}
                                  height={"100%"}
                                  borderRadius={"10px"}
                                  src="https://cdn.shopify.com/s/files/1/0906/2558/files/parent1stcard_1_7aa4b700-2b5f-4212-8b56-86889ab8a390.jpg?v=1689262362"
                                />
                              </Box>
                              <Text
                                textAlign={"center"}
                                width={"100%"}
                                fontWeight={"bold"}
                                mt={"5px"}
                                fontSize={"10px"}
                              >
                                Matte As Hell Crayon Lipstick
                              </Text>
                            </Box>
                            <Box width={"100%"}>
                              <Box
                                width={"100%"}
                                height={"120px"}
                                borderRadius={"10px"}
                                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                              >
                                <Image
                                  width={"100%"}
                                  height={"100%"}
                                  borderRadius={"10px"}
                                  src="https://cdn.shopify.com/s/files/1/0906/2558/products/1_bec48e26-bd4f-4b25-9a65-742f14ce4955.jpg?v=1671604434"
                                />
                              </Box>
                              <Text
                                textAlign={"center"}
                                width={"100%"}
                                fontWeight={"bold"}
                                mt={"5px"}
                                fontSize={"10px"}
                              >
                                Matte As Hell Crayon Lipstick
                              </Text>
                            </Box>
                          </Flex>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                )}
              </Box>
            </Flex>
          </Box>
          <Box width={"30%"}>
            <Flex
              alignItems={"center"}
              color={"white"}
              justifyContent={"space-between"}
            >
              <Box color={"white"}>
                <Flex alignItems={"center"} gap={"10px"} cursor={"pointer"}>
                  <BiSolidUserCircle fontSize={"20px"} />
                  <Text onClick={onOpen}>Login/Register</Text>
                </Flex>
              </Box>
              <Box width={"33%"}>
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                  <Box>
                    <CiHeart fontSize={"25px"} cursor={"pointer"} />
                  </Box>
                  <Box>
                    <IoBagHandleOutline fontSize={"25px"} cursor={"pointer"} />
                  </Box>
                  <Box>
                    <BiSolidOffer fontSize={"25px"} cursor={"pointer"} />
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>
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
                      _placeholder={{
                        color: "gray.600",
                      }}
                      padding={"20px"}
                    />
                  </InputGroup>
                </Stack>

                <Button
                  backgroundColor={"black"}
                  color={"white"}
                  _hover={false}
                  mt={"20px"}
                  isDisabled={isButtonDisabled}
                >
                  SEND ME OTP
                </Button>
              </Box>
              <Box mt={"20px"}>
                <Text fontSize={"14px"}>
                  Registering for this site allows you to access your order
                  status and history. Just fill in the above fields, and we'll
                  get a new account set up for you in no time. We will only ask
                  you for information necessary to make the purchase process
                  faster and easier.
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
      </Box>
    </>
  );
}

export default Navbar;
