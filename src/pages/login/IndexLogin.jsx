
import Aside2 from '../../components/Aside2'
import Login from '../../components/Login'

//intento de cambiar el fondo condicionalmente: 
import { useSelector } from "react-redux";
import React, { useEffect, useState } from 'react';
import imagenGeneral from '../../images/basketball-2258651_1280.jpg'
import imagenFondoPerfil from '../../images/esquema-baloncesto.jpg'


export default function IndexLogin() {

  //código para cambiar el fondo condicionalmente: 
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [backgroundImage, setBackgroundImage] = useState(imagenGeneral);

  useEffect(() => {
    if (isLoggedIn) {
      setBackgroundImage(imagenFondoPerfil);
    } else {
      setBackgroundImage(imagenGeneral);
    }
  }, [isLoggedIn]);

  return (
    <main className='home' style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center center' }}  > 
  
    <Aside2 />
    <Login />
   
 
  </main>
  )
}
