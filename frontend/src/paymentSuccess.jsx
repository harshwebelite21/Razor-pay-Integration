import React from "react";
import { useParams } from "react-router-dom";

const PaymentSuccess = () => {
  const { id } = useParams();
  return (
    <body>
      <div class="card">
        <div>
          <i class="checkmark">✓</i>
        </div>
        <h1>Success</h1>
        <p>
          We received your purchase request;
          <br /> we'll be in touch shortly!
        </p>

        <p>Your Order is Is {id}</p>
      </div>
    </body>
  );
};

export default PaymentSuccess;
