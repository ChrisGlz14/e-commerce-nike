"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      setError("Correo o contraseña incorrectos");
    } else {
      window.location.href = "/";
    }
  };

  return (
    <div className="w-full max-w-md mx-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-10">
      {/* Logo / título */}
      <div className="mb-8 text-center">
        <span className="text-4xl font-black text-white uppercase">Nike</span>
        <p className="text-gray-400 text-sm mt-1">Ingresa a tu cuenta</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Email */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Correo electrónico
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ejemplo@correo.com"
            required
            className="w-full rounded-xl bg-white/10 border border-white/15 text-white placeholder-gray-500 px-4 py-3 text-sm focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Contraseña
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
            className="w-full rounded-xl bg-white/10 border border-white/15 text-white placeholder-gray-500 px-4 py-3 text-sm focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
          />
        </div>

        {/* Error */}
        {error && (
          <p className="text-red-400 text-sm text-center">{error}</p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-xl bg-white text-black font-bold text-sm uppercase tracking-widest hover:bg-gray-200 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-2"
        >
          {loading ? "Ingresando..." : "Iniciar sesión"}
        </button>
      </form>

      {/* Footer */}
      <p className="text-center text-gray-500 text-sm mt-6">
        ¿No tienes cuenta?{" "}
        <Link href="/register" className="text-white font-semibold hover:underline">
          Regístrate
        </Link>
      </p>
    </div>
  );
}
