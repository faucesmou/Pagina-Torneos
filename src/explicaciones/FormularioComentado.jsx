import React, { useState, useEffect } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";
/* import { useAppContext } from "../context/AppContext.js"; */
import { actionTypes } from "../redux/store.js";
import { useDispatch, useSelector } from 'react-redux';

/*  importando los módulos necesarios para el componente. Esto incluye React y useState de React para manejar el estado local, componentes de interfaz de usuario de MDBReactUIKit y NavLink de react-router-dom para la navegación, actionTypes del almacenamiento Redux para disparar acciones y useDispatch y useSelector de react-redux para interactuar con el almacenamiento de Redux. */




const FormularioComentado = () => {
  /* const { state } = useAppContext(); esta fue una opción pero la descarté*/
  const state  = useSelector(state => state);
  /* En Redux, el hook useSelector se utiliza para obtener el estado actual almacenado en el store de Redux. En esta línea, estoy utilizando useSelector para obtener el estado global de la aplicación y asignarlo a la constante state. */
  const dispatch = useDispatch();
  /* En Redux, dispatch es una función que se utiliza para enviar acciones al store de Redux. La función useDispatch es un hook de react-redux que nos permite acceder a la función dispatch en los componentes de React.

  Cuando llamo a useDispatch(), obtengo la instancia de la función dispatch que puedo utilizar para enviar acciones al store de Redux. Esta función se conecta automáticamente al store que he configurado previamente en la aplicación. */

  /* Para utilizar dispatch, se puede llamar en el componente y pasarle un objeto de acción como argumento. El objeto de acción debe tener una propiedad type que indique el tipo de acción que se va a realizar. Puede tener una propiedad adicional llamada payload que contiene los datos adicionales necesarios para la acción. */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});


  /* La función de useEffect se ejecuta después de que el componente se haya renderizado en la pantalla. Si proporcionas una lista de dependencias, la función de efecto sólo se volverá a ejecutar si alguno de los valores en la lista de dependencias cambia. En este caso, estamos usando useEffect para escuchar cambios en el estado de Redux y mostrar su valor actualizado en la consola. La función de efecto simplemente muestra el valor actual del estado en la consola. La lista de dependencias contiene [state], lo que significa que la función de efecto sólo se volverá a ejecutar si el valor de state cambia.*/

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
        if (isExistingUser(formData)) {
          console.log("El usuario ingresado ya existe, por favor intente con otros datos");
        } else {
                // Guardar y/o agregar los datos del formulario en el estado global usando Redux
      dispatch({ type: actionTypes.ADD_USER, payload: formData });
      console.log("Formulario enviado!");
      setErrors({}); /* en esta línea setErrors({}) se usa para limpiar los errores de validación después de que el formulario se haya enviado correctamente. Si el formulario se envía y no hay errores de validación, entonces se despacha la acción para agregar un nuevo usuario al estado global y se limpian los errores de validación llamando a setErrors({}). */
      /* console.log(state) este console log lo silenciamos ya que el estado se actualiza una vez se termina de renderizar el componente no es sincrónico sino asincrónico.*/
      };
    } else {
      setErrors(validationErrors);
      console.log("errores de validación: " + JSON.stringify(validationErrors))
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

export default FormularioComentado;
