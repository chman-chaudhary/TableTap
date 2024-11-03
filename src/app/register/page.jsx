"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function Register() {
  const [restaurantData, setRestaurantData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    return setRestaurantData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form className="px-4 md:px-40 py-5 text-lg">
      <h2 className="text-center text-3xl md:text-4xl mb-4">
        Add Your Restaurant 🍽
      </h2>
      <h5 className="text-center mb-10">Enter your restaurant details below</h5>
      <Label className="mb-2">Restaurant Name:</Label>
      <Input
        type="text"
        className="mb-4"
        name="name"
        value={restaurantData.name}
        onChange={(e) => handleChange(e)}
        required
      />
      <Label className="mb-2">Restaurant Address:</Label>
      <Input
        type="text"
        className="mb-4"
        name="address"
        value={restaurantData.address}
        onChange={(e) => handleChange(e)}
        required
      />
      <Label className="mb-2">Phone Number:</Label>
      <Input
        type="text"
        className="mb-4"
        name="phone"
        value={restaurantData.phone}
        onChange={(e) => handleChange(e)}
        required
      />
      <Label className="mb-2">Email:</Label>
      <Input
        type="email"
        className="mb-4"
        name="email"
        value={restaurantData.email}
        onChange={(e) => handleChange(e)}
        required
      />
      <Label className="mb-2">Password:</Label>
      <Input
        type="password"
        className="mb-4"
        name="password"
        value={restaurantData.password}
        onChange={(e) => handleChange(e)}
        required
      />
      <Label className="mb-2">Confirm Password:</Label>
      <Input
        type="password"
        className="mb-4"
        name="confirmPassword"
        value={restaurantData.confirmPassword}
        onChange={(e) => handleChange(e)}
        required
      />
      <div className="flex justify-center">
        <Button size="lg" className="w-full text-lg">
          Register
        </Button>
      </div>
    </form>
  );
}
