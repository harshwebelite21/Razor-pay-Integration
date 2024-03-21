import crypto from "crypto";
export const validatePaymentVerification = (
  { order_id, payment_id },
  razorpay_signature,
  secret
) => {
  const data = order_id + "|" + payment_id;
  const generated_signature = crypto
    .createHmac("sha256", secret)
    .update(data.toString())
    .digest("hex");

  if (generated_signature == razorpay_signature) {
    console.log("payment is successful");
    return true;
  } else {
    return false;
  }
};
