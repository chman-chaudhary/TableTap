import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaGoogle } from "react-icons/fa";

const Auth = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle>Login to TableTap</CardTitle>
          <CardDescription>
            Revolutionize Your Restaurant Experience
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="w-full">
            <FaGoogle className="mr-2" /> Continue with Google
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
