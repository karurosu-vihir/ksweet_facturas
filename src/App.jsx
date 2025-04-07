import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PaginaBase from "./pages/PaginaBase"
import Page404 from "./pages/Page404"
import Cotizacion from "./pages/cotizacion"


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PaginaBase/>}></Route>
          <Route path="/cotizacion" element={<Cotizacion/>}></Route>
          {/* <Route path="/menu" element={<Menu/>}></Route> */}
          <Route path="*" element={<Page404/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
