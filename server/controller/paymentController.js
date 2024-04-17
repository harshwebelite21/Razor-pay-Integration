import { instance } from "../server.js";
import { validatePaymentVerification } from "../utils/razorpay-utils.js";
import { Payment } from "../models/orders.js";

export const checkout = async (req, res) => {
  const options = {
    amount: Number(req.body.orderTotal),
    notes: {
      notes: String(req.body.notes),
      userName: String(req.body.userName),
      userEmail: String(req.body.userEmail),
      country: String(req.body.country),
      orderTotal: Number(req.body.orderTotal),
      orderId: String(req.body.orderId),
    },
    currency: "INR",
  };

  // Create the order
  const order = await instance.orders.create(options);

  // Log the order for debugging
  console.log("🚀 ~ checkout ~ order:", order);

  // Send a successful response with the order details
  res.send({ order });
};

export const paymentVerification = async (req, res) => {
  const { razorpay_signature, razorpay_order_id, razorpay_payment_id } =
    req.body;

  await validatePaymentVerification(
    { order_id: razorpay_order_id, payment_id: razorpay_payment_id },
    razorpay_signature,
    process.env.RAZORPAY_API_SECRET
  );

  if (validatePaymentVerification) {
    await Payment.create({
      razorpay_signature,
      razorpay_order_id,
      razorpay_payment_id,
    });
    res.redirect(
      `http://localhost:3000/payment-success?payment_id=${razorpay_payment_id}`
    );
  } else {
    res.status(400).json("Payment Failed! ");
  }
};
