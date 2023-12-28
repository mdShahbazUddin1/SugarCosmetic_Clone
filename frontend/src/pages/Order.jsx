import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

function Order() {
  return (
    <>
      <Box w={"75%"} h={"686px"} bg={"white"} borderRadius={"10px"}>
        <Flex
          h={"100%"}
          flexDirection="column"
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box>
            {/* Your image component */}
            <img
              src="https://media.sugarcosmetics.com/upload/ic_empty_order%201.png"
              alt="Empty Order"
            />
          </Box>
          <Box mt={4} w={"100%"} textAlign={"center"}>
            <Text fontSize="15px" fontWeight={"500"}>
              Order is empty
            </Text>
            <Text>What! No order yet? Get going already!</Text>
            <NavLink to={"/"}>
              <Button p={6} bg={"black"} color={"white"} mt={4} _hover={false}>
                Shop Now
              </Button>
            </NavLink>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Order;
