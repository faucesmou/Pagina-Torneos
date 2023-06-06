import React from "react";
import "../css/aside2.css";

export default function Aside2() {
  return (
    <div className="Aside2ContainerMayor" width="100%">
      <div className="Aside2ContainerMenor">
        <span className="Aside2Titulo">
          <img
            src="/images/star.png"
            alt="Indicador"
            className="indicadorImagen"
          />{" "}
          Favoritos
        </span>

        {/*         <svg className="menuAside"></svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          viewBox="0 0 200 200"
        >
          { <circle cx="50" cy="50" r="50" fill="orange" /> }
        </svg> */}
        <span className="Aside2Titulo">
          <img
            src="/images/star.png"
            alt="Indicador"
            className="indicadorImagen"
          />{" "}
          Mis Ligas
        </span>
        <span className="Aside2Titulo">
          <img
            src="/images/star.png"
            alt="Indicador"
            className="indicadorImagen"
          />{" "}
          Barrios
        </span>
        <span className="Aside2Titulo">
          <img
            src="/images/star.png"
            alt="Indicador"
            className="indicadorImagen"
          />{" "}
          Paises:
        </span>
        <div className="Aside2Listado">
          <div className="Aside2ListadoItem" title="Argentina">
          Argentina
          </div>
          <div className="Aside2ListadoItem" title="Argentina">
            Francia
          </div>
          <div className="Aside2ListadoItem" title="Chile">
            Chile
          </div>
          <div className="Aside2ListadoItem" title="Brasil">
            Brasil
          </div>
          <div className="Aside2ListadoItem" title="Brasil">
            Uruguay
          </div>
        </div>
      </div>
    </div>
  );
}
