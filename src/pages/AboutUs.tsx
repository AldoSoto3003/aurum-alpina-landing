import video from "../assets/videos/isv.mp4";

const STATS = [
  { value: "100%", label: "Personalizado" },
  { value: "Llave", label: "en mano" },
];

export default function AboutUs() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=DM+Sans:wght@300;400;500&display=swap');

        .about-section {
          padding: 110px 6vw;
          background: #fff;
          font-family: 'DM Sans', sans-serif;
        }

        .about-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 64px;
          align-items: center;
        }
        @media (min-width: 1024px) {
          .about-inner {
            grid-template-columns: 1fr 1fr;
            gap: 96px;
          }
        }

        /* ── Video side ── */
        .about-media {
          position: relative;
          order: -1;
        }
        @media (min-width: 1024px) {
          .about-media { order: 0; }
        }

        /* Decorative blue square behind video */
        .about-media::before {
          content: '';
          position: absolute;
          top: -20px; left: -20px;
          width: 55%; height: 55%;
          background: #e8f0fc;
          border-radius: 3px;
          z-index: 0;
        }

        /* Counter badge */
        .about-media::after {
          content: '— ISV';
          position: absolute;
          bottom: 24px; left: -16px;
          background: #004aa6;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 10px 18px;
          border-radius: 3px;
          z-index: 2;
        }

        .about-video-wrap {
          position: relative;
          z-index: 1;
          border-radius: 4px;
          overflow: hidden;
          box-shadow: 0 32px 64px rgba(26,38,64,0.14);
        }

        .about-video {
          display: block;
          width: 100%;
          height: auto;
          max-height: 580px;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .about-video-wrap:hover .about-video {
          transform: scale(1.03);
        }

        /* ── Text side ── */
        .about-content {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .about-eyebrow {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #004aa6;
          margin-bottom: 20px;
        }

        .about-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.6rem, 4.5vw, 3.8rem);
          font-weight: 300;
          line-height: 1.05;
          color: #1a2640;
          margin: 0 0 32px;
        }
        .about-title em {
          font-style: italic;
          font-weight: 400;
        }

        .about-divider {
          width: 40px;
          height: 1px;
          background: #004aa6;
          margin-bottom: 28px;
        }

        .about-text {
          font-size: 15px;
          font-weight: 300;
          color: #4a5a70;
          line-height: 1.8;
          margin: 0 0 20px;
        }
        .about-text:last-of-type { margin-bottom: 0; }

        /* ── Stats row ── */
        .about-stats {
          display: flex;
          gap: 0;
          margin-top: 48px;
          border-top: 1px solid #eef1f5;
          padding-top: 32px;
        }

        .about-stat {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding-right: 24px;
          border-right: 1px solid #eef1f5;
        }
        .about-stat:last-child {
          border-right: none;
          padding-right: 0;
          padding-left: 24px;
        }
        .about-stat:not(:first-child):not(:last-child) {
          padding-left: 24px;
        }

        .stat-val {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          font-weight: 300;
          color: #1a2640;
          line-height: 1;
        }
        .stat-lbl {
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #8a9ab5;
        }

        /* ── CTA link ── */
        .about-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 36px;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.05em;
          color: #fff;
          background: #004aa6;
          text-decoration: none;
          padding: 13px 26px;
          border-radius: 3px;
          width: fit-content;
          transition: background 0.2s, transform 0.2s;
        }
        .about-cta:hover {
          background: #003880;
          transform: translateY(-2px);
        }
        .about-cta svg { transition: transform 0.2s; }
        .about-cta:hover svg { transform: translateX(3px); }
      `}</style>

      <section id="Nosotros" className="about-section">
        <div className="about-inner">

          {/* Video */}
          <div className="about-media">
            <div className="about-video-wrap">
              <video
                src={video}
                autoPlay
                muted
                loop
                playsInline
                className="about-video"
              />
            </div>
          </div>

          {/* Content */}
          <div className="about-content">
            <p className="about-eyebrow">Sobre nosotros</p>

            <h2 className="about-title">
              Construimos el <em>refugio</em><br />que siempre imaginaste
            </h2>

            <div className="about-divider" />

            <p className="about-text">
              Somos una empresa especializada en la construcción de cabañas
              personalizadas. Tú pones el terreno, nosotros diseñamos y
              construimos un espacio único, funcional y duradero, adaptado
              completamente a tu estilo de vida.
            </p>

            <p className="about-text">
              Utilizamos materiales de alta calidad, procesos eficientes
              y un enfoque totalmente personalizado para que cada proyecto
              sea una inversión sólida y un lugar que realmente quieras habitar.
            </p>

            {/* Stats */}
            <div className="about-stats">
              {STATS.map(({ value, label }) => (
                <div key={label} className="about-stat">
                  <span className="stat-val">{value}</span>
                  <span className="stat-lbl">{label}</span>
                </div>
              ))}
            </div>

            <a href="#Modelos" className="about-cta">
              Ver modelos
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
