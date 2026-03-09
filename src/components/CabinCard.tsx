import { useEffect, useState } from "react";
import type { Cabin } from "../interfaces/cabain.interface";
import { Link } from "react-router-dom";

export default function CabinCard({ cabin }: { cabin: Cabin }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === cabin.images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [cabin.images.length]);

  return (
    <div className="relative h-100 md:h-150 group overflow-hidden rounded-2xl shadow-lg">
      {cabin.images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={cabin.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700
          ${index === current ? "opacity-100" : "opacity-0"}`}
        />
      ))}

      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />

      <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
        <h3 className="text-3xl font-semibold">{cabin.name}</h3>
        <p className="mt-3 text-white/90">{cabin.description}</p>
        <p className="mt-3 text-base text-white font-semibold">Construcción: {cabin.size}</p>
        <p className="mt-3 text-base text-white font-semibold">Inversión: ${cabin.price.toLocaleString()} MXN</p>

        <Link
          to={`/cabanas/${cabin.slug}`}
          className="mt-6 w-fit bg-white text-black px-5 py-2 rounded-full font-medium hover:scale-105 transition">
          Ver detalles
        </Link>
      </div>

    </div>
  );
}