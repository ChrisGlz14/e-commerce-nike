"use client";

import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {



  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
     console.log("SUBMIT funcionando");
    e.preventDefault();

    await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    });

    alert("Usuario creado");
  };

  return (
    <div className="flex flex-col flex-1 gap-4 p-4 max-w-sm mx-auto justify-center">
    
    <form onSubmit={handleSubmit}>

      <h1 className="text-2xl font-bold text-center">Crear cuenta</h1>

      <input
        className="text-black p-2 m-3 rounded-sm w-full"
        placeholder="Nombre"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <input
        className="text-black p-2 m-3 rounded-sm w-full"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input
        className="text-black p-2 m-3 rounded-sm w-full"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />

      {/* Agrego el contenedor  */}
      <div className="flex justify-center items-center">

      <button className="bg-blue-500 text-white p-2 m-3" type="submit" >Registrarse</button>
      </div>
      

    </form>
    </div>
  );
}