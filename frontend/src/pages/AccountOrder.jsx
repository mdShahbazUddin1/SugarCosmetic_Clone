import { Box, Text } from "@chakra-ui/react";
import React from "react";
import RoutingLocationNav from "../components/RoutingLocationNav";

function AccountOrder() {
  return (
    <>
      <Box mt={"130px"}>
        <RoutingLocationNav />
        <Text color={"black"}>Accountorder</Text>
      </Box>
    </>
  );
}

export default AccountOrder;
