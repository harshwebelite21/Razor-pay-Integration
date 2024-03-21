import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
  const query = useSearchParams()[0];
  return (
    <Box>
      <VStack h="100vh" justifyContent={"center"}>
        <Heading textTransform={"uppercase"}> Order Successful</Heading>
        <Text>{`${query.get("payment_id")}`}</Text>
      </VStack>
    </Box>
  );
};

export default PaymentSuccess;
