import React, { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { MdContentCopy } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoGiftOutline } from "react-icons/io5";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";

const userRouteCard = [
  {
    path: "/account/orders", // Updated path to include "/account"
    icons: FaRegFileAlt,
    text: "Orders",
    forwarIcon: `${IoIosArrowForward}`,
  },
  {
    path: "/account/addresses", // Updated path to include "/account"
    icons: CiLocationOn,
    text: "Addresses",
    forwarIcon: `${IoIosArrowForward}`,
  },
  {
    path: "/account/wishlist", // Updated path to include "/account"
    icons: FaRegHeart,
    text: "Wishlist",
    forwarIcon: `${IoIosArrowForward}`,
  },
  {
    path: "/account/whatsapp", // Updated path to include "/account"
    icons: FaWhatsapp,
    text: "Whatsapp Store",
    forwarIcon: `${IoIosArrowForward}`,
  },
  {
    path: "/account/referral", // Updated path to include "/account"
    icons: IoGiftOutline,
    text: "Refer & Earn",
    forwarIcon: `${IoIosArrowForward}`,
  },
];

function UserAccount() {
  const defaultAddress = JSON.parse(localStorage.getItem("addresses"));

  const location = useLocation();

  const { firstname, lastname, phonenumber, email } = defaultAddress || "";
  const getLinkColor = (path) => {
    return location.pathname === path ? "pink.500" : "gray.600";
  };
  useEffect(() => {}, [defaultAddress]);
  return (
    <>
      <Box w={"23%"} borderRadius={"10px"}>
        <Box
          width={"100%"}
          style={{
            backgroundImage: `url("https://media.sugarcosmetics.com/upload/VTOBackgroungTexture.png")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            borderRadius: "10px",
          }}
          // pos={"relative"}
        >
          <Box w={"32%"} m={"auto"} pt={"10px"}>
            <Image src="https://media.sugarcosmetics.com/upload/accountMask.png" />
          </Box>
          <Box width={"100%"} m={"auto"} textAlign={"center"} mt={"10px"}>
            <Text color={"white"} fontSize={"18px"} fontWeight={"bold"}>
              {defaultAddress &&
              defaultAddress.firstname &&
              defaultAddress.lastname
                ? `${firstname} ${lastname}`
                : "Sugar Fan"}
            </Text>
            <Text color={"white"} fontSize={"12px"} fontWeight={"bold"}>
              {defaultAddress && defaultAddress.phonenumber
                ? `${phonenumber} `
                : ""}
            </Text>
            <Text color={"white"} fontSize={"12px"} fontWeight={"bold"}>
              {defaultAddress && defaultAddress.email ? `${email}` : ""}
            </Text>
          </Box>
          <Box width={"100%"} bg={"white"} borderTopRadius={"15px"} mt={"15px"}>
            <Box w={"90%"} m={"auto"} p={"12px 0 12px 0"}>
              <Box mt={"2px"}>
                <Text
                  fontSize={"15px"}
                  fontWeight={"600"}
                  color={"gray.800"}
                  fontFamily={"sans-serif"}
                  fontStyle={"normal"}
                >
                  Refer Your Friends & Family
                </Text>
                <Text fontSize={"15px"} color={"gray.500"}>
                  Earn Up To ₹250
                </Text>
              </Box>
              <Flex
                alignItems={"center"}
                justifyContent={"space-evenly"}
                mt={"15px"}
                gap={"10px"}
              >
                <Box
                  border={"1px dashed #EC407A"}
                  w={"60%"}
                  borderRadius={"5px"}
                  bg={"#FCE4EC"}
                >
                  <Flex alignItems={"center"} justifyContent={"space-between"}>
                    <Box
                      textAlign={"center"}
                      w={"80%"}
                      borderRight={"1px dashed #EC407A"}
                      p={"12px"}
                    >
                      <Text>832sdkk</Text>
                    </Box>
                    <Box p={"12px"}>
                      <MdContentCopy cursor={"pointer"} />
                    </Box>
                  </Flex>
                </Box>
                <Box>
                  <Button
                    bg={"#25d366"}
                    color={"white"}
                    _hover={false}
                    h={"50px"}
                  >
                    <NavLink
                      to={
                        "https://web.whatsapp.com/send?text=SUGAR%20Cosmetics%20https%3A%2F%2Fsugarcosmetics.app.link%2FmkmWw4t4OFb"
                      }
                    >
                      <FaWhatsapp fontSize={"25px"} />
                    </NavLink>
                  </Button>
                </Box>
                <Box>
                  <Button
                    bg={"black"}
                    color={"white"}
                    _hover={false}
                    h={"50px"}
                    onClick={() => {
                      navigator
                        .share({
                          title: "Share via Browser",
                          text: "Check out this link!",
                          url: "https://your-website.com", // Replace with your actual URL
                        })
                        .catch((error) => {
                          console.error("Error sharing via browser:", error);
                        });
                    }}
                  >
                    <CiShare2 fontSize={"25px"} />
                  </Button>
                </Box>
              </Flex>
            </Box>
            <Box width={"100%"} h={"1px"} bg={"#E0E0E0"} />
            <Box w={"90%"} m={"auto"} mt={"10px"} cursor={"pointer"}>
              {userRouteCard?.map((item, index) => (
                <NavLink to={item.path} key={index}>
                  <Box
                    borderBottom={"1px solid #EEEEEE"}
                    padding={"15px 0 15px 0px"}
                  >
                    <Flex
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <Box>
                        <Flex alignItems={"center"}>
                          <Box
                            border={"1px solid #E0E0E0"}
                            p={"10px"}
                            fontSize={"20px"}
                            borderRadius={"50%"}
                          >
                            <item.icons color={getLinkColor(item.path)} />
                          </Box>

                          <Text
                            ml={"10px"}
                            fontWeight={"600"}
                            fontSize={"16px"}
                            color={getLinkColor(item.path)}
                          >
                            {item.text}
                          </Text>
                        </Flex>
                      </Box>
                      <Box>
                        <IoIosArrowForward color={getLinkColor(item.path)} />
                      </Box>
                    </Flex>
                  </Box>
                </NavLink>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default UserAccount;
