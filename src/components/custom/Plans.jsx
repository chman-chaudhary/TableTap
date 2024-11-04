import Link from "next/link";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const plans = [
  {
    id: 1,
    name: "Basic Plan",
    numeric: "9",
    decimal: "98",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    link: "/plan/basic",
  },
  {
    id: 2,
    name: "Standard Plan",
    numeric: "29",
    decimal: "98",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    link: "/plan/standard",
  },
  {
    id: 3,
    name: "Premium Value",
    numeric: "49",
    decimal: "98",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    link: "/plan/premium",
  },
];

const Plans = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-5">
      {plans.map((plan) => {
        return <CardBox key={plan.id} plan={plan} />;
      })}
    </div>
  );
};

export default Plans;

const CardBox = ({ plan }) => {
  return (
    <Card className="sm:w-full w-auto px-5">
      <CardHeader>
        <CardTitle className="text-center text-4xl">
          <span className="text-primary">
            ${plan.numeric}.{plan.decimal}
          </span>
          <span className="text-2xl font-normal">/</span>
          <span className="text-lg font-normal">month</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-8 mb-8">
        <h3 className="text-center text-xl">{plan.name}</h3>
        <ul>
          {plan.features.map((feature, idx) => {
            return <li key={idx}>{feature}</li>;
          })}
        </ul>
      </CardContent>
      <CardFooter>
        <Link href={plan.link} className="w-full">
          <Button className="w-full text-base">Select Plan</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
