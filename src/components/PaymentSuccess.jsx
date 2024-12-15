import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Text, Button, Center } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { clearItems } from "../store";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  useEffect(() => {
    // Redirect to the homepage after 3 seconds
    dispatch(clearItems())
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [navigate]);

  return (
    <Center height="100vh">
      <Box
        textAlign="center"
        maxWidth="500px"
        padding="20px"
        border="1px solid"
        borderColor="gray.300"
        borderRadius="8px"
        boxShadow="lg"
        bg="white"
      >
        <Text fontSize="2xl" fontWeight="bold" color="green.500" mb={4}>
          Your Payment was Successful!
        </Text>
        <Text fontSize="lg" color="gray.600" mb={4}>
          Your order has been accepted and is being processed.
        </Text>
        <Text fontSize="md" color="gray.500">
          You will be redirected to the homepage shortly...
        </Text>
      </Box>
    </Center>
  );
};

export default PaymentSuccess;
