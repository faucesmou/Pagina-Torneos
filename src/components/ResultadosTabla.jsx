import React, { useState, useEffect } from 'react';
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";

/* import firebase from 'firebase/app'; */
import firebase from 'firebase/compat/app';

/* import database from "../../src/firebase"; */

function ResultadosTabla() {
  const [equipos, setEquipos] = useState([]);

  useEffect(() => {
    const equiposRef = firebase.database().ref('equipos');

    equiposRef.on('value', (snapshot) => {
      const data = snapshot.val();
      const equiposArray = [];

      for (let key in data) {
        equiposArray.push(data[key]);
      }
      equiposArray.sort((a, b) => b.puntos - a.puntos);

      setEquipos(equiposArray);
    });

    // Importante: No olvides desuscribirte de los cambios al desmontar el componente
    return () => {
        equiposRef.off('value');
    };
  }, []);

  return (
    <div className="PrimeroContainer">
      <div className="PrimeroContenido">
        <div className="tablaPrimero">
          <MDBTable>
            <MDBTableHead>
              <tr>
                <th scope="col">Equipos</th>
                <th scope="col">PJ</th>
                <th scope="col">PG</th>
                <th scope="col">PE</th>
                <th scope="col">PP</th>
                <th scope="col">PT</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {equipos.map((equipo, index) => (
                <tr key={index}>
                  <th scope="row" className="image-cell">
                    <div className="imagenes-contenedor">
                      <img
                        src="images\cavaliers.jpeg"
                        alt=""
                        style={{ width: "35px", height: "35px" }}
                        className="rounded-circle"
                      />
                    </div>
                    {equipo.nameEquipo}
                  </th>
                  <td>{equipo.partidosJugados}</td>
                  <td>{equipo.partidosGanados}</td>
                  <td>{equipo.partidosEmpatados}</td>
                  <td>{equipo.partidosPerdidos}</td>
                  <td>{equipo.puntos}</td>
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        </div>
      </div>
    </div>
  );
}

export default ResultadosTabla;



