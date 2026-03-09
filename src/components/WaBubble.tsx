import { FaWhatsapp } from "react-icons/fa"

export default function BubbleWaButton(){
    const waLink = 'https://api.whatsapp.com/send?phone=5216611722565&text=Hola%2C%20estoy%20visitando%20su%20p%C3%A1gina%20web%20y%20me%20interesa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20modelos%20de%20caba%C3%B1as%20y%20el%20proceso%20de%20construcci%C3%B3n.%20%C2%BFPodr%C3%ADan%20orientarme%20por%20favor%3F';
    return(
        <a 
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"    
            aria-label="Abrir chat de WhatsApp"
            className="fixed bottom-4 right-4 z-100 rounded-full p-4 m-4 bg-green-500 text-white shadow-xl hover:opacity-50 focus:outline-none focus:ring-2 focus:ring-green-300"
        >
            <FaWhatsapp className="w-7 h-7"/>
        </a>
    )
}

