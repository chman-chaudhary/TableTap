"use client";

import { createContext, useContext } from "react";
import { database } from "./firebase";
import { collection } from "firebase/firestore";

const DatabaseContext = createContext();

export function DatabaseProvider({ children }) {
  const RestaurantSchema = collection(database, "restaurants");
  const OwnerSchema = collection(database, "owners");
  const MenuItemSchema = collection(database, "menuitems");
  const OrderSchema = collection(database, "oders");
  const SubscriptionSchema = collection(database, "subscriptions");
  const PaymentSchema = collection(database, "payments");
  const NotificationSchema = collection(database, "notifications");

  return (
    <DatabaseContext.Provider
      value={{
        RestaurantSchema,
        OwnerSchema,
        MenuItemSchema,
        OrderSchema,
        SubscriptionSchema,
        PaymentSchema,
        NotificationSchema,
      }}
    >
      {children}
    </DatabaseContext.Provider>
  );
}

export function useAuth() {
  return useContext(DatabaseContext);
}
