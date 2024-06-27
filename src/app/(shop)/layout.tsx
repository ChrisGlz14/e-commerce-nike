import type { Metadata } from "next";
import TopMenu from "@/components/ui/top-menu/TopMenu";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import SideMenu from "@/components/ui/side-menu/SideMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nike E-Commerce",
  description: "Tienda de zapatos de marca Nike E-Commerce",
};

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={inter.className}>
        
      <TopMenu />
      <SideMenu  />
        {children}
        
      
      </body>

      
      
    </html>
  );
}
