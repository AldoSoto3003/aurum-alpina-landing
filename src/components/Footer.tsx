import { FaFacebook, FaPhone } from "react-icons/fa";

const WA_LINK = 'https://api.whatsapp.com/send?phone=5216611722565&text=Hola%2C%20estoy%20visitando%20su%20p%C3%A1gina%20web%20y%20me%20interesa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20modelos%20de%20caba%C3%B1as%20y%20el%20proceso%20de%20construcci%C3%B3n.%20%C2%BFPodr%C3%ADan%20orientarme%20por%20favor%3F'
const FB_LINK  = 'https://www.facebook.com/profile.php?id=100063776591871'

const NAV_LINKS = [
  { label: 'Inicio',    href: '#Inicio'    },
  { label: 'Nosotros',  href: '#Nosotros'  },
  { label: 'Cabañas',   href: '#Modelos'   },
]

export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=DM+Sans:wght@300;400;500&display=swap');

        .footer-root {
          background: #1a2640;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* Subtle grid texture */
        .footer-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        /* Blue glow bottom-right */
        .footer-root::after {
          content: '';
          position: absolute;
          bottom: -100px; right: -80px;
          width: 380px; height: 380px;
          background: radial-gradient(circle, rgba(0,74,166,0.15) 0%, transparent 70%);
          pointer-events: none;
        }

        .footer-top {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 6vw 64px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 56px;
        }
        @media (min-width: 768px) {
          .footer-top {
            grid-template-columns: 1.6fr 1fr 1fr;
            gap: 48px;
          }
        }

        /* ── Brand column ── */
        .footer-brand {}

        .footer-logo {
          width: 72px;
          margin-bottom: 24px;
          opacity: 0.9;
          filter: brightness(0) invert(1);
        }

        .footer-tagline {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.2rem;
          font-weight: 300;
          line-height: 1.5;
          color: rgba(255,255,255,0.7);
          max-width: 260px;
          margin: 0 0 28px;
        }
        .footer-tagline em {
          font-style: italic;
          color: rgba(255,255,255,0.9);
        }

        .footer-social {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .footer-social-link {
          width: 36px; height: 36px;
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
        .footer-social-link:hover {
          border-color: #004aa6;
          color: #fff;
          background: #004aa6;
        }

        /* ── Nav column ── */
        .footer-col-title {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #4d8fd4;
          margin-bottom: 20px;
        }

        .footer-nav {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-nav a {
          font-size: 13px;
          font-weight: 300;
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          transition: color 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .footer-nav a::before {
          content: '';
          display: block;
          width: 14px; height: 1px;
          background: #004aa6;
          opacity: 0;
          transition: opacity 0.2s, transform 0.2s;
          transform: translateX(-4px);
          flex-shrink: 0;
        }
        .footer-nav a:hover {
          color: #fff;
        }
        .footer-nav a:hover::before {
          opacity: 1;
          transform: translateX(0);
        }

        /* ── Contact column ── */
        .footer-address {
          font-size: 13px;
          font-weight: 300;
          line-height: 1.8;
          color: rgba(255,255,255,0.5);
          margin: 0 0 16px;
        }
        .footer-phone {
          font-size: 13px;
          font-weight: 400;
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 20px;
          transition: color 0.2s;
        }
        .footer-phone:hover { color: #fff; }

        .footer-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.05em;
          color: #fff;
          background: #004aa6;
          text-decoration: none;
          padding: 10px 20px;
          border-radius: 3px;
          transition: background 0.2s, transform 0.15s;
        }
        .footer-cta:hover {
          background: #003880;
          transform: translateY(-1px);
        }
        .footer-cta svg { transition: transform 0.2s; }
        .footer-cta:hover svg { transform: translateX(3px); }

        /* ── Bottom bar ── */
        .footer-bottom {
          position: relative;
          z-index: 1;
          border-top: 1px solid rgba(255,255,255,0.07);
        }
        .footer-bottom-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px 6vw;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }
        .footer-copy {
          font-size: 11px;
          font-weight: 300;
          color: rgba(255,255,255,0.28);
          letter-spacing: 0.04em;
        }
        .footer-copy strong {
          font-weight: 400;
          color: rgba(255,255,255,0.45);
        }
        .footer-made {
          font-size: 11px;
          font-weight: 300;
          color: rgba(255,255,255,0.2);
          letter-spacing: 0.04em;
        }
      `}</style>

      <footer className="footer-root">
        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">
            {/* <img src={logo} alt="ISV Cabañas" className="footer-logo" /> */}
            <p className="footer-tagline">
              Construimos el <em>refugio</em> que siempre imaginaste, donde tú eliges.
            </p>
            <div className="footer-social">
              <a href={FB_LINK} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer-social-link">
                <FaFacebook size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="footer-col-title">Navegación</p>
            <ul className="footer-nav">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="footer-col-title">Contacto</p>
            <p className="footer-address">
              Av. 20 de noviembre #12721<br />
              Col. 20 de noviembre, C.P. 22100<br />
              Tijuana, Baja California
            </p>
            <a href="tel:6611722565" className="footer-phone">
              <FaPhone/>
              (661) 172 2565
            </a>
            <br />
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="footer-cta">
              Cotizar ahora
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <p className="footer-copy">
              © {new Date().getFullYear()} <strong>Altum Alpina</strong>. Todos los derechos reservados.
            </p>
            <p className="footer-made">Tijuana, Baja California · México</p>
          </div>
        </div>
      </footer>
    </>
  )
}