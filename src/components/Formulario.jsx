import React, { useState } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../context/AppContext.js";
import { actionTypes } from "../redux/store.js";
import { useDispatch } from 'react-redux';




const Formulario = () => {
  const { state } = useAppContext();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

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
      // Guardar los datos del formulario en el estado global usando Redux
      dispatch({ type: actionTypes.SET_USER_DATA, payload: formData });
      console.log("Formulario enviado!");
      console.log(state)
    } else {
      setErrors(validationErrors);
    }
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

export default Formulario;
