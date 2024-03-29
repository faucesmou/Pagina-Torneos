import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
/* import { actionTypes } from '../redux/store'; *//////no es necesario acceder al objeto? se accede directamente a las funcionalidades de actionTypes??? 
import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";

//nuevo botón para solucionar el problema de la transformación:
import Button from 'react-bootstrap/Button';

//importaciones useEffect y condicionales para cambiar el fondo en caso de un login exitoso:
import imagenFondoRegistro from '../images/login.jpeg'
import imagenFondoPerfil from '../images/sesionIniciada3.jpeg'



import databaseUsuarios from "../../src/firebase2.js";

export default function Login() {

 //código para cambiar el fondo condicionalmente: 
 const isLoggedIn = useSelector((state) => state.isLoggedIn);
 const [backgroundImage, setBackgroundImage] = useState(imagenFondoRegistro);

 useEffect(() => {
   if (isLoggedIn) {
     setBackgroundImage(imagenFondoPerfil);
   } else {
     setBackgroundImage(imagenFondoRegistro);
   }
 }, [isLoggedIn]);

    const handleLogin = (event) => {
        event.preventDefault();
        // Obtener los valores ingresados por el usuario
        const username = event.target.username.value;
       /*  const email = event.target.email.value; */
        const password = event.target.password.value;
         //compararlos con la base de datos Firebase:
         databaseUsuarios
         .ref("usuarios")
         /* .orderByChild("email")
         .equalTo(email)*/
         .once("value") 
         .then((snapshot) => {
           const usuarios = snapshot.val();
           if (usuarios) {
             const usuarioEncontrado = Object.values(usuarios).find(
               (usuario) =>
                 usuario.name === username &&
                 usuario.password === password /* &&
                 usuario.email === email */
             );
           if (usuarioEncontrado){
            console.log("Inicio de sesión exitoso paadre y corroborado desde firebase");
            /* setFormSubmitted(true); */
          setFormData({
            username: "",
            /* email: "", */
            password: "",
          });
          setformFail(false);
    // Establecer el valor de isLoggedIn en true en el estado global
    dispatch({ type: 'LOGIN' });
           }
           else {
            // El usuario no está registrado
            console.log("El usuario no está registrado");
            /* setFormSubmitted(false); */
            setformFail(true);
            setFormData({
              username: "",
              /* email: "", */
              password: "",
            });
          }
        };
      })
      .catch((error) => {
        console.log("error al realizar el inicio de sesión")
      });
    }

        // Obtener la lista de usuarios registrados del local storage
     /*    const existingUsers = JSON.parse(localStorage.getItem("usuariosRegistrados") || "[]"); */
        // Verificar si el usuario ingresado se encuentra en la lista de usuarios registrados
        /* const userExists = existingUsers.some(user => user.name === username && user.email === email && user.password === password);
        if (userExists) {
          // El usuario está registrado
          console.log("El usuario está registrado");
          console.log("estos son mi usuarios del local storage: ", existingUsers)
          setFormSubmitted(true);
          setFormData({
            username: "",
            email: "",
            password: "",
          });
          setformFail(false); */
    // Establecer el valor de isLoggedIn en true en el estado global
    /* dispatch({ type: 'LOGIN' }); */
    /* dispatch({ type: 'LOGIN_SUCCESS' });  */
          
        /* } else {
         
          console.log("El usuario no está registrado");
          setFormSubmitted(false);
          setformFail(true);
          setFormData({
            username: "",
            email: "",
            password: "",
          });
        }
      } */
      //estado para mostrar cartel de bienvenida (en desuso usé el use state login en cambio):
      /* const [formSubmitted, setFormSubmitted] = useState(false); */
      //estado para mostrar cartel de usuario incorrecto: 
      const [formFail, setformFail] = useState(false);
      //estado para borrar los campos al apretar submit:
      const [formData, setFormData] = useState({
        username: "",
        /* email: "", */
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
        <div className="formulario-container" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center center' }}>
          {!isLoggedIn ? (
            <div className="formulario">
              <div className="card mb-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
                <div>
                  <h4 className="card-header">Iniciar Sesión</h4>
                  <div className="card-body">
                    <form onSubmit={handleLogin}>
                      <div className="form-group">
                        <label className="text-dark">Username</label>
                        <input
                          name="username"
                          type="text"
                          value={formData.username}
                          onChange={handleChange}
                        />
                        <div className="invalid-feedback"></div>
                      </div>
      
                      <div className="form-group">
                        <label className="text-dark">Password</label>
                        <input
                          name="password"
                          type="password"
                          value={formData.password}
                          onChange={handleChange}
                        />
                        <div className="invalid-feedback"></div>
                      </div>
      
                      <Button variant="dark" type="submit" className="volver-btn" style={{ marginTop: '10px' }}>Submit</Button>
                      <NavLink to="/registro">
                        <Button variant="dark" type="submit" className="volver-btn" style={{ marginTop: '10px', marginLeft: '10px' }}>No tengo cuenta</Button>
                      </NavLink>
                    </form>
                    {formFail && <span style={{ marginTop: '20px', display: 'block', color: 'black' }}>Usuario incorrecto</span>}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="formulario">
              <div className="card mb-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
                <div>
                  <h2 className="card-header">Bienvenido perro!</h2>
                  <div className="card-body">
                    <span style={{ marginTop: '20px', display: 'block', color: 'black',fontSize: '18px' }}>Te invitamos a explorar la página</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      );
      
    
    }