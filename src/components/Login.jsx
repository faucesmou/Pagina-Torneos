import React, { useState, useEffect, /* dispatch  */} from "react";
import { useSelector } from 'react-redux';
/* import { actionTypes } from '../redux/store'; *//////no es necesario acceder al objeto? se accede directamente a las funcionalidades de actionTypes??? 
import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";

export default function Login() {

    const handleLogin = (event) => {
        event.preventDefault();
        // Obtener los valores ingresados por el usuario
        const username = event.target.username.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // Obtener la lista de usuarios registrados del local storage
        const existingUsers = JSON.parse(localStorage.getItem("usuariosRegistrados") || "[]");
        // Verificar si el usuario ingresado se encuentra en la lista de usuarios registrados
        const userExists = existingUsers.some(user => user.name === username && user.email === email && user.password === password);
        if (userExists) {
          // El usuario está registrado
          console.log("El usuario está registrado");
          setFormSubmitted(true);
          setFormData({
            username: "",
            email: "",
            password: "",
          });
          setformFail(false);
    // Establecer el valor de isLoggedIn en true en el estado global
    dispatch({ type: 'LOGIN' });
    /* dispatch({ type: 'LOGIN_SUCCESS' });  */
          
        } else {
          // El usuario no está registrado
          console.log("El usuario no está registrado");
          setFormSubmitted(false);
          setformFail(true);
          setFormData({
            username: "",
            email: "",
            password: "",
          });
        }
      }
      //estado para mostrar cartel de bienvenida:
      const [formSubmitted, setFormSubmitted] = useState(false);
      //estado para mostrar cartel de usuario incorrecto: 
      const [formFail, setformFail] = useState(false);
      //estado para borrar los campos al apretar submit:
      const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
      });
      //función para guardar los campos y resetearlos al apretar submit:
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

      const state  = useSelector(state => state);
      useEffect(() => {
        console.log(state);
      }, [state]);
      const dispatch = useDispatch();

  return (
    <div className="col-md-5 offset-md-3 mt-5">
      <div className="card">
        <h4 className="card-header">Login</h4>
        <div className="card-body">
          <form onSubmit={handleLogin} >
            <div className="form-group">
              <label>Username</label>
              <input
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
              />
              <div className="invalid-feedback"></div>
            </div>
            <div className="form-group">
              <label>Mail</label>
              <input
                name="email"
                type="text"
                value={formData.email}
                onChange={handleChange}
              />
              <div className="invalid-feedback"></div>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
              />
              <div className="invalid-feedback"></div>
            </div>
            <button className="btn btn-primary" style={{ marginTop: '10px' }}>
              Login
            </button>
            <NavLink to="/registro">
            <button className="btn btn-primary" style={{ marginTop: '10px', marginLeft: '10px' }}>
              Crear Nuevo Usuario
            </button>    
            </NavLink>   
          </form>
          <form  >
          {formSubmitted && <span style={{marginTop: '20px', display: 'block'}} >Bienvenido!</span>}
          {formFail && <span style={{marginTop: '20px', display: 'block'}}>Usuario incorrecto</span>}
          </form>
        </div>
      </div>
    </div>
  );
}
