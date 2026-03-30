export default function InfoBadge() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=DM+Sans:wght@300;400;500&display=swap');

        .infobadge-section {
          width: 100%;
          background: #1a2640;
          padding: 96px 6vw;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* Subtle background grid texture */
        .infobadge-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        /* Blue accent glow top-left */
        .infobadge-section::after {
          content: '';
          position: absolute;
          top: -120px; left: -80px;
          width: 420px; height: 420px;
          background: radial-gradient(circle, rgba(0,74,166,0.18) 0%, transparent 70%);
          pointer-events: none;
        }

        .infobadge-inner {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          align-items: center;
        }
        @media (min-width: 768px) {
          .infobadge-inner {
            grid-template-columns: 1fr 1fr;
            gap: 80px;
          }
        }

        /* ── Left: eyebrow + title ── */
        .infobadge-left {}

        .infobadge-eyebrow {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #4d8fd4;
          margin-bottom: 20px;
        }

        .infobadge-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 3.6vw, 3rem);
          font-weight: 300;
          line-height: 1.15;
          color: #fff;
          margin: 0;
        }
        .infobadge-title em {
          font-style: italic;
          font-weight: 400;
          color: #8fb8e8;
        }

        /* ── Right ── */
        .infobadge-right {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .infobadge-divider {
          width: 40px;
          height: 1px;
          background: #004aa6;
        }

        .infobadge-body {
          font-size: 14px;
          font-weight: 300;
          color: rgba(255,255,255,0.55);
          line-height: 1.75;
          max-width: 360px;
        }

        .infobadge-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.05em;
          color: #fff;
          text-decoration: none;
          background: #004aa6;
          padding: 13px 26px;
          border-radius: 3px;
          width: fit-content;
          transition: background 0.2s, transform 0.2s;
        }
        .infobadge-cta:hover {
          background: #003880;
          transform: translateY(-2px);
        }
        .infobadge-cta svg {
          transition: transform 0.2s;
        }
        .infobadge-cta:hover svg {
          transform: translateX(3px);
        }

        /* Stats row */
        .infobadge-stats {
          display: flex;
          gap: 32px;
          padding-top: 8px;
          flex-wrap: wrap;
        }
        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .stat-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          font-weight: 300;
          color: #fff;
          line-height: 1;
        }
        .stat-label {
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
        }
        .stat-sep {
          width: 1px;
          background: rgba(255,255,255,0.1);
          align-self: stretch;
          margin: 4px 0;
        }
      `}</style>

      <section className="infobadge-section">
        <div className="infobadge-inner">

          {/* Left */}
          <div className="infobadge-left">
            <p className="infobadge-eyebrow">Oportunidad de inversión</p>
            <h2 className="infobadge-title">
              Invierte en una cabaña en medio de la naturaleza
              {" "}y genera <em>ingresos</em> con turismo rural.
            </h2>
          </div>

          {/* Right */}
          <div className="infobadge-right">

            {/* Stats */}
            <div className="infobadge-stats">
              <div className="stat-item">
                <span className="stat-value">100%</span>
                <span className="stat-label">Personalizable</span>
              </div>
              <div className="stat-sep" />
              <div className="stat-item">
                <span className="stat-value">Llave</span>
                <span className="stat-label">en mano</span>
              </div>
            </div>

            <div className="infobadge-divider" />

            <p className="infobadge-body">
              Solo necesitas el terreno. Nosotros nos encargamos del diseño,
              la construcción y los acabados para que puedas empezar a rentarla
              desde el primer día.
            </p>

            <a href="#Modelos" className="infobadge-cta">
              Conoce las cabañas
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

          </div>
        </div>
      </section>
    </>
  );
}
