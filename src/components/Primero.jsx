import React from "react";
import {
  /*   MDBBadge,*/
  MDBBtn,
} from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";
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
            <p>Inscripciones abiertas:</p>
            <p>No tengo equipo, pero quiero jugar!</p>
            <article className="eleccion">
              <div className="individual"></div>
              <NavLink to="/registro"> {/* aca va la url a la que quermos mandar al usuario */}
                <MDBBtn
                  /* onClick={handleClickIndividual} */ color="dark"
                  rippleColor="light" className="text-white"
                >
                  Quiero jugar!
                </MDBBtn>
              </NavLink>
            </article>
            <div className="individual"></div>
            <article className="eleccion">
              <div className="familiar">
                <img src="" alt="" />
              </div>
              <NavLink to="/inscripciones">
              <MDBBtn
                /* onClick={handleClickFamiliar} */ color="dark"
                rippleColor="dark" className="text-white"
              >
                Cargar equipo
              </MDBBtn>
              </NavLink>
            </article>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Primero;
