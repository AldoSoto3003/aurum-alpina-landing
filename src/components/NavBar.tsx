import { useEffect, useState } from 'react';

import { IoMdCloseCircleOutline } from 'react-icons/io';
import { RxHamburgerMenu } from "react-icons/rx";

import logo from '/logo_isv.png'
import { FaFacebook } from 'react-icons/fa';

export default function NavBar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const waLink = 'https://api.whatsapp.com/send?phone=5216611722565&text=Hola%2C%20estoy%20visitando%20su%20p%C3%A1gina%20web%20y%20me%20interesa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20modelos%20de%20caba%C3%B1as%20y%20el%20proceso%20de%20construcci%C3%B3n.%20%C2%BFPodr%C3%ADan%20orientarme%20por%20favor%3F';

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    },[])
    return (
        <header className={`fixed top-0 left-0 py-5 w-full z-50 transition-colors duration-300 
            ${scrolled ? "shadow-lg bg-white" : "bg-transparent"}`}>
            <nav className='w-full flex items-center justify-between md:px-10 py-2'>
                <div className='px-5'>
                    <img src={logo} alt="logo" className='w-20'/>
                </div>
                <div className={`text-base  px-10 hidden md:flex items-center gap-5 ${scrolled ? "text-black" : "text-white"}`}>
                    <a href="#Inicio">Inicio</a>
                    <a href="#Nosotros">Nosotros</a>
                    <a href="#Modelos">Cabañas</a>
                    <a href="#Contacto" className='px-6 py-2 rounded-lg text-white bg-primary'>Contacto</a>
                    <div className='flex gap-2'>
                      <div className='flex items-center justify-center gap-2'>
                        <a
                          href="https://www.facebook.com/profile.php?id=100063776591871"
                          target="_blank"
                          aria-label="Instagram"
                          className="text-white/80 hover:text-white transition"
                        >
                          <FaFacebook size={35} className='text-secondary'/>
                        </a>
                      </div>
                    </div>
                </div>
                <button onClick={() => setOpen(!open)} className='md:hidden '>
                    <RxHamburgerMenu className={`${scrolled ? "text-black" : "text-white"} text-3xl mr-10`}/>
                </button>
                <div className={`fixed top-0 left-0 w-full h-dvh transform transition-transform duration-600 bg-white
                    ${open ? "translate-y-0" : "translate-y-full"}`}
                >
                    <div className="flex justify-between p-6 ">
                        <img src="logo.png" alt="" className="w-20 pt-5"/>
                        <button onClick={() => setOpen(false)} className="text-2xl hover:cursor-pointer">
                            <IoMdCloseCircleOutline size={35} className='text-primary'/>
                        </button>
                    </div>
                    <ul className="flex flex-col gap-4 p-10 text-center text-lg">
                        <a href="#Inicio" className="text-xl" onClick={() => setOpen(false)}>Inicio</a>
                        <a href="#Nosotros" className="text-xl" onClick={() => setOpen(false)}>Nosotros</a>
                        <a href="#Productos" className="text-xl" onClick={() => setOpen(false)}>Productos</a>
                        <a href="#Eventos" className="text-xl" onClick={() => setOpen(false)}>Eventos</a>
                        <button className="py-2 text-2xl rounded-lg text-white bg-primary" onClick={() => setOpen(false)}>
                            <a
                                href={waLink}
                                target="_blank"
                                rel="noopener noreferrer"    
                                aria-label="Abrir chat de WhatsApp"
                            >
                                Contacto
                            </a>
                        </button>
                    </ul>
                    <div className='flex items-center justify-center gap-2'>
                        <a
                          href="https://www.facebook.com/profile.php?id=100063776591871"
                          target="_blank"
                          aria-label="Instagram"
                          className="text-white/80 hover:text-white transition"
                        >
                          <FaFacebook size={35} className='text-primary'/>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    )
}
