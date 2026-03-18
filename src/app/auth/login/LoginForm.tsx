"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm(){

   const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

    await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/"
    });
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
      className="text-black p-2 m-3"
        type="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input
        type="password"
        className="text-black p-2 m-3"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button className="bg-blue-500 text-white p-2 m-3" type="submit" onClick={() => router.push("/auth/register")}>Login</button>

    </form>
  );
}
