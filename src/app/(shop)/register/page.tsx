"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirm) {
      setError("Las contraseñas no coinciden");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    setLoading(false);

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.message ?? "Ocurrió un error al registrarte");
      return;
    }

    router.push("/auth/login");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-[-100px] right-[-80px] w-[400px] h-[400px] bg-red-600 opacity-20 rounded-full blur-3xl" />
      <div className="absolute bottom-[-80px] left-[-80px] w-[350px] h-[350px] bg-white opacity-10 rounded-full blur-3xl" />

      {/* Glass card */}
      <div className="w-full max-w-md mx-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-10">
        {/* Header */}
        <div className="mb-8 text-center">
          <span className="text-4xl font-black text-white uppercase">Nike</span>
          <p className="text-gray-400 text-sm mt-1">Crea tu cuenta</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Nombre */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Nombre completo
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Tu nombre"
              required
              className="w-full rounded-xl bg-white/10 border border-white/15 text-white placeholder-gray-500 px-4 py-3 text-sm focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
            />
          </div>

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

          {/* Contraseña */}
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

          {/* Confirmar contraseña */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Confirmar contraseña
            </label>
            <input
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full rounded-xl bg-white/10 border border-white/15 text-white placeholder-gray-500 px-4 py-3 text-sm focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
            />
          </div>

          {/* Error */}
          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}

          {/* Submit envio */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-white text-black font-bold text-sm uppercase tracking-widest hover:bg-gray-200 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-2"
          >
            {loading ? "Creando cuenta..." : "Registrarse"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-6">
          ¿Ya tienes cuenta?{" "}
          <Link href="/auth/login" className="text-white font-semibold hover:underline">
            Inicia sesión
          </Link>
        </p>
      </div>
    </main>
  );
}
