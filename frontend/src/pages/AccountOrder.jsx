import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import RoutingLocationNav from "../components/RoutingLocationNav";
import UserAccount from "../components/UserAccount";
import Order from "./Order";
import Addresses from "./Addresses";
import Wishlist from "./Wishlist";
import Referral from "./Referral";

function AccountOrder() {
  const location = useLocation();

  // Set the default route to "/account/orders"
  const defaultRoute = "/account/orders";

  // If the current route is the default, update it based on the selected left-side route
  const updatedRoute =
    location.pathname.startsWith("/account") && location.pathname !== "/account"
      ? location.pathname
      : defaultRoute;

  // Render different components based on the route
  const renderUI = () => {
    switch (updatedRoute) {
      case "/account/orders":
        return <Order />;
      case "/account/addresses":
        return <Addresses />;
      case "/account/wishlist":
        return <Wishlist />;
      case "/account/referral":
        return <Referral />;
      default:
        return <Order />;
    }
  };

  return (
    <>
      <Box mt={"130px"}>
        <RoutingLocationNav />
        <Box bg={"#F5F5F5"} p={"20px 0 20px 0"}>
          <Box width={"95%"} m={"auto"}>
            <Flex alignItems={"start"} justifyContent={"space-between"}>
              <UserAccount />

              {/* i wantt to render ui of other routee */}
              {renderUI()}
            </Flex>
            <Box />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default AccountOrder;
