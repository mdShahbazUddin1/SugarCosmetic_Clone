import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  Flex,
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  IconButton,
  ButtonGroup,
  Button,
  CardFooter,
  Progress,
  useToast,
} from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";

function ProductCardSlider({ productDetails, heading }) {
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

  const PrevArrow = ({ onClick }) => (
    <IconButton
      icon={<FaChevronLeft />}
      aria-label="Previous"
      onClick={onClick}
      position="absolute"
      left="-80px"
      top="50%"
      transform="translateY(-50%)"
      bg="white"
      color="#E91E63"
      zIndex={"1"}
      borderRadius={"50%"}
    />
  );

  const NextArrow = ({ onClick }) => (
    <IconButton
      icon={<FaChevronRight />}
      aria-label="Next"
      onClick={onClick}
      position="absolute"
      right="-60px"
      top="50%"
      transform="translateY(-50%)"
      bg="white"
      color="#E91E63"
      zIndex={"1"}
      borderRadius={"50%"}
    />
  );

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4, // Show 1 slide
    slidesToScroll: 1,
    autoplay: false,
    // autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768, // Adjust breakpoint as needed
        settings: {
          slidesToShow: 1, // Show 1 slide on smaller screens
        },
      },
      {
        breakpoint: 1200, // Adjust breakpoint as needed
        settings: {
          slidesToShow: 4, // Show 4 slides on larger screens
        },
      },
    ],
  };

  return (
    <>
      <Box
        w={"100%"}
        mt={"80px"}
        border={"1px solid black"}
        bg={`url("https://media.sugarcosmetics.com/upload/VTOBackgroungTexture.png")`}
      >
        <Box width={"82%"} m={"auto"} mb={"60px"}>
          <Flex alignItems={"center"} justifyContent={"center"} mt={"40px"}>
            <Box w={"50px"} border={"1px solid #E91E63"} mr={"20px"}></Box>
            <Box color={"white"} fontSize={"20px"} fontWeight={"bold"}>
              {heading}
            </Box>
            <Box w={"50px"} border={"1px solid #E91E63"} ml={"20px"}></Box>
          </Flex>
          <Slider {...settings}>
            {productDetails?.map((item, index) => (
              <Box key={index} width="100%" m="auto" mt="30px">
                <Flex alignItems="center">
                  <Card maxW="xs" w="259px">
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
                            color={likedProducts[index] ? "#E91E63" : "#BDBDBD"}
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
            ))}
          </Slider>
        </Box>
      </Box>
    </>
  );
}

export default ProductCardSlider;
