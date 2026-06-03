import { Nav } from "@/components/ui/top-menu/TopMenu";
import { SideMenu } from "@/components/ui/side-menu/SideMenu";

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav gender="" />
      <SideMenu />
      {children}
    </>
  );
}
