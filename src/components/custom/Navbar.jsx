import Link from "next/link";
import { Button } from "../ui/button";
import { ModeToggle } from "../ui/ModeToggle";
import { LoginButton } from "./LoginButton";

const Navbar = () => {
  return (
    <div className="w-full text-3xl py-3 px-5 flex justify-between items-center z-50 backdrop-blur-md fixed border-b-[0.5px] border-gray-400/60">
      <Link className="font-bold" href="/">
        TableTap
      </Link>
      <span className="flex items-center gap-x-2">
        <ModeToggle />
        <LoginButton />
      </span>
    </div>
  );
};

export default Navbar;
