import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CollapsibleExample from "./components/Navbar";

import RegistroPagina from "./pages/inscripciones/RegistroPagina";
import Indexlogin from "./pages/login/IndexLogin";

export default function App() {
  return (
    <div className="background-container">
      <BrowserRouter>
        <header>
          {/* acá tengo que agregar el componente navbar para que se repita todas las veces*/}
          <CollapsibleExample />
        </header>
        {/* todo lo que esté dentro de BrowserRouter y fuera de Routes se va a repetir en todas las páginas o url */}

        <Routes>
          {/* Formulario Registro */}
          <Route path="/" element={<Home />} />
          <Route path="/registro" element={<RegistroPagina />} />
          <Route path="/login" element={<Indexlogin />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
