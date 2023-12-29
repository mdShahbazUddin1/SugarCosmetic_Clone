import React, { useState } from "react";
import {
  Box,
  Flex,
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  ButtonGroup,
  Button,
  CardFooter,
  Progress,
  useToast,
  GridItem,
  Grid,
} from "@chakra-ui/react";

import { AiFillHeart } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const productDetails = [
  {
    image:
      "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F01.jpg%3Fv%3D1679931324&w=256&q=75",
    title: "Contour De Force Eyes And Face Palette",
    discountprice: "799.00",
    price: "671.00",
    off: "(16% Off)",
  },
  {
    image:
      "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2Fa_00b52826-78d8-4da0-aba1-fbcbfb39dc33.jpg%3Fv%3D1688228539&w=256&q=75",
    title: "Contour De Force Eyes And Face Palette",
    discountprice: "799.00",
    price: "671.00",
    off: "(16% Off)",
  },
  {
    image:
      "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2Fparent1stcard_1_7aa4b700-2b5f-4212-8b56-86889ab8a390.jpg%3Fv%3D1689262362&w=256&q=75",
    title: "Contour De Force Eyes And Face Palette",
    discountprice: "799.00",
    price: "671.00",
    off: "(16% Off)",
  },
  {
    image:
      "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2Fparent1stcard_1_7aa4b700-2b5f-4212-8b56-86889ab8a390.jpg%3Fv%3D1689262362&w=256&q=75",
    title: "Contour De Force Eyes And Face Palette",
    discountprice: "799.00",
    price: "671.00",
    off: "(16% Off)",
  },
  {
    image:
      "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FKohl-Of-Honour-Intense-Kajal-PDP-images-Parent-page.jpg%3Fv%3D1679673305&w=256&q=75",
    title: "Contour De Force Eyes And Face Palette",
    discountprice: "799.00",
    price: "671.00",
    off: "(16% Off)",
  },
];

function Wishlist() {
  const [likedProducts, setLikedProducts] = useState([]);
  const [loadingStates, setLoadingStates] = useState(
    Array(productDetails.length).fill(false)
  );
  const toast = useToast();

  const handleLikeClick = (index) => {
    const newLikedProducts = [...likedProducts];
    newLikedProducts[index] = !newLikedProducts[index];
    setLikedProducts(newLikedProducts);
    if (newLikedProducts[index]) {
      toast({
        title: `Added to wishlist`,
        position: "bottom-left",
        isClosable: true,
        status: "success",
        variant: "solid",
        duration: 5000,
      });
    } else {
      toast({
        title: `Removed from wishlist`,
        position: "bottom-left",
        isClosable: true,
        status: "warning", // You can use a different status for removal
        variant: "solid",
        duration: 5000,
      });
    }
  };

  const handleAddToBagClick = (index) => {
    const newLoadingStates = [...loadingStates];
    newLoadingStates[index] = true;
    setLoadingStates(newLoadingStates);

    setTimeout(() => {
      const updatedLoadingStates = [...newLoadingStates];
      updatedLoadingStates[index] = false;
      setLoadingStates(updatedLoadingStates);
      toast({
        title: "Item Added Successfully",
        position: "bottom-left",
        isClosable: true,
        status: "success",
        variant: "solid",
        duration: 5000,
      });
    }, 2000);
  };
  return (
    <>
      <Box w={"75%"} h={"686px"} bg={"white"} borderRadius={"10px"}>
        {productDetails && productDetails.length === 0 ? (
          <Flex
            h={"100%"}
            flexDirection="column"
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box>
              {/* Your image component */}
              <Image
                src="https://in.sugarcosmetics.com/desc-images/WishlistEmpty.png"
                alt="Empty Order"
              />
            </Box>
            <Box mt={4} w={"100%"} textAlign={"center"}>
              <Text fontSize="15px" fontWeight={"500"}>
                Your wishlist is empty
              </Text>
              <Text>Looks like you haven’t made your choice yet</Text>
              <NavLink to={"/"}>
                <Button
                  p={6}
                  bg={"black"}
                  color={"white"}
                  mt={4}
                  _hover={false}
                >
                  FILL IT UP
                </Button>
              </NavLink>
            </Box>
          </Flex>
        ) : (
          <Grid w={"100%"} templateColumns="repeat(3, 1fr)" gap={6}>
            {productDetails?.map((item, index) => (
              <GridItem w={"100%"}>
                <Box width={"100%"}>
                  <Box width="100%" m="auto">
                    <Flex alignItems="center">
                      <Card maxW="xs" cursor={"pointer"}>
                        <CardBody p="0px 40px 0px 30px">
                          <Image
                            width="100%"
                            h="220px"
                            src={item.image}
                            borderRadius="lg"
                          />
                          <Stack mt="20px" w={"100%"}>
                            <Text fontSize="small" textAlign="center">
                              {item.title}
                            </Text>
                            <Flex
                              alignItems="center"
                              justifyContent="space-between"
                            >
                              <Text
                                fontSize="12px"
                                fontWeight="bold"
                                textDecorationLine={"line-through"}
                              >
                                ₹{item.discountprice}
                              </Text>
                              <Text fontWeight="bold" fontSize="18px">
                                ₹{item.price}
                              </Text>
                              <Text
                                fontWeight="bold"
                                fontSize="13px"
                                color="#E91E63"
                              >
                                {item.off}
                              </Text>
                            </Flex>
                          </Stack>
                        </CardBody>

                        <CardFooter mt="20px">
                          <ButtonGroup w="100%">
                            <Button
                              border="1px solid black"
                              bg="transparent"
                              _hover={false}
                              variant="unstyled"
                              p={1}
                              onClick={() => handleLikeClick(index)}
                            >
                              <AiFillHeart
                                fontSize="30px"
                                color={
                                  likedProducts[index] ? "#E91E63" : "#BDBDBD"
                                }
                              />
                            </Button>
                            <Button
                              variant="unstyled"
                              w="100%"
                              border="1px solid black"
                              bg="black"
                              color="white"
                              fontWeight="bold"
                              fontSize="14px"
                              _hover={false}
                              onClick={() => handleAddToBagClick(index)}
                            >
                              ADD TO BAG
                              {loadingStates[index] && (
                                <Progress
                                  value={100}
                                  size="xs"
                                  colorScheme="black"
                                  bg={"#E91E63"}
                                  isIndeterminate
                                  animationDuration={1.8}
                                  width={"80px"}
                                  m={"auto"}
                                  mt={"2px"}
                                  mb={"5px"}
                                />
                              )}
                            </Button>
                          </ButtonGroup>
                        </CardFooter>
                      </Card>
                    </Flex>
                  </Box>
                </Box>
              </GridItem>
            ))}
          </Grid>
        )}
      </Box>
    </>
  );
}

export default Wishlist;
