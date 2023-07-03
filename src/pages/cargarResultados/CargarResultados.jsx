import Aside2 from "../../components/Aside2";
import imagenFondoInscripciones from "../../images/canchaVerde.jpg";

import firebase from "firebase/compat/app";

import React, { useState, useEffect } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionTypes } from "../../redux/store";

export default function Inscripciones() {
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
      // REVISAR: En este DISPATCH estás Guardarndo y/o agregar los datos del formulario en el estado global usando Redux.
      //No obstante acá estas agregando los puntajes de los equipos al estado global OJO! Deberías primero previamente agregar los equipos al estado global (en la página de carga de equipos)y acá sólamente asignar o actualizar los valores de sus puntajes. REVISAR.

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
      if (equipoSeleccionado) {
        const equipoId = equipoSeleccionado.id;

        // Actualizar los campos de puntajes en Firebase
        firebase.database().ref(`equipos/${equipoId}`).update({
          puntos: formData.puntos,
          partidosJugados: formData.partidosJugados,
          partidosGanados: formData.partidosGanados,
          partidosPerdidos: formData.partidosPerdidos,
          partidosEmpatados: formData.partidosEmpatados,
        });
        console.log("Solicitud enviada a Firebase con éxito!");
      }

      // REVISAR : Guardar los datos del formulario en el almacenamiento local ESTE: /* En este ejemplo, estamos usando localStorage.getItem para recuperar la lista existente de equipos registrados del almacenamiento local y localStorage.setItem para guardar la lista actualizada de equipos registrados en el almacenamiento local después de agregar un nuevo usuario. */ tengo que ver si guardo formData u otro objeto.

      const existingTeams = JSON.parse(
        localStorage.getItem("equiposRegistrados") || "[]"
      );

      setErrors({});
      /* setFormData({}); */
      /* en esta línea setErrors({}) se usa para limpiar los errores de validación después de que el formulario se haya enviado correctamente..*/
      setFormSubmitted(true);
      console.log(
        "este es mi localstorage de equipos registrados: " +
          JSON.stringify(existingTeams)
      );
      /*   } */
    } else {
      setErrors(validationErrors);
      console.log("errores de validación: " + JSON.stringify(validationErrors));
      setFormSubmitted(false);
    }
  };

  /* const existingTeams = useSelector((state) => state.userData); */

  /*   const isExistingUser = (formData) => {
    return existingTeams.some(
      (user) =>
        user.puntos === formData.puntos ||
        user.partidosJugados === formData.partidosJugados ||
        user.nameEquipo === formData.nameEquipo ||
        user.partidosGanados === formData.partidosGanados ||
        user.partidosEmpatados === formData.partidosEmpatados ||
        user.partidosPerdidos === formData.partidosPerdidos
    );
  }; */

  const validateForm = () => {
    const validationErrors = {};
        if (formData.nameEquipo.trim() === "") {
      validationErrors.nameEquipo = "El nombre del equipo es requerido";
    }  
    if (formData.puntos.trim() === "") {
      validationErrors.puntos = "Los puntos del equipo son requeridos";
    }
    if (formData.partidosJugados.trim() === "") {
      validationErrors.partidosJugados =
        "Los partidos jugados del equipo son requeridos";
    }
    if (formData.partidosGanados.trim() === "") {
      validationErrors.partidosGanados =
        "Los partidos ganados del equipo son requeridos";
    }
    if (formData.partidosEmpatados.trim() === "") {
      validationErrors.partidosEmpatados =
        "Los partidos empatados del equipo son requeridos";
    }
    if (formData.partidosPerdidos.trim() === "") {
      validationErrors.partidosPerdidos =
        "Los partidos perdidos del equipo son requeridos";
    }
    return validationErrors;
  };

  /*   const isValidEmail = (email) => {
    Lógica de validación de email (regex u otro método)
  Devuelve true si es válido, false en caso contrario
    return true;
  }; */

  //TRABAJANDO SOBRE LA SELECCIÓN DE EQUIPOS (EL LABEL DEL RETURN ES PARTE DE ESTE CAMBIO):

  const [equipos, setEquipos] = useState([]);
  const [equipoSeleccionado, setEquipoSeleccionado] = useState(null);

  useEffect(() => {
    const equiposRef = firebase.database().ref("equipos");

    equiposRef.on("value", (snapshot) => {
      const data = snapshot.val();
      const equiposArray = [];

      for (let key in data) {
        equiposArray.push({ id: key, ...data[key] });
      }

      setEquipos(equiposArray);
    });
    return () => {
      equiposRef.off("value");
    };
  }, []);

  const handleEquipoSeleccionado = (event) => {
    const equipoId = event.target.value;
    const equipoSeleccionado = equipos.find((equipo) => equipo.id === equipoId);
    setEquipoSeleccionado(equipoSeleccionado);
    setFormData({
      ...formData,
      nameEquipo: equipoSeleccionado ? equipoSeleccionado.nameEquipo : "",
    });

  };

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
              Selecciona un equipo:
            </label>
            <select
              value={equipoSeleccionado ? equipoSeleccionado.id : ""}
              onChange={handleEquipoSeleccionado}
            >
              <option value="">Seleccionar equipo</option>
              {equipos.map((equipo) => (
                <option key={equipo.id} value={equipo.id}>
                  {equipo.nameEquipo}
                </option>
              ))}
            </select>
          </div>
          {errors.nameEquipo && <span>{errors.nameEquipo}</span>}
          {equipoSeleccionado && (
            <div>
              <label className="label-formulario" htmlFor="name">
                Equipo seleccionado:
              </label>
              <span>{equipoSeleccionado.nameEquipo}</span>
            </div>
          )}
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
            {errors.puntos && <span>{errors.puntos}</span>}
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
            {errors.partidosJugados && <span>{errors.partidosJugados}</span>}
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
            {errors.partidosGanados && <span>{errors.partidosGanados}</span>}
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
            {errors.partidosPerdidos && <span>{errors.partidosPerdidos}</span>}
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
            {errors.partidosEmpatados && (
              <span>{errors.partidosEmpatados}</span>
            )}
          </div>
          {errors.existingUserError && <span>{errors.existingUserError}</span>}
          {formSubmitted && (
            <span>Puntajes cargados en Firebase con éxito!</span>
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
