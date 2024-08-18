"use client";
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { AcmeLogo } from "./icon/AcmeLogo.jsx";
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    console.log(isOpen)
    return (
        <nav className="bg-white text-[#454545] uppercase">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-end h-24  justify-between">
                    <div className="flex w-full items-center justify-between">
                        <div className="flex-shrink-0">
                            {/* Aquí va tu logo o marca */}
                            <AcmeLogo />
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {/* Aquí van los elementos de tu navbar */}
                                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium">Inicio</a>
                                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium">Acerca de</a>
                                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium">Servicios</a>
                                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium">Contacto</a>
                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        {/* Botón de menú para pantallas pequeñas */}
                        <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Abrir menú principal</span>
                            {isOpen ? <XMarkIcon className="block h-6 w-6" /> : <Bars3Icon className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Menú para pantallas pequeñas, muestra u oculta basado en el estado del menú */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {/* Aquí van los elementos de tu navbar */}
                    <a href="#" className="block px-3 py-2 rounded-md text-base font-medium">Inicio</a>
                    <a href="#" className="block px-3 py-2 rounded-md text-base font-medium">Acerca de</a>
                    <a href="#" className="block px-3 py-2 rounded-md text-base font-medium">Servicios</a>
                    <a href="#" className="block px-3 py-2 rounded-md text-base font-medium">Contacto</a>
                </div>
            </div>
        </nav>
    );
}
