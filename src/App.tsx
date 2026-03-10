import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import CabanaDetalle from "./pages/CabanaDetalle"
import ScrollToTop from "./components/ScrollToTop"
import { useEffect, useState } from "react"
import Loader from "./components/Loader"

function App() {
  const [isLoading, setIsLoading] = useState(true);
 
  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (isLoading) return <Loader />;
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cabanas/:slug" element={<CabanaDetalle/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
