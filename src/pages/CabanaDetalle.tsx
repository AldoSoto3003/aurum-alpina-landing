import { useParams, useNavigate} from "react-router-dom"
import { cabins } from "../data/cabins"
import { TbPointFilled } from "react-icons/tb"
import { FaArrowLeft } from "react-icons/fa"
import { useState } from "react"

export default function CabinDetails() {
  const { slug } = useParams()
  const navigate = useNavigate()

  const cabin = cabins.find(c => c.slug === slug)

  if (!cabin) return <p>Cabaña no encontrada</p>

  const [current, setCurrent] = useState(1);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft
    const width = e.currentTarget.clientWidth
    const index = Math.round(scrollLeft / width) + 1
    setCurrent(index)
  }
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-6 text-black text-lg font-medium hover:underline hover:cursor-pointer"
        >
          <FaArrowLeft /> Volver
        </button>

        {/* Título  y descripcion */}
        <div className="my-10">
          <h1 className="text-4xl font-bold text-primary">
            Cabaña {cabin.name}
          </h1>
          <p className="text-xl">
            {cabin.description}
          </p>
        </div>

        {/* 📱 MOBILE */}
      <div className="relative md:hidden">
        {/* contador estilo Airbnb */}
        <div className="absolute top-3 right-3 bg-black/60 text-white px-4 py-2 rounded-lg backdrop-blur-sm z-10">
          {current}/{cabin.images.length}
        </div>

        {/* slider */}
        <div
          onScroll={handleScroll}
          className="-5 -mx-6 flex overflow-x-auto snap-x snap-mandatory scroll-smooth"
        >
          {cabin.images.map((img, index) => (
            <div key={index} className="min-w-full snap-center">
              <img
                src={img}
                alt={`image-${index}`}
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>

      </div>
        {/* Imagen principal */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 h-150 gap-2 overflow-hidden rounded-xl">
        {/* <div className="grid grid-cols-4 grid-rows-2 gap-2 h-105 overflow-hidden rounded-xl"> */}

            {/* Imagen principal */}
            <img
              src={cabin.images[0]}
              className="col-span-2 row-span-2 w-full h-full object-cover"
            />

            {/* Imágenes pequeñas */}
            <img
              src={cabin.images[1]}
              className="w-full h-full object-cover"
            />

            <img
              src={cabin.images[2]}
              className="w-full h-full object-cover"
            />

            <img
              src={cabin.images[3]}
              className="w-full h-full object-cover"
            />

          {/* última imagen con botón */}
          <div className="relative">
            <img
              src={cabin.images[4]}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between">
          
          {/* Contenido */}
          <div className="flex-1 grid md:grid-cols-2 gap-12 mt-12">
            {/* Distribución */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Distribución de la cabaña
              </h3>

              <ul className="space-y-2 text-gray-700">
                {cabin.distribution.map((distribution, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <TbPointFilled />
                    {distribution}
                  </li>
                ))}
              </ul>
            </div>

            {/* Equipamiento */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Equipada con
              </h3>

              <ul className="space-y-2 text-gray-700">
                {cabin.equipment.map( (equiment, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <TbPointFilled />
                    {equiment}
                  </li>
                ))}
              </ul>
            </div>

          </div>
          
          {/* Card de precio */}
          <div className="flex-1 my-10 bg-white shadow-xl rounded-xl p-6 h-fit">

            <h2 className="text-2xl font-semibold mb-4">
              Construcción de {cabin.size} m²
            </h2>

            <p className="text-3xl font-bold text-primary mb-6">
              $ {cabin.price.toLocaleString()} MXN
            </p>

            <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-green-900">
              Solicitar información
            </button>

          </div>
        </div>
        
        {/* Financiamiento */}
        <div className="mt-20 rounded-2xl">

          <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-12">
            Financiamiento
          </h2>

          {/* Precio y Enganche */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">

            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <p className="text-gray-500 text-sm mb-2">
                Precio de construcción
              </p>

              <p className="text-3xl font-bold text-primary">
                ${cabin.price.toLocaleString()} MXN
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <p className="text-gray-500 text-sm mb-2">
                Enganche
              </p>

              <p className="text-3xl font-bold text-primary">
                ${cabin.financing.downPayment.toLocaleString()} MXN
              </p>
            </div>

          </div>

          {/* Planes */}
          <div className="bg-white rounded-xl border divide-y">

            {cabin.financing.plans.map((plan, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-6"
              >

                <div>
                  <p className="font-medium text-gray-800">
                    {plan.label}
                  </p>

                  {plan.note && (
                    <p className="text-sm text-gray-500 mt-1">
                      {plan.note}
                    </p>
                  )}
                </div>

                <p className="text-lg font-semibold text-primary">
                  ${plan.amount.toLocaleString()} MXN
                </p>

              </div>
            ))}

          </div>
        </div>
      </div>
    </>
  )
}