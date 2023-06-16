import React from 'react'
import {
    /*   MDBBadge,*/
    MDBTable,
    MDBTableHead,
    MDBTableBody,
  } from "mdb-react-ui-kit";


export default function Tabla() {
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
            <tr className="table-success">
              <th scope="row" className="image-cell">
                <div className="imagenes-contenedor">
                  <img
                    src="images\celtics.jpeg"
                    alt=""
                    style={{ width: "35px", height: "35px" }}
                    className="rounded-circle"
                  />
                </div>
                Celtics
              </th>
              <td>15</td>
              <td>11</td>
              <td>3</td>
              <td>1</td>
              <td>121</td>
            </tr>

            <tr className="table-success">
              <th scope="row" className="image-cell">
                <div className="imagenes-contenedor">
                  <img
                    src="images\cavaliers.jpeg"
                    alt=""
                    style={{ width: "35px", height: "35px" }}
                    className="rounded-circle"
                  />
                </div>
                Cavaliers
              </th>
              <td>14</td>
              <td>9</td>
              <td>3</td>
              <td>2l</td>
              <td>110</td>
            </tr>

            <tr className="table-success">
              <th scope="row" className="image-cell">
                <div className="imagenes-contenedor">
                  <img
                    src="images\hornets.jpeg"
                    alt=""
                    style={{ width: "35px", height: "35px" }}
                    className="rounded-circle"
                  />
                </div>
                Hornets
              </th>
              <td>15</td>
              <td>7</td>
              <td>4</td>
              <td>4</td>
              <td>78</td>
            </tr>
            <tr className="table-secondary">
              <th scope="row" className="image-cell">
                <div className="imagenes-contenedor">
                  <img
                    src="images\lakers.jpeg"
                    alt=""
                    style={{ width: "35px", height: "35px" }}
                    className="rounded-circle"
                  />
                </div>
                Lakers
              </th>
              <td>15</td>
              <td>6</td>
              <td>5</td>
              <td>3</td>
              <td>89</td>
            </tr>
            <tr className="table-light">
              <th scope="row" className="image-cell">
                <div className="imagenes-contenedor">
                  <img
                    src="images\nets.jpeg"
                    alt=""
                    style={{ width: "35px", height: "35px" }}
                    className="rounded-circle"
                  />
                </div>
                Nets
              </th>
              <td>14</td>
              <td>8</td>
              <td>6</td>
              <td>4</td>
              <td>70</td>
            </tr>
            <tr className="tableGonza">
              <th scope="row" className="image-cell">
                <div className="imagenes-contenedor">
                  <img
                    src="images\nuggets.jpeg"
                    alt=""
                    style={{ width: "35px", height: "35px" }}
                    className="rounded-circle"
                  />
                </div>
                Nuggets
              </th>
              <td>14</td>
              <td>6</td>
              <td>6</td>
              <td>4</td>
              <td>68</td>
            </tr>
            <tr className="table-warning">
              <th scope="row" className="image-cell">
                <div className="imagenes-contenedor">
                  <img
                    src="images\pistons.jpeg"
                    alt=""
                    style={{ width: "35px", height: "35px" }}
                    className="rounded-circle"
                  />
                </div>
                Pistons
              </th>
              <td>14</td>
              <td>5</td>
              <td>4</td>
              <td>4</td>
              <td>68</td>
            </tr>
            <tr className="table-warning">
              <th scope="row" className="image-cell">
                <div className="imagenes-contenedor">
                  <img
                    src="images\bulls.jpeg"
                    alt=""
                    style={{ width: "35px", height: "35px" }}
                    className="rounded-circle"
                  />
                </div>
                Bulls
              </th>
              <td>15</td>
              <td>6</td>
              <td>5</td>
              <td>4</td>
              <td>65</td>
            </tr>
            <tr className="table-danger">
              <th scope="row" className="image-cell">
                <div className="imagenes-contenedor">
                  <img
                    src="images\rockets.jpeg"
                    alt=""
                    style={{ width: "35px", height: "35px" }}
                    className="rounded-circle"
                  />
                </div>
                Rockets
              </th>
              <td>14</td>
              <td>4</td>
              <td>6</td>
              <td>6</td>
              <td>50</td>
            </tr>
            <tr className="table-danger">
              <th scope="row" className="image-cell">
                <div className="imagenes-contenedor">
                  <img
                    src="images\spurs.jpeg"
                    alt=""
                    style={{ width: "35px", height: "35px" }}
                    className="rounded-circle"
                  />
                </div>
                Spurs
              </th>
              <td>15</td>
              <td>3</td>
              <td>6</td>
              <td>6</td>
              <td>40</td>
            </tr>
          </MDBTableBody>
        </MDBTable>
      </div>
    </div>
  </div>     
)
}
