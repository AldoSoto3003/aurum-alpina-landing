import { useParams, useNavigate } from "react-router-dom"
import { cabins } from "../data/cabins"
import { FaArrowLeft } from "react-icons/fa"
import { useState } from "react"

export default function CabinDetails() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const cabin = cabins.find(c => c.slug === slug)

  if (!cabin) return <p className="p-10 text-center text-gray-500">Cabaña no encontrada</p>

  const [current, setCurrent] = useState(1)

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft
    const width = e.currentTarget.clientWidth
    const index = Math.round(scrollLeft / width) + 1
    setCurrent(index)
  }

  return (
    <div className="max-w-6xl mx-auto px-5 py-8 pb-20">

      {/* Volver */}
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 mb-8 text-xs font-medium tracking-widest uppercase text-gray-400 hover:text-gray-800 transition-colors hover:cursor-pointer"
      >
        <FaArrowLeft className="text-[20px]" />
        Volver
      </button>

      {/* Encabezado */}
      <div className="mb-6">
        <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-gray-400 mb-2">
          Cabaña disponible
        </p>
        <h1
          className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900 mb-3"
          
        >
          {cabin.name}
        </h1>
        <p className="text-base text-gray-500 leading-relaxed max-w-xl">
          {cabin.description}
        </p>
      </div>

      {/* ── GALERÍA MÓVIL ── */}
      <div className="relative md:hidden mb-8">
        <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-3 py-1.5 rounded-lg backdrop-blur-sm z-10 tracking-wide">
          {current}/{cabin.images.length}
        </div>
        <div
          onScroll={handleScroll}
          className="-mx-5 flex overflow-x-auto snap-x snap-mandatory scroll-smooth"
        >
          {cabin.images.map((img, index) => (
            <div key={index} className="min-w-full snap-center">
              <img
                src={img}
                alt={`imagen-${index + 1}`}
                className="w-full h-72 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── GALERÍA DESKTOP ── */}
      <div className="hidden md:grid grid-cols-5 grid-rows-2 gap-1.5 h-140 rounded-2xl overflow-hidden mb-10">
        {/* Imagen principal grande */}
        <img
          src={cabin.images[0]}
          alt="imagen-1"
          className="col-span-3 row-span-2 w-full h-full object-cover"
        />
        {/* Imágenes secundarias */}
        {cabin.images.slice(1, 5).map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`imagen-${index + 2}`}
            className="col-span-1 w-full h-full object-cover"
          />
        ))}
      </div>

      {/* ── CUERPO ── */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 lg:items-start">

        {/* Columna izquierda */}
        <div className="order-2 md:order-1 flex-1 min-w-0">

          {/* Distribución */}
          <section>
            <p className="text-[10px] font-medium tracking-[0.16em] uppercase text-gray-400 mb-3">
              Distribución
            </p>
            <h2
              className="text-xl font-semibold text-gray-900 mb-4"
              
            >
              Espacios de la cabaña
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {cabin.distribution.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-3.5 py-2.5 bg-gray-50 rounded-lg border border-gray-100 text-sm text-gray-600"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </section>

          <hr className="my-8 border-gray-100" />

          {/* Equipamiento */}
          <section>
            <p className="text-[10px] font-medium tracking-[0.16em] uppercase text-gray-400 mb-3">
              Equipamiento
            </p>
            <h2
              className="text-xl font-semibold text-gray-900 mb-4"
              
            >
              Todo lo que necesitas
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {cabin.equipment.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-3.5 py-2.5 bg-gray-50 rounded-lg border border-gray-100 text-sm text-gray-600"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </section>

          <hr className="my-8 border-gray-100" />

          {/* Financiamiento */}
          <section>
            <p className="text-[10px] font-medium tracking-[0.16em] uppercase text-gray-400 mb-3">
              Financiamiento
            </p>
            <h2
              className="text-xl font-semibold text-gray-900 mb-5"
              
            >
              Planes accesibles
            </h2>

            {/* Precio y enganche */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-4">
                <p className="text-[11px] text-gray-400 uppercase tracking-wide mb-1.5">
                  Precio total
                </p>
                <p
                  className="text-2xl font-semibold text-gray-900"
                  
                >
                  ${cabin.price.toLocaleString()}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">MXN</p>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-4">
                <p className="text-[11px] text-gray-400 uppercase tracking-wide mb-1.5">
                  Enganche
                </p>
                <p
                  className="text-2xl font-semibold text-gray-900"
                  
                >
                  ${cabin.financing.downPayment.toLocaleString()}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">MXN</p>
              </div>
            </div>

            {/* Planes de pago */}
            <div className="border border-gray-100 rounded-xl overflow-hidden divide-y divide-gray-100">
              {cabin.financing.plans.map((plan, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between px-4 py-4"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {plan.label}
                    </p>
                    {plan.note && (
                      <p className="text-xs text-gray-400 mt-0.5">{plan.note}</p>
                    )}
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    ${plan.amount.toLocaleString()} <span className="text-gray-400 font-normal">MXN</span>
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* ── CARD DE PRECIO (sticky) ── */}
        <aside className="order-1 md:order-2 w-full lg:w-75 lg:sticky lg:top-8">
          <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">

            {/* Badge tamaño */}
            <div className="inline-flex items-center gap-2 text-[15px] font-medium tracking-widest uppercase text-primary bg-primary/10 px-3 py-1.5 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              {cabin.size} construcción
            </div>

            {/* Precio */}
            <p
              className="text-4xl font-semibold text-gray-900 leading-none mb-1"
              
            >
              ${cabin.price.toLocaleString()}
            </p>
            <p className="text-sm text-gray-400 mb-6">MXN · precio de construcción</p>

            {/* CTA principal */}
            <button className="w-full py-3.5 bg-primary hover:scale-110 transition-all duration-200 text-white text-sm font-medium tracking-widest uppercase rounded-xl mb-3">
              Solicitar información
            </button>

            {/* CTA secundario */}
            <button className="w-full py-3 border border-gray-200 text-gray-500 hover:text-gray-800 hover:border-gray-400 text-sm rounded-xl transition-colors">
              Agendar visita
            </button>

            <hr className="my-5 border-gray-100" />

            {/* Garantías */}
            <ul className="space-y-2.5">
              {[
                "Entrega en 4–6 meses",
                "Garantía de construcción 5 años",
                "Financiamiento flexible disponible",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2.5 text-xs text-gray-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </aside>

      </div>
    </div>
  )
}
