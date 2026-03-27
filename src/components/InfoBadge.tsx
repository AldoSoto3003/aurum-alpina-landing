
export default function InfoBadge() {
  return (
    <section className="my-12 w-full bg-black py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

            {/* Texto principal */}
            <h2 className="text-white text-4xl md:text-5xl font-semibold leading-tight">
                Invierte en una cabaña en medio de la naturaleza
                <br />
                y genera ingresos con turismo rural.
            </h2>

            {/* Lado derecho */}
            <div className="flex items-center gap-5">

            {/* línea vertical */}
            <div className="w-1 h-16 bg-secondary"></div>

            {/* texto */}
            <div className="flex flex-col">
                <span className="text-white text-lg font-medium">
                    Explora el proyecto
                </span>

                <a
                    href="#proyectos"
                    className="text-secondary text-lg hover:underline"
                >
                    Conoce las cabañas
                </a>
            </div>

            </div>

        </div>
    </section>
  )
}
