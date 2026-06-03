import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nike E-Commerce",
  description: "Tienda de zapatos de marca Nike E-Commerce",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
