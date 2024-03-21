import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import Card from "./Card";
import axios from "axios";

const Home = () => {
  const checkoutHandler = async (amount) => {
    const {
      data: { key },
    } = await axios.get("http://localhost:4000/api/getkey");
    console.log("🚀 ~ checkoutHandler ~ key:", key);
    const {
      data: { order },
    } = await axios.post("http://localhost:4000/api/checkout", { amount });

    var options = {
      key: key, // Enter the Key ID generated from the Dashboard
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      image: "https://lessonpix.com/drawings/96333/380x380/Lap.png",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "http://localhost:4000/api/paymentverification",
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
    const razor = new window.Razorpay(options);
    razor.open();
  };
  return (
    <Box>
      <Stack
        h={"100vh"}
        justifyContent="center"
        alignItems="center"
        direction={["column", "row"]}
      >
        <Card
          amount={2000}
          img={
            "https://media.istockphoto.com/id/1394988455/photo/laptop-with-a-blank-screen-on-a-white-background.webp?b=1&s=170667a&w=0&k=20&c=ExhLI0wl0S3Zak66uSK8oubQLnC9kC0wlcgTr9ePIXc="
          }
          checkoutHandler={checkoutHandler}
        />

        <Card
          amount={5000}
          img={
            "https://media.istockphoto.com/id/1394988455/photo/laptop-with-a-blank-screen-on-a-white-background.webp?b=1&s=170667a&w=0&k=20&c=ExhLI0wl0S3Zak66uSK8oubQLnC9kC0wlcgTr9ePIXc="
          }
          checkoutHandler={checkoutHandler}
        />
      </Stack>
    </Box>
  );
};

export default Home;
