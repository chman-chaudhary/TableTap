"use client";

import { useAuth } from "@/lib/firebase/auth";

export default function Home() {
  const { signIn, logOut, user } = useAuth();
  return (
    <div className="h-screen w-full flex flex-col gap-5 justify-center items-center">
      <h1 className="text-5xl underline">Hello</h1>
      {user ? (
        <div>
          <h3>Hello👋 , {user.displayName}!</h3>
          <button onClick={logOut}>Logout</button>
        </div>
      ) : (
        <button onClick={signIn}>Sign in</button>
      )}
    </div>
  );
}
