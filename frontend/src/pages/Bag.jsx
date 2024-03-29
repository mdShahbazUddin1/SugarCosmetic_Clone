import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogOverlay,
  Box,
  Button,
  Flex,
  FormLabel,
  Image,
  Input,
  InputGroup,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { MotionBox } from "../components/MotionBox";
import RoutingLocationNav from "../components/RoutingLocationNav";
import Order from "./Order";
import { AuthContext } from "../context/UserContext";
import LoginModal from "../components/LoginModal";

function Bag() {
  const [isCartItem, setCartItem] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [totalSubtotal, setTotalSubtotal] = useState(0);
  const { updateBagItemCount, token } = useContext(AuthContext);
  const [isUserInfo, setIsUserInfo] = useState([]);
  const toast = useToast();
  const cancelRef = useRef();

  const getCartItem = useCallback(async () => {
    try {
      const res = await fetch(
        `https://excited-moth-shawl.cyclic.app/cart/getCart`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      if (res.ok) {
        const { cartItems, user, totalPrice } = await res.json();

        setTotalSubtotal(totalPrice);
        setCartItem(cartItems);
        setIsUserInfo(user);
        updateBagItemCount(cartItems.length);
      }
    } catch (error) {
      console.log(error);
    }
  }, [updateBagItemCount]);

  useEffect(() => {
    getCartItem();
  }, [getCartItem, updateBagItemCount]);

  const updateQuantity = async (itemId, newQuantity) => {
    try {
      const res = await fetch(
        `https://excited-moth-shawl.cyclic.app/cart/updateCart/${itemId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
          body: JSON.stringify({ newQuantity: Number(newQuantity) }),
        }
      );
      if (res.ok) {
        setCartItem((prevCartItems) => {
          return prevCartItems.map((item) =>
            item._id === itemId ? { ...item, quantity: newQuantity } : item
          );
        });
        getCartItem();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCartItem = async (itemId) => {
    try {
      const res = await fetch(
        `https://excited-moth-shawl.cyclic.app/cart/deleteCart/${itemId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      if (res.ok) {
        onClose();
        getCartItem();
        toast({
          title: "Item removed",
          position: "bottom-left",
          isClosable: true,
          status: "success",
          variant: "solid",
          duration: 5000,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const convertPriceToNumber = (priceString) => {
    // Assuming the priceString format is like "₹ 823"
    const numericValue = Number(priceString.replace(/[^\d.]/g, ""));
    return isNaN(numericValue) ? 0 : numericValue;
  };

  const calculateTotals = () => {
    let totalDiscount = 0;

    isCartItem.forEach((item) => {
      totalDiscount +=
        (convertPriceToNumber(item.productId.discountprice) -
          item.productId.price) *
        item.quantity;
    });

    return { totalSubtotal, totalDiscount };
  };

  const openLoginModal = () => {
    return <LoginModal />;
  };

  return (
    <Box mt={"130px"}>
      <RoutingLocationNav />
      <Box bg={"#F5F5F5"} p={"20px 0 20px 0"}>
        <Box width={"95%"} m={"auto"} bg={"white"} borderRadius={"10px"}>
          {isCartItem.length === 0 ? (
            <Order />
          ) : (
            <>
              <Flex
                alignItems={"start"}
                justifyContent={"space-between"}
                w={"96%"}
                m={"auto"}
                gap={"10px"}
              >
                <Box width={"49%"}>
                  <Box>
                    <Box
                      w={"100%"}
                      mt={"20px"}
                      mb={"20px"}
                      bg={"#F5F5F5"}
                      p={"20px 0 20px 0"}
                      borderRadius={"10px"}
                    >
                      <Box w={"90%"} m={"auto"}>
                        <Text>BONUS OFFER UNLOCKED</Text>
                        <Box mt={"40px"}>
                          <Flex
                            alignItems={"start"}
                            justifyContent={"space-evenly"}
                          >
                            <Box w={"8%"} border={"1px solid black"}>
                              <Image src="https://cdn.shopify.com/s/files/1/0906/2558/products/1_fa836052-efbe-477a-b61a-da07d35d1907.jpg?v=1677499279" />
                            </Box>
                            <Box ml={"10px"}>
                              <Text fontSize={"12px"}>
                                Stroke Of Genius Heavy-Duty Kohl - 05 Black
                                Magic (Black With Silver Glitter) - (Bonus)
                              </Text>
                              <Flex alignItems={"center"}>
                                <Text
                                  textDecorationLine={"line-through"}
                                  fontSize={"12px"}
                                >
                                  ₹233
                                </Text>
                                <Text ml={"10px"} fontWeight={"bold"}>
                                  ₹355
                                </Text>
                              </Flex>
                            </Box>
                            <Button bg={"black"} color={"white"} _hover={false}>
                              ADD TO BAG
                            </Button>
                          </Flex>
                        </Box>
                        <Box
                          w={"100%"}
                          border={"1px dashed #E0E0E0"}
                          mt={"10px"}
                        />
                        <Flex
                          w={"100%"}
                          alignItems={"end"}
                          justifyContent={"end"}
                          mt={"10px"}
                        >
                          <Text color={"#E91E63"}>View</Text>
                        </Flex>
                      </Box>
                    </Box>
                  </Box>
                  <Box w={"100%"}>
                    <Text fontSize={"18px"} fontWeight={"bold"}>
                      BAG SUMMARY
                    </Text>
                    {isCartItem?.map((item) => (
                      <Box
                        key={item._id}
                        mt={"10px"}
                        borderRadius={"10px"}
                        border={"1px solid #EEEEEE"}
                      >
                        <Flex
                          alignItems={"center"}
                          justifyContent={"space-between"}
                          p={"10px"}
                          borderBottom={"1px solid #EEEEEE"}
                        >
                          <Flex alignItems={"center"}>
                            <Box w={"10%"} border={"1px solid black"}>
                              <Image src={item.productId.image} />
                            </Box>
                            <Box ml={"20px"}>
                              <Text fontSize={"12px"}>
                                {item.productId.title}
                              </Text>
                              <Flex alignItems={"center"}>
                                <Text
                                  textDecorationLine={"line-through"}
                                  fontSize={"12px"}
                                >
                                  {item.productId.discountprice}
                                </Text>
                                <Text ml={"10px"} fontWeight={"bold"}>
                                  ₹{item.productId.price}
                                </Text>
                              </Flex>
                            </Box>
                          </Flex>

                          <Flex
                            w={"40%"}
                            alignItems={"end"}
                            justifyContent={"end"}
                          >
                            <Flex
                              alignItems={"center"}
                              border={"1px solid #EEEEEE"}
                              borderRadius={"10px"}
                            >
                              {item.quantity === 1 ? (
                                <>
                                  <MotionBox
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{ duration: 0.6 }}
                                  >
                                    <Button
                                      borderRadius={"0"}
                                      _hover={false}
                                      bg={"transparent"}
                                    >
                                      <RiDeleteBin6Line
                                        fontSize={"16px"}
                                        onClick={onOpen}
                                      />
                                    </Button>
                                  </MotionBox>

                                  <AlertDialog
                                    motionPreset="slideInBottom"
                                    leastDestructiveRef={cancelRef}
                                    onClose={onClose}
                                    isOpen={isOpen}
                                    isCentered
                                  >
                                    <AlertDialogOverlay />

                                    <AlertDialogContent>
                                      <AlertDialogCloseButton />
                                      <AlertDialogBody>
                                        <Flex
                                          h={"100%"}
                                          flexDirection={"column"}
                                          alignItems={"center"}
                                          justifyContent={"center"}
                                          mt={"40px"}
                                        >
                                          <Box w={"25%"}>
                                            <Image
                                              w={"100%"}
                                              src="https://in.sugarcosmetics.com/watch.png"
                                            />
                                          </Box>
                                          <Box mt={"20px"}>
                                            <Text>
                                              Are you sure you want to remove
                                              this item?
                                            </Text>
                                          </Box>
                                        </Flex>
                                      </AlertDialogBody>
                                      <AlertDialogFooter>
                                        <Flex
                                          w={"100%"}
                                          flexDirection={"column"}
                                          alignItems={"center"}
                                          justifyContent={"center"}
                                        >
                                          <Box>
                                            <Button
                                              ref={cancelRef}
                                              bg={"black"}
                                              color={"white"}
                                              _hover={false}
                                              onClick={() =>
                                                deleteCartItem(
                                                  item.productId._id
                                                )
                                              }
                                            >
                                              Remove
                                            </Button>
                                          </Box>
                                          <Box w={"45%"} mt={"8px"}>
                                            <Button
                                              w={"100%"}
                                              border={"1px solid black"}
                                              bg={"transparent"}
                                              color={"black"}
                                              _hover={false}
                                            >
                                              Move To Wishlist
                                            </Button>
                                          </Box>
                                        </Flex>
                                      </AlertDialogFooter>
                                    </AlertDialogContent>
                                  </AlertDialog>
                                </>
                              ) : (
                                <Button
                                  borderRadius={"0"}
                                  _hover={false}
                                  bg={"transparent"}
                                  onClick={() =>
                                    updateQuantity(
                                      item.productId._id,
                                      item.quantity - 1
                                    )
                                  }
                                >
                                  -
                                </Button>
                              )}

                              <Text
                                borderRadius={"0"}
                                bg={"transparent"}
                                m={"0 5px 0 5px"}
                                textAlign={"center"}
                              >
                                {item.quantity > 1 ? item.quantity : 1}
                              </Text>
                              <Button
                                borderRadius={"0"}
                                _hover={false}
                                bg={"transparent"}
                                onClick={() =>
                                  updateQuantity(
                                    item.productId._id,
                                    item.quantity + 1
                                  )
                                }
                              >
                                +
                              </Button>
                            </Flex>
                          </Flex>
                        </Flex>
                      </Box>
                    ))}
                  </Box>
                </Box>
                <Box width={"49%"}>
                  <Box>
                    <Box w={"100%"} p={"20px 0 20px 0"}>
                      <Box
                        border={"1px solid #ffd4e5"}
                        bg={
                          "linear-gradient(271.29deg,hsla(0,0%,100%,0) 14.61%, #ffd4e5 69.98%)"
                        }
                        borderRadius={"5px"}
                      >
                        <Box w={"95%"} m={"auto"}>
                          <Flex
                            alignItems={"center"}
                            justifyContent={"space-between"}
                          >
                            <Box>
                              <Text fontWeight={"bold"} fontSize={"16px"}>
                                ₹128 total savings
                              </Text>
                            </Box>
                            <Box w={"10%"}>
                              <Image
                                w={"100%"}
                                objectFit={"cover"}
                                src="https://in.sugarcosmetics.com/piggyBank.gif"
                              />
                            </Box>
                          </Flex>
                        </Box>
                      </Box>
                      <Text mt={"10px"} fontWeight={"bold"}>
                        APPLY COUPON
                      </Text>
                      <Box
                        w={"100%"}
                        mt={"20px"}
                        mb={"20px"}
                        border={"1px solid #E0E0E0"}
                        p={"20px 0 20px 0"}
                        borderRadius={"10px"}
                      >
                        <Box w={"95%"} m={"auto"}>
                          <Box>
                            <Flex
                              alignItems={"start"}
                              justifyContent={"space-between"}
                            >
                              <Box width={"70%"}>
                                <InputGroup pos={"relative"}>
                                  <Input
                                    type="text"
                                    border={"1px solid gray"}
                                    aria-labelledby="yourInputLabel"
                                    _focus={{
                                      boxShadow: "none",
                                      border: "1px solid #BDBDBD",
                                    }}
                                    _hover={false}
                                  />
                                  <FormLabel
                                    id="yourInputLabel"
                                    pos={"absolute"}
                                    p={"0 5px"}
                                    top={"8px"}
                                    left={"8px"}
                                    transition={"0.3s"}
                                    pointerEvents={"none"}
                                    backgroundColor={"white"}
                                    fontSize={"16px"}
                                    css={{
                                      "[aria-labelledby='yourInputLabel']:focus + &":
                                        {
                                          top: "-12px",
                                          left: "10px",
                                          fontSize: "13px",
                                        },
                                    }}
                                    bg={"white"}
                                    zIndex={"10"}
                                    color={"gray.600"}
                                  >
                                    Enter Gift code or discount code
                                  </FormLabel>
                                </InputGroup>
                              </Box>
                              <Button
                                w={"20%"}
                                isDisabled={true}
                                bg={"black"}
                                color={"white"}
                                _hover={false}
                              >
                                APPLY
                              </Button>
                            </Flex>
                          </Box>
                          <Box
                            w={"100%"}
                            border={"0.7px dashed #E0E0E0"}
                            mt={"30px"}
                          />
                          <Flex
                            w={"100%"}
                            alignItems={"center"}
                            justifyContent={"space-between"}
                            mt={"10px"}
                          >
                            <Box>
                              <Text fontWeight={"bold"}>
                                Available Offers/Promos for you!
                              </Text>
                            </Box>
                            <Box>
                              <IoIosArrowDown />
                            </Box>
                          </Flex>
                        </Box>
                      </Box>
                      <Text mt={"10px"} fontWeight={"bold"}>
                        PRICE DETAILS
                      </Text>
                      <Box
                        w={"100%"}
                        mt={"20px"}
                        mb={"20px"}
                        border={"1px solid #E0E0E0"}
                        p={"20px 0 20px 0"}
                        borderRadius={"10px"}
                      >
                        <Box w={"95%"} m={"auto"}>
                          <Box>
                            <Flex
                              alignItems={"center"}
                              justifyContent={"space-between"}
                            >
                              <Text
                                color={"#757575"}
                                fontStyle="normal"
                                fontWeight="500"
                                fontSize="14px"
                                lineHeight="16px"
                              >
                                Subtotal (Inclusive of taxes)
                              </Text>
                              <Text
                                color={"#757575"}
                                fontStyle="normal"
                                fontWeight="500"
                                fontSize="14px"
                                lineHeight="16px"
                              >
                                ₹{calculateTotals().totalSubtotal.toFixed(2)}
                              </Text>
                            </Flex>
                            <Flex
                              alignItems={"center"}
                              justifyContent={"space-between"}
                            >
                              <Text
                                color={"#757575"}
                                fontStyle="normal"
                                fontWeight="500"
                                fontSize="14px"
                                lineHeight="16px"
                              >
                                Discount
                              </Text>
                              <Text
                                color={"#66BB6A"}
                                fontStyle="normal"
                                fontWeight="500"
                                fontSize="14px"
                                lineHeight="16px"
                              >
                                -₹{calculateTotals().totalDiscount.toFixed(2)}
                              </Text>
                            </Flex>
                            <Flex
                              alignItems={"center"}
                              justifyContent={"space-between"}
                            >
                              <Text
                                color={"#757575"}
                                fontStyle="normal"
                                fontWeight="500"
                                fontSize="14px"
                                lineHeight="16px"
                              >
                                SUGAR FAM Rewards
                              </Text>
                              <Text
                                color={"#66BB6A"}
                                fontStyle="normal"
                                fontWeight="500"
                                fontSize="14px"
                                lineHeight="16px"
                              >
                                -₹
                              </Text>
                            </Flex>
                            <Flex
                              alignItems={"center"}
                              justifyContent={"space-between"}
                            >
                              <Text
                                color={"#757575"}
                                fontStyle="normal"
                                fontWeight="500"
                                fontSize="14px"
                                lineHeight="16px"
                              >
                                Shipping
                              </Text>
                              <Text
                                color={"#66BB6A"}
                                fontStyle="normal"
                                fontWeight="500"
                                fontSize="14px"
                                lineHeight="16px"
                              >
                                Free
                              </Text>
                            </Flex>
                          </Box>
                          <Box
                            w={"100%"}
                            border={"0.7px dashed #E0E0E0"}
                            mt={"30px"}
                          />
                          <Flex
                            w={"100%"}
                            alignItems={"center"}
                            justifyContent={"space-between"}
                            mt={"10px"}
                          >
                            <Box>
                              <Text fontWeight={"bold"} fontSize={"20px"}>
                                Total
                              </Text>
                            </Box>
                            <Box>
                              <Text fontWeight={"bold"} fontSize={"20px"}>
                                Rs {calculateTotals().totalSubtotal.toFixed(2)}
                              </Text>
                            </Box>
                          </Flex>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Flex>

              <Box />
              <Box width={"90%"} m={"auto"} pb={"20px"}>
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                  {isUserInfo?.addresses?.map((item) => (
                    <Box key={item._id} mt={"30px"}>
                      <Flex alignItems={"center"}>
                        <Text
                          fontStyle={"normal"}
                          fontWeight={"700"}
                          fontSize={"18px"}
                          lineHeight={"26px"}
                          color={"#212121"}
                          textTransform={"uppercase"}
                        >
                          DELIVERING TO:
                        </Text>

                        <Text
                          ml={"10px"}
                          fontWeight={"500"}
                          color={"#212121"}
                          fontSize={"16px"}
                          fontStyle={"normal"}
                        >
                          {item.firstname} {item.lastname}
                        </Text>
                      </Flex>
                      <Text
                        fontWeight={"400"}
                        color={"#212121"}
                        fontSize={"16px"}
                        fontStyle={"normal"}
                      >
                        {item.area},{item.houseno},{item.state},{item.city},
                        {item.pincode}
                      </Text>
                    </Box>
                  ))}

                  <Box>
                    <Button
                      w={"100%"}
                      size={"lg"}
                      bg={"black"}
                      color={"white"}
                      _hover={false}
                      onClick={() => {
                        token ? console.log("console") : openLoginModal();
                      }}
                    >
                      ₹{calculateTotals().totalSubtotal} PLACE ORDER
                    </Button>
                  </Box>
                </Flex>
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Bag;
