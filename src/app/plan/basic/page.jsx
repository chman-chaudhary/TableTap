"use client";

import { PaymentButton } from "@/components/custom/PaymentButton";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useAuth } from "@/lib/firebase/auth";
import { redirect } from "next/navigation";
import {
  collection,
  addDoc,
  doc,
  getDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { database } from "@/lib/firebase/firebase";

const BasicPlan = () => {
  const { user } = useAuth();

  const AddOwner = async () => {
    // const owner = await addDoc(collection(database, "owner"), {
    //   id: user.uid,
    //   name: user.displayName,
    //   email: user.email,
    //   photo: user.photoURL,
    // });
    // console.log(owner);
    const ownerRef = collection(database, "owner");
    const q = query(ownerRef, where("id", "==", user.uid));
    const querySnapShot = await getDocs(q);
    console.log(querySnapShot.docs[0].data());
  };

  const payment = () => {
    // Payment logic here
    alert("Payment Successful ✔");
    AddOwner();
    // redirect("/restaurant/1");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="max-w-sm mx-auto shadow-md">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-center">
            Basic Plan
          </CardTitle>
          <CardDescription className="text-center text-gray-600">
            A perfect plan to get you started
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <div>
              <span className="text-primary text-4xl">$9</span>
              <span className="text-lg font-normal">.98/</span>
              <span className="text-lg font-normal">month</span>
            </div>
            <p className="mt-2 text-gray-500">
              Enjoy essential features and priority support.
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>✔ Access to core features</li>
              <li>✔ Email support</li>
              <li>✔ Basic analytics</li>
            </ul>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <PaymentButton price="9.98" onClick={payment} />
        </CardFooter>
      </Card>
    </div>
  );
};

export default BasicPlan;
