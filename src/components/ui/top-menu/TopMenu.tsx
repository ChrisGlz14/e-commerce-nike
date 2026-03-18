"use client";
import { useMenuSideState } from "@/store/ui/ui-store";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { IoBag } from "react-icons/io5";
import { SiNike } from "react-icons/si";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

interface Props {
  gender: string;
}



const Nav: React.FC<Props> = () => {

  const router = useRouter();
  

  const menu = useMenuSideState();
  const openSideMenu = menu.openSideMenu;
  
  const { logout, isAuthenticated } = useAuth();

  return (
    <>
      <header className="bg-transparent relative  md:py-4 md:px-10 items-center w-full justify-between z-10">
        <nav className="flex md:justify-between md:items-center ">
        {/* Logo */}
          <div className="md:flex flex-grow md:flex-grow-0 md:h-6 items-center justify-start w-[154.2px]">
            <Link href={"/"}>
              <SiNike className="text-white text-7xl cursor-pointer"/>
            </Link>
          </div>

          
          {/* Menu central */}
          <ul className="hidden sm:block gap-4 p-4 justify-between space-x-6">
              <Link className="transition-all hover:bg-black hover:bg-opacity-40 rounded-md p-2" href="/products?gender=men">Hombre</Link>
              <Link className="transition-all hover:bg-black hover:bg-opacity-40 rounded-md p-2" href="/products?gender=women">Mujer</Link>
              <Link className="transition-all hover:bg-black hover:bg-opacity-40 rounded-md p-2" href="/products?gender=unisex">Ofertas</Link>
              <Link className="transition-all hover:bg-black hover:bg-opacity-40 rounded-md p-2" href="/products?gender=kid">Niño</Link>
          </ul>

          {/* Cart section btn */}
          <div className="flex p-4 justify-center gap-2">
            <Link href="" className="justify-center items-center flex"> 
              <CiSearch className="search-icon text-2xl"/>
            </Link>
              <div className="relative flex justify-center items-center"> 
                <span className="absolute text-white text-xs rounded-full px-1 -right-2 top-2 font-bold bg-blue-800">
                  0
                </span>
                <IoBag className="search-icon text-2xl cursor-pointer" />
              </div>
            
              <Link href="/register"> 
              <button className="loginBtn p-2 rounded-md transition-all hover:bg-black hover:bg-opacity-40  flex items-center justify-center m-auto">
                Registrarse
              </button>
              </Link>
    
        

          { openSideMenu && (
            <button 
              className="p-2 rounded-md transition-all hover:bg-black hover:bg-opacity-40 flex items-center justify-center m-auto"
              onClick={openSideMenu}
            >
              Menu
            </button>
)}
          

</div>

        </nav>
      </header>
    </>
  );
};
export { Nav };
