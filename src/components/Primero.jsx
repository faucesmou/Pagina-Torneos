import React from "react";
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';

/* import Aside2 from "./Aside2"; */
/* import primero from "../css/primero.css"; */ //Pregunta1: porque esto no se implementa?

function Primero() {
  return (
    <div className="PrimeroContainer">
      {/* <div className="imagenFondoInicial"></div> */}
      {/*       <aside className="Aside2Primero">
        <Aside2 />
      </aside> */}
      <div className="PrimeroContenido">
        <main className="primero-main">
          <section className="primeroMensaje">
            <h1>Torneos Ginobili</h1>
            <p style={{fontSize: '25px'}}>Inscripciones abiertas:</p>
            <p style={{fontSize: '20px'}}>No tengo equipo, pero quiero jugar:</p>
            <article className="eleccion">
              <div className="individual"></div>
              <NavLink to="/registro"> {/* aca va la url a la que quermos mandar al usuario */}
               <Button variant="dark" type="submit" className="text-light">Quiero inscribirme!</Button>
              </NavLink>
            </article>
            <div className="individual"></div>
            <article className="eleccion">
              <div className="familiar">
                <img src="" alt="" />
              </div>
              <NavLink to="/inscripciones">
              <Button variant="dark" type="submit" className="text-light">Cargar mi equipo</Button>
              </NavLink>
            </article>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Primero;
