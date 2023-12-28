import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
} from "@chakra-ui/react";

function Addresses() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box w={"75%"}>
      <Flex alignItems={"end"} justifyContent={"end"}>
        <Button onClick={onOpen} bg={"black"} color={"white"} _hover={false}>
          ADD NEW ADDRESS
        </Button>
      </Flex>
      <Drawer onClose={onClose} isOpen={isOpen} placement="bottom">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{` drawer contents`}</DrawerHeader>
          <DrawerBody></DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Addresses;
