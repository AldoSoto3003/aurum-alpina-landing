import { useEffect, useState, useRef } from 'react'

import "../assets/css/hero.css"

import hero_1_1 from '../assets/imgs/cabaña_1_1.jpg'
import hero_2_2 from '../assets/imgs/cabania_2_2.jpg'
import hero3_3 from '../assets/imgs/cabaña_3_3.jpg'

interface Slide {
  id: number;
  label: string;
  title: string;
  subtitle: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    label: "Construcción",
    title: "Diseño y construcción a la medida de tus necesidades",
    subtitle: "Solo necesitas el terreno. Nosotros construimos tu refugio ideal.",
    image: hero_1_1,
  },
  {
    id: 2,
    label: "Personalización",
    title: "Tu cabaña en medio de la naturaleza",
    subtitle: "Personalizamos cada detalle para que tu cabaña sea única.",
    image: hero_2_2,
  },
  {
    id: 3,
    label: "Inversión",
    title: "Invierte en tranquilidad",
    subtitle: "Convierte tu terreno en una propiedad rentable o tu escape perfecto.",
    image: hero3,
  },
];

const WA_LINK = 'https://api.whatsapp.com/send?phone=5216611722565&text=Hola%2C%20estoy%20visitando%20su%20p%C3%A1gina%20web%20y%20me%20interesa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20modelos%20de%20caba%C3%B1as%20y%20el%20proceso%20de%20construcci%C3%B3n.%20%C2%BFPodr%C3%ADan%20orientarme%20por%20favor%3F'

export default function Hero() {
  const [current, setCurrent] = useState<number>(0);
  const [animKey, setAnimKey] = useState<number>(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (index: number) => {
    setCurrent(index);
    setAnimKey(k => k + 1);
  };

  const startInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent(prev => {
        const next = prev === slides.length - 1 ? 0 : prev + 1;
        setAnimKey(k => k + 1);
        return next;
      });
    }, 6000);
  };

  useEffect(() => {
    startInterval();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const handleDotClick = (index: number) => {
    goTo(index);
    startInterval();
  };

  return (
    <>
      <section id="Inicio" className="hero-root">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide${index === current ? ' active' : ''}`}
          >
            <img src={slide.image} alt={slide.title} />
            <div className="hero-overlay" />
          </div>
        ))}

        {/* Progress bar — re-mounts on each change via key */}
        <div key={`progress-${animKey}`} className="hero-progress" />

        {/* Content — re-mounts animations on slide change */}
        <div className="hero-content" key={`content-${animKey}`}>
          <span className="hero-label">0{current + 1} — {slides[current].label}</span>

          <h1 className="hero-title">
            {slides[current].title.split(' ').map((word, i, arr) =>
              i === Math.floor(arr.length / 2) - 1
                ? <em key={i}>{word} </em>
                : <span key={i}>{word} </span>
            )}
          </h1>

          <p className="hero-subtitle">{slides[current].subtitle}</p>

          <div className="hero-ctas">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir chat de WhatsApp"
              className="btn-primary"
            >
              Cotizar ahora
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            <a href="#Modelos" className="btn-ghost">
              Ver modelos
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 1v10M1 6l5 5 5-5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Side navigation — counter + dots */}
        <div className="hero-counter">
          <span className="hero-counter-num current">0{current + 1}</span>
          <span className="hero-counter-num">/</span>
          <span className="hero-counter-num">0{slides.length}</span>

          <div className="hero-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`hero-dot${index === current ? ' active' : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Ir a slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </section>
    </>
  );
}
