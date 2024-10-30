"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut, signIn } = useAuth();
  return (
    <nav className="navbar text-3xl font-semibold px-3 py-2 flex justify-between items-center navbar-expand-lg navbar-light backdrop-blur-md bg-slate-400">
      <span>TableTap</span>

      {user ? (
        <span className="flex items-center gap-x-4">
          <h5 className="text-base">{user.displayName}</h5>
          <Button onClick={logOut}>Log out</Button>
        </span>
      ) : (
        <Button onClick={signIn}>Sign In</Button>
      )}
    </nav>
  );
};

export default Navbar;
