import { Nav, SideMenu } from "@/components";
import "../../app/globals.css";
import { Providers } from "../providers";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main lang="en" className="overflow-x-hidden">
      <Providers>
        
        <Nav gender=""/>
        
          {children}
        </Providers>
      
    </main>
  );
}
