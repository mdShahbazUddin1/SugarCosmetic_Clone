import React from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  Text,
} from "@chakra-ui/react";
import {
  FaEnvelope,
  FaFacebookF,
  FaPinterest,
  FaTelegram,
} from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <>
      <Box
        bg={`url("https://in.sugarcosmetics.com/desc-images/Rectangle_background.svg")`}
        textAlign={"center"}
        height={"280px"}
      >
        <Flex alignItems={"center"} justifyContent={"center"} pt={"30px"}>
          <Box w={"50px"} border={"1px solid #E91E63"} mr={"20px"}></Box>
          <Box color={"#212121"} fontSize={"26px"} fontWeight={"700"}>
            LET’S STAY IN TOUCH
          </Box>
          <Box w={"50px"} border={"1px solid #E91E63"} ml={"20px"}></Box>
        </Flex>
        <Text textAlign={"center"} pt={"10px"} fontSize={"16px"}>
          Get the latest beauty tips straight to your inbox. Can’t wait to
          connect!
        </Text>
        <Box w={"50%"} m={"auto"} mt={"20px"}>
          <InputGroup>
            <Input
              bg={"white"}
              p={5}
              border={"1px solid #BDBDBD"}
              placeholder="Enter Email"
              _focus={{
                boxShadow: "none",
                border: "1px solid gray",
              }}
            />
            <Button bg={"black"} color={"white"} ml={"10px"} _hover={false}>
              SUBSCRIBE
            </Button>
          </InputGroup>
        </Box>
      </Box>
      <Box w={"100%"} position={"relative"} bg={"black"}>
        <Flex
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          width={"95%"}
          m={"auto"}
        >
          <Box
            height="150px"
            width="130px"
            bg={"black"}
            mt={"-70px"}
            padding={"15px"}
            borderRadius={"150px 150px 0 0"}
          >
            <Image src="https://in.sugarcosmetics.com/Footer_sugar_icon.svg" />
          </Box>
          <Box mt={"40px"} w={"25%"}>
            <Flex alignItems={"center"} justifyContent={"space-between"}>
              <Box
                p={2}
                bg={"gray.400"}
                borderRadius={"50%"}
                cursor={"pointer"}
                _hover={{ bg: "white" }}
                transition={"all .3s ease-in-out"}
              >
                <FaFacebookF color="black" />
              </Box>
              <Box
                p={2}
                bg={"gray.400"}
                borderRadius={"50%"}
                cursor={"pointer"}
                _hover={{ bg: "white" }}
                transition={"all .3s ease-in-out"}
              >
                <FaTwitter color="black" />
              </Box>
              <Box
                p={2}
                bg={"gray.400"}
                borderRadius={"50%"}
                cursor={"pointer"}
                _hover={{ bg: "white" }}
                transition={"all .3s ease-in-out"}
              >
                <FaYoutube color="black" />
              </Box>
              <Box
                p={2}
                bg={"gray.400"}
                borderRadius={"50%"}
                cursor={"pointer"}
                _hover={{ bg: "white" }}
                transition={"all .3s ease-in-out"}
              >
                <FaInstagram color="black" />
              </Box>
              <Box
                p={2}
                bg={"gray.400"}
                borderRadius={"50%"}
                cursor={"pointer"}
                _hover={{ bg: "white" }}
                transition={"all .3s ease-in-out"}
              >
                <FaPinterest color="black" />
              </Box>
              <Box
                p={2}
                bg={"gray.400"}
                borderRadius={"50%"}
                cursor={"pointer"}
                _hover={{ bg: "white" }}
                transition={"all .3s ease-in-out"}
              >
                <FaTelegram color="black" />
              </Box>
              <Box
                p={2}
                bg={"gray.400"}
                borderRadius={"50%"}
                cursor={"pointer"}
                _hover={{ bg: "white" }}
                transition={"all .3s ease-in-out"}
              >
                <FaEnvelope color="black" />
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Box
          w={"95%"}
          m={"auto"}
          borderTop={"1px solid #F5F5F5"}
          borderBottom={"1px solid #F5F5F5"}
          mt={"30px"}
        >
          <Box w={"60%"} m={"auto"} mt={"20px"} mb={"20px"}>
            <Flex alignItems={"center"} justifyContent={"space-between"}>
              <Text
                color={"white"}
                fontWeight={"400"}
                fontStyle={"normal"}
                fontSize={"20px"}
                _hover={{ textDecoration: "underline" }}
                cursor={"pointer"}
              >
                Stores
              </Text>
              <Text
                color={"white"}
                fontWeight={"400"}
                fontStyle={"normal"}
                fontSize={"20px"}
                _hover={{ textDecoration: "underline" }}
                cursor={"pointer"}
              >
                Elite
              </Text>
              <Text
                color={"white"}
                fontWeight={"400"}
                fontStyle={"normal"}
                fontSize={"20px"}
                _hover={{ textDecoration: "underline" }}
                cursor={"pointer"}
              >
                Terms & Conditions
              </Text>
              <Text
                color={"white"}
                fontWeight={"400"}
                fontStyle={"normal"}
                fontSize={"20px"}
                _hover={{ textDecoration: "underline" }}
                cursor={"pointer"}
              >
                Returns
              </Text>
              <Text
                color={"white"}
                fontWeight={"400"}
                fontStyle={"normal"}
                fontSize={"20px"}
                _hover={{ textDecoration: "underline" }}
                cursor={"pointer"}
              >
                FAQs
              </Text>
              <Text
                color={"white"}
                fontWeight={"400"}
                fontStyle={"normal"}
                fontSize={"20px"}
                _hover={{ textDecoration: "underline" }}
                cursor={"pointer"}
              >
                About Us
              </Text>
            </Flex>
          </Box>
        </Box>
        <Box textAlign={"center"} pt={"20px"} pb={"20px"}>
          <Text
            color={"white"}
            fontWeight={"400"}
            fontStyle={"normal"}
            fontSize={"16px"}
          >
            Copyright © 2023 SUGAR Cosmetics. All rights reserved.
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
