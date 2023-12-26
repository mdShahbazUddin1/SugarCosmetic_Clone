import React from "react";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { BsFire } from "react-icons/bs";
import { SlBadge } from "react-icons/sl";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

function ProductSearchModal({
  setSearchSuggestionsVisible,
  isSearchSuggestionsVisible,
}) {
  return (
    <>
      {isSearchSuggestionsVisible && (
        <Box
          w={"34.3%"}
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
    </>
  );
}

export default ProductSearchModal;
