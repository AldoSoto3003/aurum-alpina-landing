import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-[#111111] text-white mt-5">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="tracking-widest text-sm font-semibold text-white/80">
              UBICACIÓN
            </h3>
            <div className="mt-6 space-y-8 text-white/90">
              <div>
                <p className="font-semibold">Tijuana, BC:</p>
                <p className="mt-2 text-white/70">
                  Avenida 20 de noviembre #12721, Col. 20 de noviembre C.P. 22100 Tijuana BC.
                </p>
                <p className="mt-2 text-white/70">Tel: (661) 172 2565</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center gap-6">
            <a
                href="https://www.facebook.com/profile.php?id=100063776591871"
                target="_blank"
                aria-label="Facebook"
                className="text-white/80 hover:text-white transition"
            >
                <FaFacebook size={40}/>
            </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="flex mx-auto max-w-7xl px-6 py-6 justify-between">
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()}, Altum Alpina
          </p>
        </div>
      </div>
    </div>
  );
}
