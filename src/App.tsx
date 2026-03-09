import { BrowserRouter, Route, Routes, ScrollRestoration } from "react-router-dom"
import Home from "./pages/Home"
import CabanaDetalle from "./pages/CabanaDetalle"
import ScrollToTop from "./components/ScrollToTop"

function App() {

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
