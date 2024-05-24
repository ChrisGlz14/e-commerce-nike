"use client";
import Link from "next/link";
import { useState } from "react";
import SideCartSection from '../../SideCartSection';
import { CiSearch } from "react-icons/ci";
import { IoBag } from "react-icons/io5";
import { SiNike } from "react-icons/si";

interface menuCartShow {
  menuCartShow: boolean
}

const Nav: React.FC<menuCartShow> = () => {

  const [menuCartShow, setMenuCartShow] = useState(false)

  return (
    <>
      <header className="bg-transparent relative z-50 md:py-4 md:px-10 items-center w-full justify-between">

        <nav className="flex md:justify-center md:items-center flex-grow">

        {/* Logo */}
          <div className="md:flex flex-grow md:flex-grow-0 md:h-6 items-center justify-center">
          <SiNike className="text-white text-7xl text-center" href="/"/>
          </div>


          {/* Menu central */}
          <ul className="hidden sm:block gap-4 p-4 m-auto justify-center">
              <Link className="transition-all hover:bg-black hover:bg-opacity-40 rounded-md p-2" href="/category/men">Hombre</Link>
              <Link className="transition-all hover:bg-black hover:bg-opacity-40 rounded-md p-2" href="/category/women">Mujer</Link>
              <Link className="transition-all hover:bg-black hover:bg-opacity-40 rounded-md p-2" href="/category/sales">Ofertas</Link>
              <Link className="transition-all hover:bg-black hover:bg-opacity-40 rounded-md p-2" href="/category/child">Niño</Link>
          </ul>

          
          {/* Cart section btn */}
          <div className="flex p-4 justify-center gap-2">
            <Link href="/search" className="justify-center items-center flex"> 
              <CiSearch className="search-icon text-2xl"/>
            
            </Link>
            <Link href="/cart" className="justify-center items-center flex">
              <div className="relative">
              <span className="absolute text-white text-xs rounded-full px-1 -right-2 -top-2 font-bold bg-blue-800">
                2
              </span>
              <IoBag className="search-icon text-2xl cursor-pointer"/>

              </div>
            
            </Link>

            <button className="p-2 rounded-md transition-all hover:bg-black hover:bg-opacity-40  flex items-center justify-center m-auto" onClick={() => setMenuCartShow(!menuCartShow)}>
              Menu
            </button>
          </div>
          
        <SideCartSection menuCartShow={menuCartShow} setMenuCartShow={setMenuCartShow} />



        </nav>
      </header>
    </>
  );
};
export default Nav;
