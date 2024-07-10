'use client'
import React from 'react'
import { useCartSideState } from '@/store/ui/ui-store'
import { IoCloseOutline, IoPersonOutline, IoSearchOutline, IoTicketOutline, IoLogInOutline, IoShirtOutline, IoPeopleOutline } from 'react-icons/io5'
import Link from 'next/link'
import clsx from 'clsx';

  
const SideCartSection: React.FC = () => {

  const cartIsOpen = useCartSideState(state => state.cartIsOpen)
  const openSideCart = useCartSideState(state => state.openCart)
  const closeSideCart = useCartSideState(state => state.closeCart)



  return (
    <div>
      {/* Background Black */}
    {cartIsOpen && (
      <div  className='fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30'>
      </div>
      )}



      {/* Background Blur */}
      {cartIsOpen && (
        <div
        onClick={closeSideCart}
        className={clsx(
          "fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300")}>
        </div>
        
      )}

        {/* CART MENU */}
        <nav
      //hacer efecto de desplazamiento 
      className={clsx(
        `fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300`,
          {
            "translate-x-full": !cartIsOpen,
          })}>
        {/* Close Icon */}
        <IoCloseOutline 
        size={50} 
        className='absolute top-5 right-5 cursor-pointer text-black'
        onClick={  closeSideCart }
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
    // Background SideCart 
  )
}

export default SideCartSection