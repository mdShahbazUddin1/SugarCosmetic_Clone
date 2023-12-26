import { Box, Flex, Grid, GridItem, Image } from "@chakra-ui/react";
import React from "react";
import Carousel from "../components/Carousel";
import ProductCardSlider from "../components/ProductCardSlider";

const imageSlide = [
  {
    image:
      "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F5184a46d-92d8-472d-9560-45620908b294.jpg&w=1920&q=75",
    alt: "slider-image",
  },
  {
    image:
      "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F112cfcea-5fc4-4ae6-80e5-c530bfa92a36.gif&w=1920&q=75",
    alt: "slider-image",
  },
  {
    image:
      "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F7291ed86-f87f-4afa-b245-417d8e91a5f9.jpg&w=1920&q=75",
    alt: "slider-image",
  },
  {
    image:
      "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Ffb808949-6a4b-43a2-a604-8890654ae835.jpg&w=1920&q=75",
    alt: "slider-image",
  },
  {
    image:
      "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fbe3dd028-8d91-40c7-80aa-4e6ba127f80c.jpg&w=1920&q=75",
    alt: "slider-image",
  },
];
const productCardSlide = [
  {
    image:
      "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F01.jpg%3Fv%3D1679931324&w=256&q=75",
    title: "Contour De Force Eyes And Face Palette",
    discountprice: "799.00",
    price: "671.00",
    off: "(16 % Off)",
  },
  {
    image:
      "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2Fa_00b52826-78d8-4da0-aba1-fbcbfb39dc33.jpg%3Fv%3D1688228539&w=256&q=75",
    title: "Contour De Force Eyes And Face Palette",
    discountprice: "799.00",
    price: "671.00",
    off: "(16 % Off)",
  },
  {
    image:
      "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2Fparent1stcard_1_7aa4b700-2b5f-4212-8b56-86889ab8a390.jpg%3Fv%3D1689262362&w=256&q=75",
    title: "Contour De Force Eyes And Face Palette",
    discountprice: "799.00",
    price: "671.00",
    off: "(16 % Off)",
  },
  {
    image:
      "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2Fparent1stcard_1_7aa4b700-2b5f-4212-8b56-86889ab8a390.jpg%3Fv%3D1689262362&w=256&q=75",
    title: "Contour De Force Eyes And Face Palette",
    discountprice: "799.00",
    price: "671.00",
    off: "(16 % Off)",
  },
  {
    image:
      "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FKohl-Of-Honour-Intense-Kajal-PDP-images-Parent-page.jpg%3Fv%3D1679673305&w=256&q=75",
    title: "Contour De Force Eyes And Face Palette",
    discountprice: "799.00",
    price: "671.00",
    off: "(16 % Off)",
  },
];

function HomeScreen() {
  return (
    <>
      <Box mt={"110px"}>
        <Carousel slides={imageSlide} />
        <Box
          w={"100%"}
          mt={"80px"}
          border={"1px solid black"}
          bg={`url("https://media.sugarcosmetics.com/upload/VTOBackgroungTexture.png")`}
        >
          <ProductCardSlider productDetails={productCardSlide} />
        </Box>
        <Box w={"95%"} m={"auto"} border={"1px solid white"} mt={"40px"}>
          <Box>
            <Flex alignItems={"center"} justifyContent={"center"}>
              <Box w={"50px"} border={"1px solid #E91E63"} mr={"20px"}></Box>
              <Box color={"black"} fontSize={"20px"} fontWeight={"bold"}>
                HOT DEALS
              </Box>
              <Box w={"50px"} border={"1px solid #E91E63"} ml={"20px"}></Box>
            </Flex>
            <Grid templateColumns="repeat(3, 1fr)" gap={10} mt={"20px"}>
              <GridItem w="100%" h="250px" bg={"blue"} borderRadius={"10px"}>
                <Image
                  src="https://d32baadbbpueqt.cloudfront.net/Homepage/a8997373-1d93-460b-81a2-cadb84ab5cca.gif"
                  w={"100%"}
                  h={"100%"}
                  borderRadius={"10px"}
                />
              </GridItem>
              <GridItem w="100%" h="250px" bg={"blue"} borderRadius={"10px"}>
                <Image
                  src="https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/72202ad7-4872-4d81-b61e-09dc2621d887.jpg&w=1920&q=75"
                  w={"100%"}
                  h={"100%"}
                  borderRadius={"10px"}
                />
              </GridItem>
              <GridItem w="100%" h="250px" bg={"blue"} borderRadius={"10px"}>
                <Image
                  src="https://d32baadbbpueqt.cloudfront.net/Homepage/9b92bb73-edd9-4b40-84be-c0a3f9c32d7c.gif"
                  w={"100%"}
                  h={"100%"}
                  borderRadius={"10px"}
                />
              </GridItem>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default HomeScreen;
