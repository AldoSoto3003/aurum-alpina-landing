import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import CabanaDetalle from "./pages/CabanaDetalle"
import ScrollToTop from "./components/ScrollToTop"
import { useEffect, useState } from "react"
import Loader from "./components/Loader"

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const waitForEverything = async () => {
      // 1. Esperar a que el DOM + imágenes + scripts estén listos
      if (document.readyState !== "complete") {
        await new Promise<void>(resolve => {
          window.addEventListener("load", () => resolve(), { once: true });
        });
      }

      // 2. Esperar a que las fuentes estén renderizadas
      if (document.fonts?.ready) {
        await document.fonts.ready;
      }

      // 3. Mínimo 800ms para evitar flash del loader
      await new Promise(resolve => setTimeout(resolve, 800));

      setIsLoading(false);
    };

    waitForEverything();
  }, []);

  if (isLoading) return <Loader />;

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cabanas/:slug" element={<CabanaDetalle />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App