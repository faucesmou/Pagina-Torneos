import React from 'react'
import Aside2 from './Aside2';
import Primero from "./Primero";
import imagenFondoHome from '../images/basketball-2258651_1280.jpg'

export default function Home() {
  return (

    <main className='home' style={{ backgroundImage: `url(${imagenFondoHome})`, backgroundSize: 'cover', backgroundPosition: 'center center'  }}> 
      
      <Aside2 />
      <Primero />
     
    </main>
  )
}

