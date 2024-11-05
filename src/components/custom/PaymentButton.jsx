"use client";

import { Button } from "@/components/ui/button";

export const PaymentButton = ({ price, onClick }) => {
  return (
    <Button variant="default" size="lg" className="w-full" onClick={onClick}>
      Pay ${price}
    </Button>
  );
};
