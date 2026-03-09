import { useEffect, useState } from 'react'

interface Slide {
    id: number;
    title: string;
    subtitle: string;
    image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Diseño y construcción a la medida de tus necesidades",
    subtitle: "Solo necesitas el terreno. Nosotros construimos tu refugio ideal.",
    image: "src/assets/imgs/cabania_hero_1.jpg",
  },
  {
    id: 2,
    title: "Tu cabaña en medio de la naturaleza",
    subtitle: "Personalizamos cada detalle para que tu cabaña sea única.",
    image: "src/assets/imgs/cabania_hero_2.jpg",
  },
  {
    id: 3,
    title: "Invierte en tranquilidad",
    subtitle: "Convierte tu terreno en una propiedad rentable o tu escape perfecto.",
    image: "src/assets/imgs/cabania_hero_3.jpg",
  },
];

export default function Hero() {
    const waLink = 'https://api.whatsapp.com/send?phone=5216611722565&text=Hola%2C%20estoy%20visitando%20su%20p%C3%A1gina%20web%20y%20me%20interesa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20modelos%20de%20caba%C3%B1as%20y%20el%20proceso%20de%20construcci%C3%B3n.%20%C2%BFPodr%C3%ADan%20orientarme%20por%20favor%3F'
    const [ current, setCurrent ] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className='relative w-full h-screen overflow-hidden'>
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === current ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {/* Imagen */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Contenido */}
              <div className="absolute inset-0 top-60 flex flex-col justify-center items-center text-center px-6">
                <h1
                  className={`text-white text-4xl md:text-5xl font-bold max-w-4xl leading-tight transition-all
                              duration-1000 ease-out 
                              ${index === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-50"}`}
                >
                {slide.title}
              </h1>

                <p
                  className={`text-white/90 mt-6 text-lg md:text-xl max-w-2xl
                              transition-all duration-1000 delay-200 ease-out font-semibold
                              ${index === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-50"}`}
                >
                  {slide.subtitle}
                </p>

                <div className="mt-8 flex gap-4">
                  <a 
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"    
                    aria-label="Abrir chat de WhatsApp" 
                    className="bg-primary text-white px-6 py-3 rounded-full font-semibold transition hover:cursor-pointer hover:scale-120"
                  >
                    Cotizar ahora
                  </a>

                  <a
                    href='#Modelos' 
                    className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition hover:cursor-pointer hover:scale-120">
                    Ver modelos
                  </a>
                </div>
              </div>
            </div>
          ))}
          {/* Indicadores */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 md:w-5 md:h-5 rounded-full transition hover:cursor-pointer hover:scale-150 ${
                  current === index ? "bg-primary scale-125" : "bg-primary/50"
                }`}
              />
            ))}
          </div>
        </section>
    )
}
