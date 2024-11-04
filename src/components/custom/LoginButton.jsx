"use client";

import { useAuth } from "@/lib/firebase/auth";
import { Button } from "../ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const LoginButton = () => {
  const { signIn, logOut, user } = useAuth();
  return (
    <>
      {user ? (
        <Login user={user} logout={logOut} />
      ) : (
        <Button onClick={signIn}>Login</Button>
      )}
    </>
  );
};

const Login = ({ user, logout }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage
            src={
              user.photoURL ? user.photoURL : "https://github.com/shadcn.png"
            }
          />
          <AvatarFallback className="bg-gradient-to-br from-indigo-400 to-violet-700 text-white">
            {user.displayName.charAt(0)}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
