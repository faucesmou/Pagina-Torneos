import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CollapsibleExample from "./components/Navbar";

import RegistroPagina from "./pages/registro/RegistroPagina";
import IndexLogin from "./pages/login/IndexLogin";
import Novedades from "./pages/novedades/Novedades";
import Inscripciones from "./pages/inscripciones/Inscripciones";

import PrivateRoute from "./components/PrivateRoute";
import Perfil from "./pages/perfil/Perfil";





export default function App() {


  return (
    <div>
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
          <Route path="/login" element={<IndexLogin />} />
          <Route element={<PrivateRoute />}>
            <Route path="/novedades" element={<Novedades />} />
            <Route path="/" element={<Home />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/registro" element={<RegistroPagina />} />
            <Route path="/inscripciones" element={<Inscripciones />} />
          </Route>
        </Routes>
        {/* <PrivateRoute path="/novedades" element={<Novedades />} /> */}
      </BrowserRouter>
    </div>
  );
}
