import { FaWhatsapp } from 'react-icons/fa'
import jovany from '../assets/imgs/agents/jovany.jpg'
import sofia from '../assets/imgs/agents/sofia.jpg'
import denisse from '../assets/imgs/agents/denisse.jpg'

const agents = [
  {
    name: "Jovany Francisco Ramirez",
    role: "Asesor de ventas",
    phone: "6671234567",
    image: jovany
  },
  {
    name: "Ana Sofia Soto",
    role: "Asesora de ventas",
    phone: "6641170812",
    image: sofia
  },
  {
    name: "Denisse Soto Gonzalez",
    role: "Asesora de ventas",
    phone: "6641694465",
    image: denisse
  }
]

export default function Agents() {
    return (
      <section className="max-w-7xl mx-auto py-20 px-6 text-center">
        
        <h2 className="text-4xl font-semibold mb-4">
          Nuestros asesores
        </h2>

        <p className="text-gray-500 mb-12">
          Te acompañamos en todo el proceso, desde la idea hasta tu cabaña terminada.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {agents.map((agent, index) => (
            <div
              key={index}
              className="group rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-medium">
                  {agent.name}
                </h3>

                <p className="text-gray-500 text-sm mb-3">
                  {agent.role}
                </p>

                <a
                  href={`https://api.whatsapp.com/send?phone=521${agent.phone}&text=Hola%2C%20estoy%20visitando%20su%20p%C3%A1gina%20web%20y%20me%20interesa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20modelos%20de%20caba%C3%B1as%20y%20el%20proceso%20de%20construcci%C3%B3n.%20%C2%BFPodr%C3%ADan%20orientarme%20por%20favor%3F`}
                  target="_blank"
                  rel="noopener noreferrer"    
                  aria-label="Abrir chat de WhatsApp" 
                  className="flex justify-center items-center gap-2 p-2 rounded-lg font-semibold transition duration-300 text-white bg-green-500">
                  <FaWhatsapp size={25}/>
                  Contactame
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
}