import { Button } from "@/components/ui/button";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Flex, Box, Text, Image } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { clearItems, deleteCartItems } from "../store";
import { useNavigate } from "react-router-dom";

const AddToCart = ({ cart, onClose }) => {
  const cartItems = useSelector((state) => state.cartItems);
  const subTotal = cartItems.reduce((total, item) => total + item.price, 0);
  const status = useSelector((state)=>state.isAuth.status)
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleProceedToPayment = () => {
    // Navigate to the payment success page
    onClose();
    navigate("/payment-success");
  };

  const handleRemoveItem = (id) => {
    dispatch(deleteCartItems(id));
  };

  return (
    <DrawerRoot open={cart} onClose={onClose}>
      <DrawerBackdrop />
      <DrawerContent w={{ base: "100%", sm: "90%", md: "80%" }} maxW="400px">
        <DrawerHeader
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderBottom="1px solid"
          borderColor="gray.200"
          padding={{ base: "12px", sm: "16px" }}
        >
          <DrawerTitle fontSize={{ base: "md", md: "lg" }} fontWeight="semibold">
            Your Cart
          </DrawerTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            aria-label="Close"
            borderRadius="full"
            _hover={{ bg: "gray.100" }}
          >
            &times;
          </Button>
        </DrawerHeader>

        <DrawerBody padding={{ base: "12px", sm: "20px" }}>
          {cartItems.length === 0 ? (
            <Text fontSize="md" color="gray.600" textAlign="center" marginBottom="24px">
              Your cart items will appear here. Add products to see them in your cart!
            </Text>
          ) : (
            <Box>
              {cartItems.map((item) => (
                <Flex
                  key={item.id}
                  justify="space-between"
                  align="center"
                  marginBottom="16px"
                  borderBottom="1px solid"
                  borderColor="gray.200"
                  paddingBottom="16px"
                  _hover={{ bg: "gray.50" }}
                  transition="background-color 0.3s ease"
                  direction={{ base: "column", sm: "row" }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    boxSize={{ base: "120px", sm: "140px", md: "80px" }}
                    objectFit="cover"
                    marginBottom={{ base: "12px", sm: "0" }}
                    borderRadius="8px"
                  />
                  <Box
                    flex="1"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    paddingLeft={{ base: "0", sm: "16px" }}
                    marginBottom={{ base: "12px", sm: "0" }}
                  >
                    <Text fontSize="md" fontWeight="semibold" color="gray.800" noOfLines={1}>
                      {item.title}
                    </Text>
                    <Text fontSize="sm" color="gray.600" noOfLines={1}>
                      {item.category}
                    </Text>
                    <Text fontSize="sm" color="gray.600" noOfLines={1}>
                      Size: {item.size}
                    </Text>
                    <Text fontSize="lg" color="blue.500" fontWeight="bold">
                      ${item.price}
                    </Text>
                  </Box>
                  <Button
                    variant="outline"
                    p={2}
                    colorScheme="red"
                    size="sm"
                    onClick={() => handleRemoveItem(item.id)}
                    borderRadius="full"
                    _hover={{ bg: "red.50" }}
                    marginTop={{ base: "8px", sm: "0" }}
                  >
                    Remove
                  </Button>
                </Flex>
              ))}
            </Box>
          )}
        </DrawerBody>

        {cartItems.length > 0 && (
          <Box mb={4} w="full">
            <Text fontSize="sm" fontWeight="semibold" color="gray.600" textAlign="right" mr={4}>
              Subtotal: ${subTotal.toFixed(2)}
            </Text>
          </Box>
        )}

        <DrawerFooter padding={{ base: "12px", sm: "16px" }}>
          <Flex
            justify="space-between"
            w="full"
            direction={{ base: "column", sm: "row" }}
            gap={4}
          >
            <Button
              p={6}
              variant="outline"
              onClick={onClose}
              size="lg"
              colorScheme="red"
              w={{ base: "100%", sm: "30%" }}
              _hover={{ bg: "red.50" }}
            >
              Close
            </Button>
            <Button
              p={6}
              colorScheme="blue"
              size="lg"
              w={{ base: "100%", sm: "60%" }}
              _hover={{ bg: "blue.500" }} 
              onClick={handleProceedToPayment}
              disabled={!status}
            >
              Proceed to Payment
            </Button>
          </Flex>
        </DrawerFooter>
      </DrawerContent>
    </DrawerRoot>
  );
};

export default AddToCart;
