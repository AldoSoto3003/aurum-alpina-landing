import video from "../assets/videos/isv.mp4"

export default function AboutUs() {
  
  return (
    <section id="Nosotros" className="my-10 p-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2">
          <div className="px-6 py-10 md:px-14 md:py-14 flex items-center md:order-2">
            <div className="max-w-xl">
                <h2 className="font-fraunces text-5xl leading-none md:text-6xl text-[#241a1a]">
                    Sobre<br/> nosotros
                </h2>

            <p className="mt-6 text-lg leading-8 text-[#2d2d2d]">
                Somos una empresa especializada en la construcción de cabañas 
                personalizadas. Tú pones el terreno, nosotros diseñamos y 
                construimos un espacio único, funcional y duradero, adaptado 
                completamente a tu estilo de vida.
            </p>
            <p className="mt-6 text-lg leading-8 text-[#2d2d2d]">
                Utilizamos materiales de alta calidad, procesos eficientes 
                y un enfoque totalmente personalizado para que cada proyecto 
                sea una inversión sólida y un lugar que realmente quieras habitar.
            </p>
            </div>
          </div>

          <div className="relative">
            <div className="flex justify-center items-center h-full">
              <video
              src={video}
              autoPlay
              muted
              loop
              playsInline
              className="h-auto md:max-h-160 rounded-2xl shadow-2xl object-cover hover:scale-105 transition-transform duration-500"
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
