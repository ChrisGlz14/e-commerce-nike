'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { useMenuSideState } from '@/store/ui/ui-store'
import {
  IoCloseOutline, IoPersonOutline, IoSearchOutline, IoTicketOutline,
  IoLogInOutline, IoShirtOutline, IoPeopleOutline, IoChevronForwardOutline,
  IoArrowBackOutline,
} from 'react-icons/io5'
import clsx from 'clsx'

type View = 'main' | 'perfil' | 'ordenes' | 'salir' | 'productos' | 'ordenes-admin' | 'clientes'

interface SubView {
  title: string
  content: React.ReactNode
}

const subViewContent: Record<Exclude<View, 'main'>, SubView> = {
  perfil: {
    title: 'Perfil',
    content: (
      <div className="flex flex-col gap-3 pt-2">
        <Link href="/profile" className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
          <p className="font-semibold text-black">Ver perfil</p>
          <p className="text-sm text-gray-500 mt-1">Edita tu información personal</p>
        </Link>
        <Link href="/register" className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
          <p className="font-semibold text-black">Crear cuenta</p>
          <p className="text-sm text-gray-500 mt-1">Registrate como nuevo usuario</p>
        </Link>
        <Link href="/auth/login" className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
          <p className="font-semibold text-black">Iniciar sesión</p>
          <p className="text-sm text-gray-500 mt-1">Accede a tu cuenta</p>
        </Link>
      </div>
    ),
  },
  ordenes: {
    title: 'Mis Ordenes',
    content: (
      <div className="flex flex-col gap-3 pt-2">
        <Link href="/orders" className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
          <p className="font-semibold text-black">Todas las órdenes</p>
          <p className="text-sm text-gray-500 mt-1">Historial completo de compras</p>
        </Link>
        <Link href="/checkout" className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
          <p className="font-semibold text-black">Finalizar compra</p>
          <p className="text-sm text-gray-500 mt-1">Continúa con tu pedido</p>
        </Link>
      </div>
    ),
  },
  salir: {
    title: 'Sesión',
    content: (
      <div className="flex flex-col gap-3 pt-2">
        <div className="p-4 bg-gray-50 rounded-xl">
          <p className="font-semibold text-black">¿Deseas salir?</p>
          <p className="text-sm text-gray-500 mt-1">Cerrarás tu sesión actual</p>
        </div>
        <button className="w-full p-4 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-600 transition-all">
          Cerrar sesión
        </button>
        <Link href="/auth/login" className="w-full p-4 bg-gray-100 text-black font-semibold rounded-xl hover:bg-gray-200 transition-all text-center">
          Iniciar sesión
        </Link>
      </div>
    ),
  },
  productos: {
    title: 'Productos',
    content: (
      <div className="flex flex-col gap-3 pt-2">
        <Link href="/products" className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
          <p className="font-semibold text-black">Todos los productos</p>
          <p className="text-sm text-gray-500 mt-1">Catálogo completo</p>
        </Link>
        <Link href="/products/shoes" className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
          <p className="font-semibold text-black">Calzado</p>
          <p className="text-sm text-gray-500 mt-1">Zapatillas y sneakers</p>
        </Link>
        <Link href="/admin" className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
          <p className="font-semibold text-black">Administrar</p>
          <p className="text-sm text-gray-500 mt-1">Panel de administración</p>
        </Link>
      </div>
    ),
  },
  'ordenes-admin': {
    title: 'Órdenes (Admin)',
    content: (
      <div className="flex flex-col gap-3 pt-2">
        <Link href="/orders" className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
          <p className="font-semibold text-black">Ver todas las órdenes</p>
          <p className="text-sm text-gray-500 mt-1">Gestión de pedidos</p>
        </Link>
        <Link href="/admin" className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
          <p className="font-semibold text-black">Panel de admin</p>
          <p className="text-sm text-gray-500 mt-1">Administración general</p>
        </Link>
      </div>
    ),
  },
  clientes: {
    title: 'Clientes',
    content: (
      <div className="flex flex-col gap-3 pt-2">
        <Link href="/admin" className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
          <p className="font-semibold text-black">Gestionar clientes</p>
          <p className="text-sm text-gray-500 mt-1">Lista de usuarios registrados</p>
        </Link>
        <div className="p-4 bg-gray-50 rounded-xl">
          <p className="font-semibold text-black">Soporte</p>
          <p className="text-sm text-gray-500 mt-1">Atención al cliente</p>
        </div>
      </div>
    ),
  },
}

const menuItems: { view: Exclude<View, 'main'>; icon: React.ReactNode; label: string }[] = [
  { view: 'perfil', icon: <IoPersonOutline size={28} />, label: 'Perfil' },
  { view: 'ordenes', icon: <IoTicketOutline size={28} />, label: 'Ordenes' },
  { view: 'salir', icon: <IoLogInOutline size={28} />, label: 'Salir' },
]

const adminItems: { view: Exclude<View, 'main'>; icon: React.ReactNode; label: string }[] = [
  { view: 'productos', icon: <IoShirtOutline size={28} />, label: 'Productos' },
  { view: 'ordenes-admin', icon: <IoTicketOutline size={28} />, label: 'Ordenes' },
  { view: 'clientes', icon: <IoPeopleOutline size={28} />, label: 'Clientes' },
]

const SideMenu: React.FC = () => {
  const [activeView, setActiveView] = useState<View>('main')

  const menuIsOpen = useMenuSideState(state => state.menuIsOpen)
  const closeSideMenu = useMenuSideState(state => state.closeSideMenu)

  useEffect(() => {
    if (!menuIsOpen) setActiveView('main')
  }, [menuIsOpen])

  const goTo = (view: Exclude<View, 'main'>) => setActiveView(view)
  const goBack = () => setActiveView('main')

  const isSubView = activeView !== 'main'
  const currentSubView = isSubView ? subViewContent[activeView] : null

  return (
    <div>
      {/* Background Black */}
      {menuIsOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
      )}

      {/* Background Blur */}
      {menuIsOpen && (
        <div
          onClick={closeSideMenu}
          className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-blur-sm backdrop-filter"
        />
      )}

      {/* Side Menu */}
      <nav
        className={clsx(
          'fixed right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300 overflow-hidden',
          { 'translate-x-full': !menuIsOpen }
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 pb-0">
          {isSubView ? (
            <button
              onClick={goBack}
              className="flex items-center gap-2 text-black hover:text-gray-500 transition-colors"
            >
              <IoArrowBackOutline size={24} />
              <span className="text-base font-medium">Atrás</span>
            </button>
          ) : (
            <span className="text-lg font-semibold text-black">Menu</span>
          )}
          <IoCloseOutline
            size={40}
            className="cursor-pointer text-black hover:text-gray-500 transition-colors"
            onClick={closeSideMenu}
          />
        </div>

        {/* Sliding viewport container */}
        <div
          className={clsx(
            'flex w-[200%] h-full transition-transform duration-300 ease-in-out',
            { '-translate-x-1/2': isSubView }
          )}
        >
          {/* Main view */}
          <div className="w-1/2 px-5 overflow-y-auto">
            {/* Search */}
            <div className="relative mt-6">
              <IoSearchOutline size={20} className="absolute top-2 left-2 text-black" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 focus:outline-none focus:border-red-500 border-b-2 border-gray-200 rounded-md bg-gray-100 h-10 text-black"
              />
            </div>

            {/* User links */}
            <div className="mt-8 flex flex-col gap-1">
              {menuItems.map(({ view, icon, label }) => (
                <button
                  key={view}
                  onClick={() => goTo(view)}
                  className="flex items-center justify-between w-full p-3 hover:bg-gray-100 rounded-xl transition-all text-left"
                >
                  <div className="flex items-center gap-3 text-black">
                    {icon}
                    <span className="text-xl">{label}</span>
                  </div>
                  <IoChevronForwardOutline size={20} className="text-gray-400" />
                </button>
              ))}
            </div>

            {/* Separator */}
            <div className="w-full h-px bg-gray-200 my-6" />

            {/* Admin links */}
            <div className="flex flex-col gap-1">
              {adminItems.map(({ view, icon, label }) => (
                <button
                  key={view}
                  onClick={() => goTo(view)}
                  className="flex items-center justify-between w-full p-3 hover:bg-gray-100 rounded-xl transition-all text-left"
                >
                  <div className="flex items-center gap-3 text-black">
                    {icon}
                    <span className="text-xl">{label}</span>
                  </div>
                  <IoChevronForwardOutline size={20} className="text-gray-400" />
                </button>
              ))}
            </div>
          </div>

          {/* Sub view */}
          <div className="w-1/2 px-5 overflow-y-auto">
            {currentSubView && (
              <>
                <h2 className="text-2xl font-bold text-black mt-6 mb-4">{currentSubView.title}</h2>
                {currentSubView.content}
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  )
}

export { SideMenu }
