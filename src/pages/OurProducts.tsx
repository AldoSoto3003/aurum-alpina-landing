import { useRef, useState, useEffect } from "react";
import CabinCard from "../components/CabinCard";
import { cabins } from "../data/cabins";

export default function OurProducts() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft]   = useState(false);
  const [canRight, setCanRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 8);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);

    const firstCard = el.querySelector<HTMLElement>(".cabin-slide");
    if (!firstCard) return;
    const cardW = firstCard.offsetWidth + 24; // gap
    setActiveIndex(Math.round(el.scrollLeft / cardW));
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateState();
    el.addEventListener("scroll", updateState, { passive: true });
    window.addEventListener("resize", updateState);
    return () => {
      el.removeEventListener("scroll", updateState);
      window.removeEventListener("resize", updateState);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const firstCard = el.querySelector<HTMLElement>(".cabin-slide");
    if (!firstCard) return;
    const amount = firstCard.offsetWidth + 24;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  const scrollToIndex = (i: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const firstCard = el.querySelector<HTMLElement>(".cabin-slide");
    if (!firstCard) return;
    el.scrollTo({ left: i * (firstCard.offsetWidth + 24), behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=DM+Sans:wght@300;400;500&display=swap');

        .products-section {
          padding: 120px 0 100px;
          background: #fff;
          font-family: 'DM Sans', sans-serif;
          overflow: hidden;
        }

        /* ── Header ── */
        .products-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          padding: 0 6vw;
          margin-bottom: 56px;
          flex-wrap: wrap;
        }

        .products-header-left {}

        .products-eyebrow {
          font-size: 18px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #004aa6;
          margin-bottom: 14px;
        }

        .products-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 300;
          line-height: 1.1;
          color: #1a2640;
          margin: 0 0 16px;
          max-width: 520px;
        }
        .products-title em {
          font-style: italic;
          font-weight: 400;
        }

        .products-subtitle {
          font-size: 14px;
          font-weight: 300;
          color: #8a9ab5;
          line-height: 1.7;
          max-width: 380px;
          margin: 0;
        }

        /* Arrow buttons (desktop) */
        .products-arrows {
          display: flex;
          gap: 10px;
          flex-shrink: 0;
          align-self: flex-end;
          padding-bottom: 4px;
        }
        @media (max-width: 600px) { .products-arrows { display: none; } }

        .arrow-btn {
          width: 44px;
          height: 44px;
          border-radius: 3px;
          border: 1px solid #dde3eb;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, transform 0.2s, opacity 0.2s;
          color: #3a4a60;
        }
        .arrow-btn:hover:not(:disabled) {
          background: #004aa6;
          border-color: #004aa6;
          color: #fff;
          transform: translateY(-1px);
        }
        .arrow-btn:disabled {
          opacity: 0.28;
          cursor: default;
        }

        /* ── Track ── */
        .products-track-wrap {
          padding: 0 6vw;
          position: relative;
        }

        /* Fade edges */
        .products-track-wrap::before,
        .products-track-wrap::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          width: 6vw;
          z-index: 2;
          pointer-events: none;
        }
        .products-track-wrap::before {
          left: 0;
          background: linear-gradient(to right, #fff 30%, transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .products-track-wrap.faded-left::before { opacity: 1; }
        .products-track-wrap::after {
          right: 0;
          background: linear-gradient(to left, #fff 30%, transparent);
        }

        .products-track {
          display: flex;
          gap: 24px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          padding-bottom: 8px;
        }
        .products-track::-webkit-scrollbar { display: none; }

        .cabin-slide {
          flex-shrink: 0;
          width: clamp(280px, 76vw, 380px);
          scroll-snap-align: start;
        }
        @media (min-width: 768px) {
          .cabin-slide { width: clamp(320px, 30vw, 420px); }
        }

        /* ── Footer: count + dots ── */
        .products-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 32px 6vw 0;
        }

        .products-count {
          font-family: 'Cormorant Garamond', serif;
          font-size: 13px;
          font-weight: 300;
          color: #8a9ab5;
          letter-spacing: 0.05em;
        }
        .products-count strong {
          font-weight: 400;
          color: #1a2640;
        }

        .products-dots {
          display: flex;
          gap: 6px;
        }
        .dot {
          width: 24px;
          height: 2px;
          border-radius: 2px;
          background: #dde3eb;
          border: none;
          cursor: pointer;
          transition: background 0.25s, width 0.25s;
          padding: 0;
        }
        .dot.active {
          width: 40px;
          background: #004aa6;
        }

        /* ── Drag hint (mobile) ── */
        .drag-hint {
          display: none;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #b0bbcc;
        }
        @media (max-width: 767px) { .drag-hint { display: flex; } }
        .drag-hint svg { animation: nudge 1.8s ease-in-out infinite; }
        @keyframes nudge {
          0%,100% { transform: translateX(0); }
          50%      { transform: translateX(5px); }
        }
      `}</style>

      <section id="Modelos" className="products-section">

        {/* Header */}
        <div className="products-header">
          <div className="products-header-left">
            <p className="products-eyebrow">Nuestros modelos</p>
            <h2 className="products-title">
              Cabañas diseñadas para <em>tu</em> terreno
            </h2>
            <p className="products-subtitle">
              Cada modelo se adapta a tu estilo de vida y al entorno natural que te rodea.
            </p>
          </div>

          {/* Desktop arrows */}
          <div className="products-arrows">
            <button
              className="arrow-btn"
              onClick={() => scroll("left")}
              disabled={!canLeft}
              aria-label="Anterior"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              className="arrow-btn"
              onClick={() => scroll("right")}
              disabled={!canRight}
              aria-label="Siguiente"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel track */}
        <div className={`products-track-wrap${canLeft ? " faded-left" : ""}`}>
          <div ref={scrollRef} className="products-track">
            {cabins.map((cabin) => (
              <div key={cabin.name} className="cabin-slide">
                <CabinCard cabin={cabin} />
              </div>
            ))}
          </div>
        </div>

        {/* Footer: count + dots + drag hint */}
        <div className="products-footer">
          <p className="products-count">
            <strong>{String(activeIndex + 1).padStart(2, "0")}</strong>
            {" / "}
            {String(cabins.length).padStart(2, "0")}
          </p>

          <div className="products-dots">
            {cabins.map((_, i) => (
              <button
                key={i}
                className={`dot${i === activeIndex ? " active" : ""}`}
                onClick={() => scrollToIndex(i)}
                aria-label={`Ir a cabaña ${i + 1}`}
              />
            ))}
          </div>

          <div className="drag-hint">
            <span>Desliza</span>
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
              <path d="M1 5h12M9 1l4 4-4 4" stroke="#b0bbcc" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

      </section>
    </>
  );
}
