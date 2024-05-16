import "../../app/globals.css";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main lang="en" className="overflow-x-hidden">
      <body className={"bg-blue-400 min-h-screen"}>{children}</body>
    </main>
  );
}
