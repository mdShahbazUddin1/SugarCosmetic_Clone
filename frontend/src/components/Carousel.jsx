import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Image, IconButton } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = ({ slides }) => {
  const PrevArrow = ({ onClick }) => (
    <IconButton
      icon={<FaChevronLeft />}
      aria-label="Previous"
      onClick={onClick}
      position="absolute"
      left="10px" // Adjust the left position as needed
      top="50%"
      transform="translateY(-50%)"
      bg="rgba(33, 33, 33, 0.5)"
      color="white"
      _hover={false}
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
      right="10px" // Adjust the right position as needed
      top="50%"
      transform="translateY(-50%)"
      bg="rgba(33, 33, 33, 0.5)"
      color="white"
      _hover={false}
      zIndex={"1"}
      borderRadius={"50%"}
    />
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <Slider {...settings}>
      {slides?.map((item) => (
        <Box key={item.image} width={"100%"} height={"350px"}>
          <Image
            width={"100%"}
            height={"100%"}
            objectFit={"contain"}
            src={item.image}
            alt={item.alt}
          />
        </Box>
      ))}
    </Slider>
  );
};

export default Carousel;
