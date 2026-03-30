import { useEffect, useState } from 'react';
import { FaFacebook } from 'react-icons/fa';
import logo from '/logo_isv.png';

const NAV_LINKS = [
  { label: 'Inicio',    href: '#Inicio'    },
  { label: 'Nosotros',  href: '#Nosotros'  },
  { label: 'Cabañas',   href: '#Modelos'   },
];

const WA_LINK = 'https://api.whatsapp.com/send?phone=5216611722565&text=Hola%2C%20estoy%20visitando%20su%20p%C3%A1gina%20web%20y%20me%20interesa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20modelos%20de%20caba%C3%B1as%20y%20el%20proceso%20de%20construcci%C3%B3n.%20%C2%BFPodr%C3%ADan%20orientarme%20por%20favor%3F';
const FB_LINK  = 'https://www.facebook.com/profile.php?id=100063776591871';

export default function NavBar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap');

        /* ── Header ── */
        .nav-header {
          position: fixed;
          top: 0; left: 0;
          width: 100%;
          z-index: 50;
          transition: background 0.4s cubic-bezier(0.4,0,0.2,1),
                      box-shadow 0.4s cubic-bezier(0.4,0,0.2,1),
                      padding 0.3s;
          padding: 22px 0;
          font-family: 'DM Sans', sans-serif;
        }
        .nav-header.scrolled {
          background: rgba(255,255,255,0.96);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 1px 0 rgba(0,0,0,0.08);
          padding: 14px 0;
        }

        /* ── Inner layout ── */
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 6vw;
        }

        /* ── Logo ── */
        .nav-logo {
          width: 72px;
          display: block;
          flex-shrink: 0;
        }

        /* ── Desktop links ── */
        .nav-links {
          display: none;
          align-items: center;
          gap: 36px;
        }
        @media (min-width: 768px) {
          .nav-links { display: flex; }
        }

        .nav-link {
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.04em;
          text-decoration: none;
          color: rgba(255,255,255,0.82);
          position: relative;
          transition: color 0.2s;
        }
        .nav-header.scrolled .nav-link {
          color: #3a4a60;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -3px; left: 0;
          width: 0; height: 1px;
          background: currentColor;
          transition: width 0.25s cubic-bezier(0.4,0,0.2,1);
        }
        .nav-link:hover { color: #fff; }
        .nav-header.scrolled .nav-link:hover { color: #004aa6; }
        .nav-link:hover::after { width: 100%; }

        /* ── CTA button ── */
        .nav-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-decoration: none;
          color: #fff;
          background: #004aa6;
          padding: 10px 22px;
          border-radius: 3px;
          transition: background 0.2s, transform 0.2s;
        }
        .nav-cta:hover {
          background: #003880;
          transform: translateY(-1px);
        }

        /* ── Facebook icon ── */
        .nav-fb {
          color: rgba(255,255,255,0.55);
          transition: color 0.2s;
          display: flex;
          align-items: center;
        }
        .nav-fb:hover { color: #fff; }
        .nav-header.scrolled .nav-fb { color: #8a9ab5; }
        .nav-header.scrolled .nav-fb:hover { color: #004aa6; }

        /* ── Hamburger ── */
        .nav-burger {
          display: flex;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
        @media (min-width: 768px) { .nav-burger { display: none; } }

        .burger-line {
          display: block;
          width: 22px;
          height: 1.5px;
          background: rgba(255,255,255,0.9);
          border-radius: 2px;
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1),
                      opacity 0.25s,
                      width 0.3s;
        }
        .nav-header.scrolled .burger-line { background: #1a2640; }
        .nav-burger.open .burger-line:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
        .nav-burger.open .burger-line:nth-child(2) { opacity: 0; width: 0; }
        .nav-burger.open .burger-line:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

        /* ── Mobile drawer ── */
        .nav-drawer {
          position: fixed;
          inset: 0;
          background: #fff;
          z-index: 49;
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          transition: transform 0.45s cubic-bezier(0.4,0,0.2,1);
        }
        .nav-drawer.open {
          transform: translateX(0);
        }

        .drawer-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 22px 6vw;
          border-bottom: 1px solid #f0f0f0;
        }

        .drawer-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 10vw;
          gap: 0;
        }

        .drawer-item {
          border-bottom: 1px solid #f5f5f5;
          opacity: 0;
          transform: translateX(20px);
          transition: opacity 0.35s, transform 0.35s;
        }
        .nav-drawer.open .drawer-item:nth-child(1) { opacity: 1; transform: none; transition-delay: 0.12s; }
        .nav-drawer.open .drawer-item:nth-child(2) { opacity: 1; transform: none; transition-delay: 0.18s; }
        .nav-drawer.open .drawer-item:nth-child(3) { opacity: 1; transform: none; transition-delay: 0.24s; }

        .drawer-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 22px 0;
          font-family: 'DM Sans', sans-serif;
          font-size: 1.5rem;
          font-weight: 300;
          color: #1a2640;
          text-decoration: none;
          transition: color 0.2s;
        }
        .drawer-link:hover { color: #004aa6; }
        .drawer-link svg { opacity: 0.3; }

        .drawer-footer {
          padding: 28px 10vw;
          display: flex;
          flex-direction: column;
          gap: 16px;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.35s 0.32s, transform 0.35s 0.32s;
        }
        .nav-drawer.open .drawer-footer {
          opacity: 1;
          transform: none;
        }

        .drawer-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-decoration: none;
          color: #fff;
          background: #004aa6;
          padding: 16px 24px;
          border-radius: 3px;
          transition: background 0.2s;
        }
        .drawer-cta:hover { background: #003880; }

        .drawer-social {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: #8a9ab5;
          font-size: 12px;
          letter-spacing: 0.06em;
        }
        .drawer-social a {
          color: #8a9ab5;
          transition: color 0.2s;
        }
        .drawer-social a:hover { color: #004aa6; }
      `}</style>

      <header className={`nav-header${scrolled ? ' scrolled' : ''}`}>
        <nav className="nav-inner">

          {/* Logo */}
          <a href="#Inicio">
            <img src={logo} alt="Logo" className="nav-logo" />
          </a>

          {/* Desktop nav */}
          <div className="nav-links">
            {NAV_LINKS.map(({ label, href }) => (
              <a key={href} href={href} className="nav-link">{label}</a>
            ))}

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir chat de WhatsApp"
              className="nav-cta"
            >
              Cotizar
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            <a href={FB_LINK} target="_blank" aria-label="Facebook" className="nav-fb">
              <FaFacebook size={18} />
            </a>
          </div>

          {/* Hamburger */}
          <button
            className={`nav-burger${open ? ' open' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          >
            <span className="burger-line" />
            <span className="burger-line" />
            <span className="burger-line" />
          </button>
        </nav>
      </header>

      {/* Mobile drawer — slides in from the right */}
      <div className={`nav-drawer${open ? ' open' : ''}`} aria-hidden={!open}>
        <div className="drawer-top">
          <a href="#Inicio" onClick={close}>
            <img src={logo} alt="Logo" style={{ width: 64 }} />
          </a>
          <button
            onClick={close}
            aria-label="Cerrar menú"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#8a9ab5', padding: 4 }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <div className="drawer-body">
          {NAV_LINKS.map(({ label, href }) => (
            <div key={href} className="drawer-item">
              <a href={href} className="drawer-link" onClick={close}>
                {label}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="drawer-footer">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="drawer-cta"
            onClick={close}
          >
            Cotizar ahora
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <div className="drawer-social">
            <span style={{ color: '#c0c8d4', fontSize: 11, letterSpacing: '0.1em' }}>SÍGUENOS</span>
            <a href={FB_LINK} target="_blank" aria-label="Facebook">
              <FaFacebook size={18} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
