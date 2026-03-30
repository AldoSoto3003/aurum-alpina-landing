import { FaWhatsapp } from 'react-icons/fa'
import jovany  from '../assets/imgs/agents/jovany.jpg'
import sofia   from '../assets/imgs/agents/sofia.jpeg'
import denisse from '../assets/imgs/agents/denisse.jpeg'

const WA_MESSAGE = encodeURIComponent(
  'Hola, estoy visitando su página web y me interesa obtener más información sobre sus modelos de cabañas y el proceso de construcción. ¿Podrían orientarme por favor?'
)

const agents = [
  { name: "Jovany Francisco Ramirez", role: "Asesor de ventas",   phone: "6671234567", image: jovany  },
  { name: "Ana Sofía Soto",           role: "Asesora de ventas",  phone: "6641170812", image: sofia   },
  { name: "Denisse Soto González",    role: "Asesora de ventas",  phone: "6641694465", image: denisse },
]

export default function Agents() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=DM+Sans:wght@300;400;500&display=swap');

        .agents-section {
          padding: 110px 6vw;
          background: #f5f7fa;
          font-family: 'DM Sans', sans-serif;
        }

        /* ── Header ── */
        .agents-header {
          max-width: 1200px;
          margin: 0 auto 64px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0;
        }

        .agents-eyebrow {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #004aa6;
          margin-bottom: 16px;
        }

        .agents-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 3.8vw, 3rem);
          font-weight: 300;
          line-height: 1.1;
          color: #1a2640;
          margin: 0 0 16px;
        }
        .agents-title em {
          font-style: italic;
          font-weight: 400;
        }

        .agents-subtitle {
          font-size: 14px;
          font-weight: 300;
          color: #8a9ab5;
          line-height: 1.7;
          max-width: 400px;
          margin: 0;
        }

        /* ── Grid ── */
        .agents-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 2px;
        }
        @media (min-width: 768px) {
          .agents-grid { grid-template-columns: repeat(3, 1fr); }
        }

        /* ── Card ── */
        .agent-card {
          position: relative;
          background: #fff;
          overflow: hidden;
          cursor: pointer;
        }

        /* Image container */
        .agent-img-wrap {
          position: relative;
          overflow: hidden;
          aspect-ratio: 3/4;
        }
        @media (min-width: 768px) {
          .agent-img-wrap { aspect-ratio: 4/5; }
        }

        .agent-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
          transition: transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94);
          filter: grayscale(15%);
        }
        .agent-card:hover .agent-img {
          transform: scale(1.06);
          filter: grayscale(0%);
        }

        /* Dark gradient overlay always present, stronger on hover */
        .agent-img-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(26,38,64,0.88) 0%,
            rgba(26,38,64,0.3)  45%,
            transparent         75%
          );
          transition: opacity 0.4s;
        }

        /* Info overlay — sits inside img-wrap, above gradient */
        .agent-info {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 28px 24px;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 4px;
          transform: translateY(0);
          transition: transform 0.4s cubic-bezier(0.4,0,0.2,1);
        }

        .agent-index {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.15em;
          color: rgba(255,255,255,0.45);
          margin-bottom: 6px;
        }

        .agent-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.35rem;
          font-weight: 300;
          color: #fff;
          line-height: 1.2;
          margin: 0;
        }

        .agent-role {
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
        }

        /* CTA — always visible */
        .agent-cta-wrap {
          padding: 20px 24px 24px;
          background: #fff;
        }

        .agent-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          width: 100%;
          padding: 12px 20px;
          border-radius: 3px;
          background: #25D366;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.04em;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s;
        }
        .agent-cta:hover {
          background: #1da952;
          transform: translateY(-1px);
        }

        @media (max-width: 767px) {
          .agent-img-wrap { aspect-ratio: 3/3.5; }
        }
      `}</style>

      <section className="agents-section">

        {/* Header */}
        <div className="agents-header">
          <p className="agents-eyebrow">Nuestro equipo</p>
          <h2 className="agents-title">
            Asesores <em>listos</em> para ayudarte
          </h2>
          <p className="agents-subtitle">
            Te acompañamos en todo el proceso, desde la primera idea hasta tu cabaña terminada.
          </p>
        </div>

        {/* Grid */}
        <div className="agents-grid">
          {agents.map((agent, i) => (
            <div key={i} className="agent-card">

              {/* Photo + overlay info */}
              <div className="agent-img-wrap">
                <img src={agent.image} alt={agent.name} className="agent-img" />

                <div className="agent-info">
                  <span className="agent-index">0{i + 1}</span>
                  <h3 className="agent-name">{agent.name}</h3>
                  <span className="agent-role">{agent.role}</span>
                </div>
              </div>

              {/* WhatsApp CTA — reveals on hover (desktop) / always visible (mobile) */}
              <div className="agent-cta-wrap">
                <a
                  href={`https://api.whatsapp.com/send?phone=521${agent.phone}&text=${WA_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Contactar a ${agent.name} por WhatsApp`}
                  className="agent-cta"
                >
                  <FaWhatsapp size={17} />
                  Contactar por WhatsApp
                </a>
              </div>

            </div>
          ))}
        </div>

      </section>
    </>
  )
}