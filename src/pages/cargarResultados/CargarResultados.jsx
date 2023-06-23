import Aside2 from "../../components/Aside2";
import imagenFondoInscripciones from "../../images/canchaVerde.jpg";
import database from "../../firebase";


import React, { useState, useEffect } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionTypes } from "../../redux/store";

export default function Inscripciones() {
  /* const { state } = useAppContext(); esta fue una opción pero la descarté*/
  const state = useSelector((state) => state);
  /* En Redux, el hook useSelector se utiliza para obtener el estado actual almacenado en el store de Redux. En esta línea, estoy utilizando useSelector para obtener el estado global de la aplicación y asignarlo a la constante state. */
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    nameEquipo: "",
    puntos: "",
    partidosJugados: "",
    partidosGanados: "",
    partidosEmpatados: "",
    partidosPerdidos: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    console.log(state);
  }, [state]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      if (isExistingUser(formData)) {
        setErrors({
          existingUserError:
            "El usuario ingresado ya existe, por favor intente con otros datos",
        });
        setFormSubmitted(false);
        setFormData({
          nameEquipo: "",
          puntos: "",
          partidosJugados: "",
          partidosGanados: "",
          partidosEmpatados: "",
          partidosPerdidos: "",
        });
        console.log(
          "El equipo ingresado ya existe, por favor intente con otros datos"
        );
      } else {
        // Guardar y/o agregar los datos del formulario en el estado global usando Redux
        dispatch({ type: actionTypes.ADD_USER, payload: formData });
        setFormData({
          nameEquipo: "",
          puntos: "",
          partidosJugados: "",
          partidosGanados: "",
          partidosEmpatados: "",
          partidosPerdidos: "",
        });
        // Guardar los datos del formulario en Firebase
        database
          .ref("equipos")
          .push(formData) // Reemplaza "ruta/a/los/datos" con la ubicación real en tu base de datos de Firebase
          .then(() => {
            console.log("Solicitud enviada a Firebase con éxito!");
            setErrors({});
          })
          .catch((error) => {
            console.log("Error al enviar la solicitud a Firebase: ", error);
          });

        // Guardar los datos del formulario en el almacenamiento local ESTE: /* En este ejemplo, estamos usando localStorage.getItem para recuperar la lista existente de usuarios registrados del almacenamiento local y localStorage.setItem para guardar la lista actualizada de usuarios registrados en el almacenamiento local después de agregar un nuevo usuario. */
        const existingTeams = JSON.parse(
          localStorage.getItem("equiposRegistrados") || "[]"
        );
        existingTeams.push(formData);
        localStorage.setItem(
          "equiposRegistrados",
          JSON.stringify(existingTeams)
        );
        console.log("Solicitud enviada con éxito!");

        setErrors({});
        /* setFormData({}); */
        /* en esta línea setErrors({}) se usa para limpiar los errores de validación después de que el formulario se haya enviado correctamente..*/
        setFormSubmitted(true);
        console.log(
          "este es mi localstorage de equipos registrados: " +
            JSON.stringify(existingTeams)
        );
      }
    } else {
      setErrors(validationErrors);
      console.log("errores de validación: " + JSON.stringify(validationErrors));
      setFormSubmitted(false);
    }
  };

  const existingTeams = useSelector((state) => state.userData);
  const isExistingUser = (formData) => {
    return existingTeams.some(
      (user) =>
        user.puntos === formData.puntos ||
        user.partidosJugados === formData.partidosJugados ||
        user.nameEquipo === formData.nameEquipo ||
        user.partidosGanados === formData.partidosGanados ||
        user.partidosEmpatados === formData.partidosEmpatados ||
        user.partidosPerdidos === formData.partidosPerdidos
    );
  };

  const validateForm = () => {
    const validationErrors = {};
    if (formData.nameEquipo.trim() === "") {
      validationErrors.nameEquipo = "El nombre del equipo es requerido";
    }
    if (formData.puntos.trim() === "") {
      validationErrors.puntos = "Los puntos del equipo son requeridos";
    }
    if (formData.partidosJugados.trim() === "") {
      validationErrors.partidosJugados = "Los partidos jugados del equipo son requeridos";
    }
    if (formData.partidosGanados.trim() === "") {
      validationErrors.partidosGanados =
        "Los partidos ganados del equipo son requeridos";
    }
    if (formData.partidosEmpatados.trim() === "") {
      validationErrors.partidosEmpatados = "Los partidos empatados del equipo son requeridos";
    }
    if (formData.partidosPerdidos.trim() === "") {
      validationErrors.partidosPerdidos = "Los partidos perdidos del equipo son requeridos";
      }
      return validationErrors;
  }

    /*   const isValidEmail = (email) => {
    Lógica de validación de email (regex u otro método)
  Devuelve true si es válido, false en caso contrario
    return true;
  }; */

    return (
      <main
        className="home"
        style={{
          backgroundImage: `url(${imagenFondoInscripciones})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="formulario-container">
          <h2>Carga de Resultados</h2>
          <form onSubmit={handleSubmit} className="formulario">
            <div>
              <label className="label-formulario" htmlFor="name">
                Nombre del equipo:
              </label>
              <input
                type="text"
                id="name"
                name="nameEquipo"
                value={formData.nameEquipo}
                onChange={handleChange}
              />
              {errors.name && <span>{errors.name}</span>}
            </div>
            <div>
              <label className="label-formulario" htmlFor="name">
                Puntos:
              </label>
              <input
                type="text"
                id="name"
                name="puntos"
                value={formData.puntos}
                onChange={handleChange}
              />
              {errors.name && <span>{errors.name}</span>}
            </div>
            <div>
              <label className="label-formulario" htmlFor="name">
                Partidos jugados:
              </label>
              <input
                type="text"
                id="name"
                name="partidosJugados"
                value={formData.partidosJugados}
                onChange={handleChange}
              />
              {errors.name && <span>{errors.name}</span>}
            </div>
            <div>
              <label className="label-formulario" htmlFor="name">
                Partidos Ganados:
              </label>
              <input
                type="text"
                id="name"
                name="partidosGanados"
                value={formData.partidosGanados}
                onChange={handleChange}
              />
              {errors.name && <span>{errors.name}</span>}
            </div>

            <div>
              <label htmlFor="email">Partidos Perdidos:</label>
              <input
                type="text"
                id="name"
                name="partidosPerdidos"
                value={formData.partidosPerdidos}
                onChange={handleChange}
              />
              {errors.email && <span>{errors.email}</span>}
            </div>
            <div>
              <label htmlFor="email">Partidos Empatados:</label>
              <input
                type="text"
                id="name"
                name="partidosEmpatados"
                value={formData.partidosEmpatados}
                onChange={handleChange}
              />
              {errors.email && <span>{errors.email}</span>}
            </div>
            {errors.existingUserError && (
              <span>{errors.existingUserError}</span>
            )}
            {formSubmitted && (
              <span>Formulario de registro enviado con éxito!</span>
            )}

            <div className="formulario-botones">
              <MDBBtn
                color="light"
                rippleColor="dark"
                type="submit"
                className="submit-btn"
              >
                Submit
              </MDBBtn>
              <NavLink to="/">
                <MDBBtn color="light" rippleColor="dark" className="volver-btn">
                  Volver
                </MDBBtn>
              </NavLink>
            </div>
          </form>
        </div>
        <Aside2 />
      </main>
    );
}
