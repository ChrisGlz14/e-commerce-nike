import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Decorative blurred blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-red-600 opacity-20 rounded-full blur-3xl" />
      <div className="absolute bottom-[-80px] right-[-80px] w-[350px] h-[350px] bg-white opacity-10 rounded-full blur-3xl" />

      <LoginForm />
    </main>
  );
}
