import { useParams, useNavigate } from "react-router-dom"
import { cabins } from "../data/cabins"
import { useState } from "react"

import '../assets/css/cabanaDetalle.css'

export default function CabinDetails() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const cabin = cabins.find(c => c.slug === slug)
  const [current, setCurrent] = useState(0)
  const [lightbox, setLightbox] = useState<number | null>(null)

  if (!cabin) return (
    <div style={{ padding: "120px 6vw", textAlign: "center", fontFamily: "'DM Sans', sans-serif", color: "#8a9ab5" }}>
      Cabaña no encontrada
    </div>
  )

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    setCurrent(Math.round(el.scrollLeft / el.clientWidth))
  }
  const WA_MESSAGE = encodeURIComponent(
  `Hola, estoy visitando su página web y me interesa la cabaña *${cabin.name}* (${cabin.size}, $${cabin.price.toLocaleString()} MXN). ¿Podrían darme más información sobre el proceso de construcción y los planes de financiamiento disponibles?`
)
  const WA_PHONE = "5216611722565"
  const waLink = `https://api.whatsapp.com/send?phone=${WA_PHONE}&text=${WA_MESSAGE}`

  return (
    <>
      {/* Lightbox */}
      {lightbox !== null && (
        <div className="cd-lightbox" onClick={() => setLightbox(null)}>
          <button className="cd-lightbox-close" onClick={() => setLightbox(null)}>✕</button>
          <button
            className="cd-lightbox-nav prev"
            onClick={e => { e.stopPropagation(); setLightbox(l => l !== null ? Math.max(0, l - 1) : 0) }}
          >
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none"><path d="M8 2L2 8l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <img src={cabin.images[lightbox]} alt={`Imagen ${lightbox + 1}`} onClick={e => e.stopPropagation()} />
          <button
            className="cd-lightbox-nav next"
            onClick={e => { e.stopPropagation(); setLightbox(l => l !== null ? Math.min(cabin.images.length - 1, l + 1) : 0) }}
          >
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none"><path d="M2 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      )}

      <div className="cd-root">

        {/* Back */}
        <button className="cd-back" onClick={() => navigate(-1)}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M10 2L5 7l5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Volver
        </button>

        {/* Header */}
        <div className="cd-header">
          <p className="cd-eyebrow">Cabaña disponible</p>
          <h1 className="cd-title">{cabin.name}</h1>
          <p className="cd-desc">{cabin.description}</p>
        </div>

        {/* Gallery mobile */}
        <div className="cd-gallery-mobile">
          <span className="cd-gallery-counter">
            {String(current + 1).padStart(2, "0")} / {String(cabin.images.length).padStart(2, "0")}
          </span>
          <div className="cd-gallery-track" onScroll={handleScroll}>
            {cabin.images.map((img, i) => (
              <div key={i} className="cd-gallery-slide">
                <img src={img} alt={`Imagen ${i + 1}`} />
              </div>
            ))}
          </div>
          <div className="cd-gallery-dots">
            {cabin.images.map((_, i) => (
              <button key={i} className={`cd-dot${i === current ? " active" : ""}`} />
            ))}
          </div>
        </div>

        {/* Gallery desktop */}
        <div className="cd-gallery-desktop">
          {cabin.images.slice(0, 5).map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Imagen ${i + 1}`}
              onClick={() => setLightbox(i)}
              style={i === 0 ? { gridRow: "span 2" } : {}}
            />
          ))}
        </div>

        {/* Body */}
        <div className="cd-body">

          {/* Left */}
          <div className="cd-left">

            {/* Distribución */}
            <div className="cd-section">
              <p className="cd-section-eyebrow">Distribución</p>
              <h2 className="cd-section-title">Espacios de la cabaña</h2>
              <div className="cd-feature-grid">
                {cabin.distribution.map((item, i) => (
                  <div key={i} className="cd-feature-item">{item}</div>
                ))}
              </div>
            </div>

            <div className="cd-divider" />

            {/* Equipamiento */}
            <div className="cd-section">
              <p className="cd-section-eyebrow">Equipamiento</p>
              <h2 className="cd-section-title">Todo lo que necesitas</h2>
              <div className="cd-feature-grid">
                {cabin.equipment.map((item, i) => (
                  <div key={i} className="cd-feature-item">{item}</div>
                ))}
              </div>
            </div>

            <div className="cd-divider" />

            {/* Financiamiento */}
            <div className="cd-section">
              <p className="cd-section-eyebrow">Financiamiento</p>
              <h2 className="cd-section-title">Planes accesibles</h2>

              <div className="cd-price-grid">
                <div className="cd-price-box">
                  <p className="cd-price-label">Precio total</p>
                  <p className="cd-price-value">${cabin.price.toLocaleString()}</p>
                  <p className="cd-price-currency">MXN</p>
                </div>
                <div className="cd-price-box">
                  <p className="cd-price-label">Enganche</p>
                  <p className="cd-price-value">${cabin.financing.downPayment.toLocaleString()}</p>
                  <p className="cd-price-currency">MXN</p>
                </div>
              </div>

              <div className="cd-plans">
                {cabin.financing.plans.map((plan, i) => (
                  <div key={i} className="cd-plan-row">
                    <div>
                      <p className="cd-plan-name">{plan.label}</p>
                      {plan.note && <p className="cd-plan-note">{plan.note}</p>}
                    </div>
                    <p className="cd-plan-amount">
                      ${plan.amount.toLocaleString()} <span className="cd-plan-currency">MXN</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Aside */}
          <aside className="cd-aside">
            <div className="cd-card">

              <div className="cd-card-top">
                <p className="cd-card-badge">{cabin.size} construcción</p>
                <p className="cd-card-price">${cabin.price.toLocaleString()}</p>
                <p className="cd-card-price-sub">MXN · precio de construcción</p>
              </div>

              <div className="cd-card-body">
                
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir chat de WhatsApp"
                  className="cd-btn-secondary"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                  </svg>
                  Solicitar mas informacion
                </a>

                <div className="cd-card-divider" />

                <ul className="cd-guarantees">
                  {[
                    "Entrega en 4–6 meses",
                    "Garantía de construcción 5 años",
                    "Financiamiento flexible disponible",
                  ].map((item, i) => (
                    <li key={i} className="cd-guarantee">
                      <span className="cd-guarantee-dot" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </aside>

        </div>
      </div>
    </>
  )
}