'use client'
import Link from 'next/link'
import React from 'react'
import { IoCloseOutline, IoPersonOutline, IoSearchOutline, IoTicketOutline, IoLogInOutline, IoShirtOutline, IoPeopleOutline } from 'react-icons/io5'


const SideMenu : React.FC = () => {
  return (
    <div>
      {/* Background Black */}
      <div className='fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30'>

      </div>

      {/* Background Blur */}
      <div className='fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-blur-sm backdrop-filter'>

      </div>

      {/* Side Menu */}

      <nav
      //hacer efecto de desplazamiento 
      className='fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300'>

        <IoCloseOutline 
        size={50} 
        className='absolute top-5 right-5 cursor-pointer text-black'
        onClick={() => console.log("click")}
        />
        {/* Input */}
        <div className='relative mt-14'>
          <IoSearchOutline size={20} className='absolute top-2 left-2 cursor-pointer text-black' />
          <input type="text" 
          placeholder='Search'
          className='w-full pl-10 focus:outline-none focus:border-red-500 border-b-2 border-gray-200 rounded-md bg-gray-100 h-10 text-black'
          />
        </div>


        {/* Links */}

        <Link 
        href={"/"}
        className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
        >

          <IoPersonOutline size={30} className='text-black'/>
          <span className='ml-3 text-xl text-black'>Perfil</span>

        </Link>
        
        {/* Orders */}
        <Link 
        href={"/"}
        className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
        >

          <IoTicketOutline size={30} className='text-black'/>
          <span className='ml-3 text-xl text-black'>Ordenes</span>

        </Link>

        {/* Account Login */}
        <Link 
        href={"/"}
        className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
        >

          <IoLogInOutline size={30} className='text-black'/>
          <span className='ml-3 text-xl text-black'>Salir</span>

        </Link>

        {/* Separador */}
        <div className='w-full h-px bg-gray-200 my-10'></div>

        <Link 
        href={"/"}
        className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
        >

          <IoShirtOutline size={30} className='text-black'/>
          <span className='ml-3 text-xl text-black'>Productos</span>

        </Link>

        <Link 
        href={"/"}
        className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
        >

          <IoTicketOutline size={30} className='text-black'/>
          <span className='ml-3 text-xl text-black'>Ordenes</span>

        </Link>


        <Link 
        href={"/"}
        className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
        >

          <IoPeopleOutline size={30} className='text-black'/>
          <span className='ml-3 text-xl text-black'>Clientes</span>

        </Link>


      </nav>

    </div>
  )
}

export default SideMenu