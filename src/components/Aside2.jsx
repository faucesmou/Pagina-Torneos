import React from "react";
import "../css/aside2.css";

export default function Aside2() {
  return (
    <div className="Aside2ContainerMayor">
      <div className="Aside2ContainerMenor">
        <span className="Aside2Titulo">
          <img
            src="/images/star.png"
            alt="Indicador"
            className="indicadorImagen"
          />{" "}
          Favoritos
        </span>
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
