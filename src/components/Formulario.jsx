import React, { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";
/* import { useAppContext } from "../context/AppContext.js"; */
import { actionTypes } from "../redux/store.js";
import { useDispatch, useSelector } from "react-redux";
import imagenFondoRegistro from '../images/login.jpeg'

//nuevo botón para solucionar el problema de la transformación:
import Button from 'react-bootstrap/Button';

import firebase from "firebase/compat/app";
import databaseUsuarios from "../../src/firebase2.js";

/* let fs = require('fs')
let guardarJson = (array) => fs.writeFileSync('../data/usuariosRegistrados.json') , JSON.stringify(array,null,2 ) ,'utf-8');

let usuario = {
  titulo,
  estado : 'pendiente'
}
usuarios.push(usuario)
guardarJson(usuarios) */

/*  importando los módulos necesarios para el componente. Esto incluye React y useState de React para manejar el estado local, componentes de interfaz de usuario de MDBReactUIKit y NavLink de react-router-dom para la navegación, actionTypes del almacenamiento Redux para disparar acciones y useDispatch y useSelector de react-redux para interactuar con el almacenamiento de Redux. */

const Formulario = () => {
  /* const { state } = useAppContext(); esta fue una opción pero la descarté*/
  const state = useSelector((state) => state);
  /* En Redux, el hook useSelector se utiliza para obtener el estado actual almacenado en el store de Redux. En esta línea, estoy utilizando useSelector para obtener el estado global de la aplicación y asignarlo a la constante state. */
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    equipo: "",
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

  //TRABAJANDO SOBRE LA SELECCIÓN DE EQUIPOS:

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
      equipo: equipoSeleccionado ? equipoSeleccionado.nameEquipo : "",
    });
  };

//código para verificar si los datos ingresados ya existen en la base de datos: 

const verificarUsuarioExistente = async (formData) => {
  try {
    const snapshot = await databaseUsuarios.ref("usuarios").once("value");
    const usuarios = snapshot.val();
    const existeUsuario = Object.values(usuarios).some(
      (usuario) =>
        usuario.email === formData.email ||
        usuario.password === formData.password ||
        usuario.name === formData.name
    );
    return existeUsuario;
  } catch (error) {
    console.log("Error al verificar el usuario en Firebase: ", error);
    return false;
  }
};


  //trabajando en el SUBMIT:
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit =  async (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    const usuarioExistente = await verificarUsuarioExistente(formData);
    if (Object.keys(validationErrors).length === 0) {
      if (isExistingUser(formData)) {
        setErrors({
          existingUserError:
            "El usuario ingresado ya existe, por favor intente con otros datos",
        });
        setFormSubmitted(false);
        setFormData({
          name: "",
          email: "",
          password: "",
          equipo: "",
        });
        console.log(
          "El usuario ingresado ya existe, por favor intente con otros datos"
        );
        //la siguiente línea usa "usuarioExistente" que viene de "verificarUsuarioExistente(formData)" en donde se consulta la base de datos para ver si existe ese usuario. 
      } if (usuarioExistente) {
    console.log("Usuario ya existe");
    setErrors({
      existingUserError:
        "El usuario ingresado ya existe, por favor intente con otros datos",
    });
    setFormSubmitted(false);
    setFormData({
      name: "",
      email: "",
      password: "",
      equipo: "",
    })
    // Mostrar un mensaje de error en el formulario indicando que el usuario ya existe
  } 
      
      else {
        // Guardar y/o agregar los datos del formulario en el estado global usando Redux
        dispatch({ type: actionTypes.ADD_USER, payload: formData });
        console.log("este es el STATE GLOBAL: ", state)

        //envío datos de usuario a Firebase:

        databaseUsuarios
          .ref("usuarios")
          .push(formData) // Reemplaza "ruta/a/los/datos" con la ubicación real en tu base de datos de Firebase
          .then(() => {
            console.log("Solicitud de Registro enviada a Firebase con éxito!");
            setErrors({});
          })
          .catch((error) => {
            console.log(
              "Error al enviar la solicitud de Registro a Firebase: ",
              error
            );
          });

        setFormData({
          name: "",
          email: "",
          password: "",
          equipo: "",
        });
        // Guardar los datos del formulario en el almacenamiento local ESTE: /* En este ejemplo, estamos usando localStorage.getItem para recuperar la lista existente de usuarios registrados del almacenamiento local y localStorage.setItem para guardar la lista actualizada de usuarios registrados en el almacenamiento local después de agregar un nuevo usuario. */
        const existingUsers = JSON.parse(
          localStorage.getItem("usuariosRegistrados") || "[]"
        );
        existingUsers.push(formData);
        localStorage.setItem(
          "usuariosRegistrados",
          JSON.stringify(existingUsers)
        );
        console.log("Solicitud enviada con éxito!");
        setErrors(
          {}
        ); /* en esta línea setErrors({}) se usa para limpiar los errores de validación después de que el formulario se haya enviado correctamente..*/
        setFormSubmitted(true);
        console.log(
          "este es mi localstorage: " + JSON.stringify(existingUsers)
        );
      }
    } else {
      setErrors(validationErrors);
      console.log("errores de validación: " + JSON.stringify(validationErrors));
      setFormSubmitted(false);
    }
  };
//esta parte del código es para consultar si el usuario existe ya registrado en el State: 
  const existingUsers = useSelector((state) => state.userData);
  const isExistingUser = (formData) => {
    return existingUsers.some(
      (user) => user.name === formData.name || user.email === formData.email
    );
  };

  const validateForm = () => {
    const validationErrors = {};
    if (formData.name.trim() === "") {
      validationErrors.name = "El nombre es requerido";
    }
    if (formData.email.trim() === "") {
      validationErrors.email = "El Email es requerido";
    } else if (!isValidEmail(formData.email)) {
      validationErrors.email = "Formato de email inválido";
    }
    if (formData.password.trim() === "") {
      validationErrors.password = "La contraseña es requerida";
    } else if (formData.password.length < 8) {
      validationErrors.password =
        "La contraseña debe tener al menos 8 caracteres de largo";
    }
    if (formData.equipo.trim() === "") {
      validationErrors.equipo = "El equipo es requerido";
    }

    return validationErrors;
  };

  const isValidEmail = (email) => {
    // Lógica de validación de email (regex u otro método)
    // Devuelve true si es válido, false en caso contrario
    return true;
  };

  return (
    <div className="formulario-container" style={{ backgroundImage: `url(${imagenFondoRegistro})`, backgroundSize: 'cover', backgroundPosition: 'center center'  }}
    >
      <h2>Formulario de Registro</h2>
      <form onSubmit={handleSubmit} className="formulario">
        <div className="input-container">
          <label className="label-formulario" htmlFor="name">
            Nombre completo:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div className="input-container">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div className="input-container">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        {errors.existingUserError && <span>{errors.existingUserError}</span>}
        {formSubmitted && (
          <span><h2 className="envioExito">Formulario de registro enviado con éxito!</h2></span>
        )}

        <div className="input-container">
          <label className="label-formulario" htmlFor="equipo">
            Selecciona un equipo:&nbsp;&nbsp;&nbsp;
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
        {errors.equipo && <span>{errors.equipo}</span>}
        {equipoSeleccionado && (
          <div>
            <label className="label-formulario" htmlFor="name">
              Equipo seleccionado:&nbsp;&nbsp;
            </label>
            <span>{equipoSeleccionado.nameEquipo}</span>
          </div>
        )}
        <div className="formulario-boton-noTengoEquipo">
        
        <Button variant="dark">No tengo equipo</Button>
        </div>
        <div className="formulario-botones">
          
          <Button variant="dark" type="submit" className="submit-btn">Submit</Button>
          <NavLink to="/">
            <Button variant="dark" type="submit" className="volver-btn">Volver</Button>
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
