import React, { useContext, useState } from "react";
import {
  Badge,
  Box,
  Flex,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { Search2Icon } from "@chakra-ui/icons";
import { CiHeart } from "react-icons/ci";
import { BiSolidUserCircle } from "react-icons/bi";
import { IoBagHandleOutline } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/UserContext";
import LoginModal from "./LoginModal";
import ProductSearchModal from "./ProductSearchModal";

const productsLink = [
  { path: "/x-mas-glow-makeup-kit", title: "X MAS GLOW MAKEUP KIT" },
  { path: "/lips", title: "LIPS" },
  { path: "/eyes", title: "EYES" },
  { path: "/face", title: "FACE" },
  { path: "/nails", title: "NAILS" },
  { path: "/skincare", title: "SKINCARE" },
  { path: "/accessories", title: "ACCESSORIES" },
  { path: "/gifts&kits", title: "GIFTS&KITS" },
  { path: "/bestsellers", title: "BESTSELLERS" },
  { path: "/new-launches", title: "NEW LAUNCHES" },
  { path: "/offers", title: "OFFERS" },
];

function Navbar() {
  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { token, setVerifiedToken } = useContext(AuthContext);
  const [isSearchSuggestionsVisible, setSearchSuggestionsVisible] =
    useState(false);
  const [isLogout, setIsLogout] = useState(false);

  const handleHeartIconClick = () => {
    navigate("/account/wishlist");
  };
  const defaultAddress = JSON.parse(localStorage.getItem("addresses"));

  const { firstname, lastname } = defaultAddress || "";

  return (
    <>
      <Box width={"100%"} position={"fixed"} top={0} zIndex={"999"}>
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
                  <NavLink to={"/"}>
                    <Image
                      w="100%"
                      src="https://d32baadbbpueqt.cloudfront.net/Logo/8bef3896-f9cd-4bc2-b7ae-4f7a06b49803.gif"
                      alt="Logo"
                    />
                  </NavLink>
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
                        _placeholder={{ color: "gray.600" }}
                        padding={"20px"}
                        position={"relative"}
                        zIndex={10}
                      />

                      <Box
                        as={InputLeftAddon}
                        borderRightRadius={"10px"}
                        borderLeftRadius={"0px"}
                        display="flex"
                        alignItems="center"
                        paddingLeft="10px"
                        padding={"20px"}
                        cursor={"pointer"}
                        bg={"white"}
                      >
                        <Icon as={Search2Icon} color="gray.800" />
                        <Text color="gray.800" ml="10px">
                          Search
                        </Text>
                      </Box>
                    </InputGroup>
                  </Stack>
                  <ProductSearchModal
                    setSearchSuggestionsVisible={setSearchSuggestionsVisible}
                    isSearchSuggestionsVisible={isSearchSuggestionsVisible}
                  />
                </Box>
              </Flex>
            </Box>
            <Box width={"30%"}>
              <Flex
                alignItems={"center"}
                color={"white"}
                justifyContent={"space-between"}
              >
                <Box color={"white"} position={"relative"}>
                  <Flex alignItems={"center"} gap={"10px"} cursor={"pointer"}>
                    <BiSolidUserCircle fontSize={"20px"} />
                    {!token ? (
                      <Text onClick={onOpen}>Login/Register</Text>
                    ) : (
                      <>
                        <Text onClick={() => navigate("/account/orders")}>
                          {defaultAddress &&
                          defaultAddress.firstname &&
                          defaultAddress.lastname
                            ? `Hi,${firstname} ${lastname}`
                            : "Hi,Sugar Fan"}
                        </Text>

                        <IoIosArrowDown
                          onClick={() => setIsLogout(!isLogout)}
                        />
                      </>
                    )}
                  </Flex>
                  {isLogout ? (
                    <Box
                      pos={"absolute"}
                      zIndex={"10"}
                      bg={"white"}
                      top={"30px"}
                      w={"100%"}
                      m={"auto"}
                      p={"10px"}
                      textAlign={"center"}
                      cursor={"pointer"}
                      borderRadius={"5px"}
                    >
                      <Flex
                        alignItems={"center"}
                        w={"60%"}
                        m={"auto"}
                        justifyContent={"center"}
                      >
                        <Text color={"black"} fontWeight={"bold"}>
                          Logout
                        </Text>
                      </Flex>
                    </Box>
                  ) : null}
                </Box>
                <Box width={"33%"}>
                  <Flex alignItems={"center"} justifyContent={"space-between"}>
                    <Box>
                      <CiHeart
                        fontSize={"25px"}
                        cursor={"pointer"}
                        onClick={handleHeartIconClick}
                      />
                    </Box>
                    <Box pos={"relative"}>
                      <NavLink to={"/bag"}>
                        <IoBagHandleOutline
                          fontSize={"25px"}
                          cursor={"pointer"}
                        />
                      </NavLink>

                      <Badge
                        bg="#EC407A"
                        color={"white"}
                        borderRadius="full"
                        position="absolute"
                        top="-1"
                        right="-1"
                        fontSize={"11px"}
                      >
                        {/* {notificationCount} */} 3
                      </Badge>
                    </Box>
                    <Box>
                      <BiSolidOffer fontSize={"25px"} cursor={"pointer"} />
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Flex>
          {/* Login Modal */}
          <LoginModal
            onClose={onClose}
            isOpen={isOpen}
            token={token}
            setVerifiedToken={setVerifiedToken}
          />
          <Box
            width={"100%"}
            backgroundColor={"rgb(20, 20, 20)"}
            height={"50px"}
          >
            <Flex alignItems={"center"} justifyContent={"center"} h={"100%"}>
              <Box width={"97%"} margin={"auto"}>
                <Flex
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  color={"white"}
                >
                  {productsLink.map((item, index) => (
                    <Box
                      key={index}
                      pos={"relative"}
                      padding={"10px"}
                      _hover={{
                        color: "#E91E63",
                        transition: "all .5s ease-in-out",
                      }}
                    >
                      <NavLink to={item.path} key={index}>
                        {item.title}
                      </NavLink>
                    </Box>
                  ))}
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Navbar;
