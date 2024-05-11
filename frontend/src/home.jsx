import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";

import axios from "axios";

const Home = () => {
  const checkout = async (amount) => {
    const { data: key } = await axios.get("http://localhost:4000/razorpay");

    const orderdata = {
      amount: amount,
    };
    const { data: order } = await axios.post(
      "http://localhost:4000/razorpay/checkout",
      orderdata
    );

    var options = {
      key: key, // Enter the Key ID generated from the Dashboard
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "http://localhost:4000/razorpay/verification",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();

    console.log(window);
  };

  return (
    <div
      style={{ display: "flex", alignItems: "center", justifyItems: "center" }}
    >
      <Card maxW="sm">
        <CardBody>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design
              with a sprinkle of vintage design.
            </Text>
            <Text color="blue.600" fontSize="2xl">
              $450
            </Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <Button
            variant="solid"
            colorScheme="blue"
            onClick={() => checkout(450)}
          >
            Buy now
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Home;
