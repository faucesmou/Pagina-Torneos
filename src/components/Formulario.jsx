import React, { useState, useEffect } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";
/* import { useAppContext } from "../context/AppContext.js"; */
import { actionTypes } from "../redux/store.js";
import { useDispatch, useSelector } from 'react-redux';


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
  const state  = useSelector(state => state);
  /* En Redux, el hook useSelector se utiliza para obtener el estado actual almacenado en el store de Redux. En esta línea, estoy utilizando useSelector para obtener el estado global de la aplicación y asignarlo a la constante state. */
  const dispatch = useDispatch();
 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
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
          setErrors({ existingUserError: "El usuario ingresado ya existe, por favor intente con otros datos" });
          setFormSubmitted(false);
          setFormData({
            name: "",
            email: "",
            password: "",
          });
          console.log("El usuario ingresado ya existe, por favor intente con otros datos");
          
        } else {
                // Guardar y/o agregar los datos del formulario en el estado global usando Redux
      dispatch({ type: actionTypes.ADD_USER, payload: formData });
      setFormData({
        name: "",
        email: "",
        password: "",
      });
      // Guardar los datos del formulario en el almacenamiento local ESTE: /* En este ejemplo, estamos usando localStorage.getItem para recuperar la lista existente de usuarios registrados del almacenamiento local y localStorage.setItem para guardar la lista actualizada de usuarios registrados en el almacenamiento local después de agregar un nuevo usuario. */
        const existingUsers = JSON.parse(localStorage.getItem("usuariosRegistrados") || "[]");
        existingUsers.push(formData);
        localStorage.setItem("usuariosRegistrados", JSON.stringify(existingUsers));
      console.log("Solicitud enviada con éxito!");
      setErrors({}); /* en esta línea setErrors({}) se usa para limpiar los errores de validación después de que el formulario se haya enviado correctamente..*/
      setFormSubmitted(true);
      console.log("este es mi localstorage: " + JSON.stringify(existingUsers));
      
      };
    } else {
      setErrors(validationErrors);
      console.log("errores de validación: " + JSON.stringify(validationErrors));
      setFormSubmitted(false);
    } 
  
  };

  const existingUsers = useSelector(state => state.userData);
  const isExistingUser = (formData) => {
    return existingUsers.some(user => user.name === formData.name || user.email === formData.email);
  }
  
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
    return validationErrors;
  };

  const isValidEmail = (email) => {
    // Lógica de validación de email (regex u otro método)
    // Devuelve true si es válido, false en caso contrario
    return true;
  };

  return (
    <div className="formulario-container">
      <h2>Formulario de Registro</h2>
      <form onSubmit={handleSubmit} className="formulario">
        <div>
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
        <div>
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
        <div>
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
        {formSubmitted && <span>Formulario de registro enviado con éxito!</span>}
        
        <div className="formulario-botones">
          <MDBBtn color="light" rippleColor="dark" type="submit" className="submit-btn">
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
  );
};

export default Formulario;
