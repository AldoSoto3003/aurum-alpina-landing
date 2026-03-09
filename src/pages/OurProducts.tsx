import { useRef } from "react";
import CabinCard from "../components/CabinCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { cabins } from "../data/cabins";

export default function OurProducts() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const firstCard = container.querySelector("div > div") as HTMLElement;

    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth;
    const gap = 20; // gap-8 = 32px

    const scrollAmount = cardWidth + gap;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
};

  return (
    <section id="Modelos" className="mt-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-left mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Nuestros modelos de cabañas
        </h2>

        <p className="mt-4 text-gray-600 text-lg max-w-7xl mx-auto">
          Diseñadas para adaptarse a tu estilo de vida y al entorno de tu terreno.
        </p>
      </div>

      <div className="relative mx-auto max-w-400">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-[40%] -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full"
        >
          <FaArrowLeft size={20}/>
        </button>
        <div
          ref={scrollRef}
          className="overflow-x-auto no-scrollbar"
        >
          <div className="flex gap-8 pb-4">
            {cabins.map((cabin) => (
              <div key={cabin.name} className="min-w-[320px] md:min-w-110">
                <CabinCard cabin={cabin} />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-[40%] -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full"
        >
          <FaArrowRight size={20}/>
        </button>
      </div>
    </section>
  );
}