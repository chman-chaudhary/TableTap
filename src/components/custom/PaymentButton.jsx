"use client";

import { Button } from "../ui/button";

export const PaymentButton = ({ link, price }) => {
  return (
    <Button
      variant="default"
      size="lg"
      className="w-full"
      onClick={() => alert("Payment Successful")}
    >
      Pay ${price}
    </Button>
  );
};
