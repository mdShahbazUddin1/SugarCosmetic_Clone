import {
  Box,
  Button,
  Flex,
  FormLabel,
  Image,
  Input,
  InputGroup,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import RoutingLocationNav from "../components/RoutingLocationNav";

function Bag() {
  return (
    <Box mt={"130px"}>
      <RoutingLocationNav />
      <Box bg={"#F5F5F5"} p={"20px 0 20px 0"}>
        <Box width={"95%"} m={"auto"} bg={"white"} borderRadius={"10px"}>
          <Flex
            alignItems={"start"}
            justifyContent={"space-between"}
            w={"96%"}
            m={"auto"}
            gap={"10px"}
          >
            <Box width={"49%"}>
              <Box>
                <Box
                  w={"100%"}
                  mt={"20px"}
                  mb={"20px"}
                  bg={"#F5F5F5"}
                  p={"20px 0 20px 0"}
                  borderRadius={"10px"}
                >
                  <Box w={"90%"} m={"auto"}>
                    <Text>BONUS OFFER UNLOCKED</Text>
                    <Box mt={"40px"}>
                      <Flex
                        alignItems={"start"}
                        justifyContent={"space-evenly"}
                      >
                        <Box w={"8%"} border={"1px solid black"}>
                          <Image src="https://cdn.shopify.com/s/files/1/0906/2558/products/1_fa836052-efbe-477a-b61a-da07d35d1907.jpg?v=1677499279" />
                        </Box>
                        <Box ml={"10px"}>
                          <Text fontSize={"12px"}>
                            Stroke Of Genius Heavy-Duty Kohl - 05 Black Magic
                            (Black With Silver Glitter) - (Bonus)
                          </Text>
                          <Flex alignItems={"center"}>
                            <Text
                              textDecorationLine={"line-through"}
                              fontSize={"12px"}
                            >
                              rs233
                            </Text>
                            <Text ml={"10px"} fontWeight={"bold"}>
                              rs355
                            </Text>
                          </Flex>
                        </Box>
                        <Button bg={"black"} color={"white"} _hover={false}>
                          ADD TO BAG
                        </Button>
                      </Flex>
                    </Box>
                    <Box w={"100%"} border={"1px dashed #E0E0E0"} mt={"10px"} />
                    <Flex
                      w={"100%"}
                      alignItems={"end"}
                      justifyContent={"end"}
                      mt={"10px"}
                    >
                      <Text color={"#E91E63"}>View</Text>
                    </Flex>
                  </Box>
                </Box>
              </Box>
              <Box w={"100%"}>
                <Text fontSize={"18px"} fontWeight={"bold"}>
                  BAG SUMMARY
                </Text>
                <Box
                  mt={"10px"}
                  borderRadius={"10px"}
                  border={"1px solid #EEEEEE"}
                >
                  <Flex
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    p={"10px"}
                  >
                    <Flex alignItems={"center"}>
                      <Box w={"8%"} border={"1px solid black"}>
                        <Image src="https://cdn.shopify.com/s/files/1/0906/2558/products/1_fa836052-efbe-477a-b61a-da07d35d1907.jpg?v=1677499279" />
                      </Box>
                      <Box ml={"20px"}>
                        <Text fontSize={"12px"}>
                          Stroke Of Genius Heavy-Duty Kohl
                        </Text>
                        <Flex alignItems={"center"}>
                          <Text
                            textDecorationLine={"line-through"}
                            fontSize={"12px"}
                          >
                            rs233
                          </Text>
                          <Text ml={"10px"} fontWeight={"bold"}>
                            rs355
                          </Text>
                        </Flex>
                      </Box>
                    </Flex>

                    <Flex
                      w={"33%"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <RiDeleteBin6Line fontSize={"16px"} />
                      <Flex
                        alignItems={"center"}
                        border={"1px solid #EEEEEE"}
                        borderRadius={"10px"}
                      >
                        <Button
                          borderRadius={"0"}
                          _hover={false}
                          bg={"transparent"}
                        >
                          -
                        </Button>
                        <Text
                          borderRadius={"0"}
                          bg={"transparent"}
                          m={"0 5px 0 5px"}
                        >
                          1
                        </Text>
                        <Button
                          borderRadius={"0"}
                          _hover={false}
                          bg={"transparent"}
                        >
                          +
                        </Button>
                      </Flex>
                    </Flex>
                  </Flex>
                </Box>
              </Box>
            </Box>
            <Box width={"49%"}>
              <Box>
                <Box w={"100%"} p={"20px 0 20px 0"}>
                  <Box
                    border={"1px solid #ffd4e5"}
                    bg={
                      "linear-gradient(271.29deg,hsla(0,0%,100%,0) 14.61%, #ffd4e5 69.98%)"
                    }
                    borderRadius={"5px"}
                  >
                    <Box w={"95%"} m={"auto"}>
                      <Flex
                        alignItems={"center"}
                        justifyContent={"space-between"}
                      >
                        <Box>
                          <Text fontWeight={"bold"} fontSize={"16px"}>
                            rs 128 total saving
                          </Text>
                        </Box>
                        <Box w={"10%"}>
                          <Image
                            w={"100%"}
                            objectFit={"cover"}
                            src="https://in.sugarcosmetics.com/piggyBank.gif"
                          />
                        </Box>
                      </Flex>
                    </Box>
                  </Box>
                  <Text mt={"10px"} fontWeight={"bold"}>
                    APPLY COUPON
                  </Text>
                  <Box
                    w={"100%"}
                    mt={"20px"}
                    mb={"20px"}
                    border={"1px solid #E0E0E0"}
                    p={"20px 0 20px 0"}
                    borderRadius={"10px"}
                  >
                    <Box w={"95%"} m={"auto"}>
                      <Box>
                        <Flex
                          alignItems={"start"}
                          justifyContent={"space-between"}
                        >
                          <Box width={"70%"}>
                            <InputGroup pos={"relative"}>
                              <Input
                                type="text"
                                border={"1px solid gray"}
                                aria-labelledby="yourInputLabel"
                                _focus={{
                                  boxShadow: "none",
                                  border: "1px solid #BDBDBD",
                                }}
                                _hover={false}
                              />
                              <FormLabel
                                id="yourInputLabel"
                                pos={"absolute"}
                                p={"0 5px"}
                                top={"8px"}
                                left={"8px"}
                                transition={"0.3s"}
                                pointerEvents={"none"}
                                backgroundColor={"white"}
                                fontSize={"16px"}
                                css={{
                                  "[aria-labelledby='yourInputLabel']:focus + &":
                                    {
                                      top: "-12px",
                                      left: "10px",
                                      fontSize: "13px",
                                    },
                                }}
                                bg={"white"}
                                zIndex={"10"}
                                color={"gray.600"}
                              >
                                Enter Gift code or discount code
                              </FormLabel>
                            </InputGroup>
                          </Box>
                          <Button
                            w={"20%"}
                            isDisabled={true}
                            bg={"black"}
                            color={"white"}
                            _hover={false}
                          >
                            APPLY
                          </Button>
                        </Flex>
                      </Box>
                      <Box
                        w={"100%"}
                        border={"0.7px dashed #E0E0E0"}
                        mt={"30px"}
                      />
                      <Flex
                        w={"100%"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        mt={"10px"}
                      >
                        <Box>
                          <Text fontWeight={"bold"}>
                            Available Offers/Promos for you!
                          </Text>
                        </Box>
                        <Box>
                          <IoIosArrowDown />
                        </Box>
                      </Flex>
                    </Box>
                  </Box>
                  <Text mt={"10px"} fontWeight={"bold"}>
                    PRICE DETAILS
                  </Text>
                  <Box
                    w={"100%"}
                    mt={"20px"}
                    mb={"20px"}
                    border={"1px solid #E0E0E0"}
                    p={"20px 0 20px 0"}
                    borderRadius={"10px"}
                  >
                    <Box w={"95%"} m={"auto"}>
                      <Box>
                        <Flex
                          alignItems={"center"}
                          justifyContent={"space-between"}
                        >
                          <Text
                            color={"#757575"}
                            fontStyle="normal"
                            fontWeight="500"
                            fontSize="14px"
                            linHeight="16px"
                          >
                            Subtotal (Inclusive of taxes)
                          </Text>
                          <Text
                            color={"#757575"}
                            fontStyle="normal"
                            fontWeight="500"
                            fontSize="14px"
                            linHeight="16px"
                          >
                            ₹79
                          </Text>
                        </Flex>
                        <Flex
                          alignItems={"center"}
                          justifyContent={"space-between"}
                        >
                          <Text
                            color={"#757575"}
                            fontStyle="normal"
                            fontWeight="500"
                            fontSize="14px"
                            linHeight="16px"
                          >
                            Discount
                          </Text>
                          <Text
                            color={"#66BB6A"}
                            fontStyle="normal"
                            fontWeight="500"
                            fontSize="14px"
                            linHeight="16px"
                          >
                            -₹128
                          </Text>
                        </Flex>
                        <Flex
                          alignItems={"center"}
                          justifyContent={"space-between"}
                        >
                          <Text
                            color={"#757575"}
                            fontStyle="normal"
                            fontWeight="500"
                            fontSize="14px"
                            linHeight="16px"
                          >
                            SUGAR FAM Rewards
                          </Text>
                          <Text
                            color={"#66BB6A"}
                            fontStyle="normal"
                            fontWeight="500"
                            fontSize="14px"
                            linHeight="16px"
                          >
                            -₹
                          </Text>
                        </Flex>
                        <Flex
                          alignItems={"center"}
                          justifyContent={"space-between"}
                        >
                          <Text
                            color={"#757575"}
                            fontStyle="normal"
                            fontWeight="500"
                            fontSize="14px"
                            linHeight="16px"
                          >
                            Shipping
                          </Text>
                          <Text
                            color={"#66BB6A"}
                            fontStyle="normal"
                            fontWeight="500"
                            fontSize="14px"
                            linHeight="16px"
                          >
                            Free
                          </Text>
                        </Flex>
                      </Box>
                      <Box
                        w={"100%"}
                        border={"0.7px dashed #E0E0E0"}
                        mt={"30px"}
                      />
                      <Flex
                        w={"100%"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        mt={"10px"}
                      >
                        <Box>
                          <Text fontWeight={"bold"} fontSize={"20px"}>
                            Total
                          </Text>
                        </Box>
                        <Box>
                          <Text fontWeight={"bold"} fontSize={"20px"}>
                            Rs 671
                          </Text>
                        </Box>
                      </Flex>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Flex>
          <Box />
        </Box>
      </Box>
    </Box>
  );
}

export default Bag;
