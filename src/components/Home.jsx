import React from 'react'
import Aside2 from './Aside2';
import Primero from "./Primero";
import imagenFondoHome from '../images/pelotaOscuro.jpg'

export default function Home() {
  return (

    <main className='home' style={{ backgroundImage: `url(${imagenFondoHome})`, backgroundSize: 'cover', backgroundPosition: 'center center'  }}> 
      
      <Aside2 />
      <Primero />
     
    </main>
  )
}

