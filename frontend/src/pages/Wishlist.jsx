import React, { useEffect, useState } from "react";
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

function Wishlist() {
  const [productDetails, setProductDetails] = useState([]);
  const [loadingStates, setLoadingStates] = useState(
    Array(productDetails.length).fill(false)
  );
  const toast = useToast();

  const handleLikeClick = async (productId) => {
    try {
      const res = await fetch(
        `http://localhost:8080/wishlist/removeFromWishlist/${productId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      if (res.ok) {
        // Remove the product from the state or update as needed
        setProductDetails((prevProducts) =>
          prevProducts.filter((product) => product._id !== productId)
        );

        toast({
          title: `Removed from wishlist`,
          position: "bottom-left",
          isClosable: true,
          status: "warning",
          variant: "solid",
          duration: 5000,
        });
      }
    } catch (error) {
      console.error(error);
      // Handle the error if needed
    }
  };
  useEffect(() => {
    const fetchWishlistItems = async () => {
      try {
        const res = await fetch("http://localhost:8080/wishlist/getwishlist", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        });

        if (res.ok) {
          const data = await res.json();
          // Set the wishlist items in the state
          console.log(data.wishlistItems);
          setProductDetails(data.wishlistItems);
        }
      } catch (error) {
        console.error(error);
        // Handle the error if needed
      }
    };

    fetchWishlistItems();
  }, [productDetails]);

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
      <Box w={"73%"} bg={"#F5F5F5"} borderRadius={"10px"}>
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
                            src={item.productDetails.image}
                            borderRadius="lg"
                          />
                          <Stack mt="20px" w={"100%"}>
                            <Text fontSize="14px" textAlign="center">
                              {item.productDetails.title}
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
                                {item.productDetails.discountprice}
                              </Text>
                              <Text fontWeight="bold" fontSize="18px">
                                {item.productDetails.price}
                              </Text>
                              <Text
                                fontWeight="bold"
                                fontSize="13px"
                                color="#E91E63"
                              >
                                {item.productDetails.off}
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
                              onClick={() =>
                                handleLikeClick(item.productDetails._id)
                              }
                            >
                              <AiFillHeart fontSize="30px" color={"black"} />
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
