"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "../context/AuthContext";

const Auth = () => {
  const { signIn } = useAuth();
  return (
    <div>
      <h1>Please Sign in</h1>
      <Button onClick={signIn}>Sign in with Google</Button>
    </div>
  );
};

export default Auth;
