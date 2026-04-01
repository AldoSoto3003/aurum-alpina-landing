import logo from '/logo_isv.png'
import '../assets/css/loader.css'

export default function Loader() {
  return (
    <>
      <div className="loader-root fixed inset-0 bg-white flex flex-col items-center justify-center z-50 gap-10">

        {/* Logo con breath */}
        <img
          src={logo}
          alt="Cargando..."
          className="loader-logo w-40 select-none"
        />

        {/* Línea de progreso pulsante */}
        <div className="w-16 h-px bg-[#dde3eb] relative overflow-hidden rounded-full">
          <div className="loader-line absolute left-0 top-0 h-full bg-[#004aa6] rounded-full" />
        </div>

      </div>
    </>
  )
}