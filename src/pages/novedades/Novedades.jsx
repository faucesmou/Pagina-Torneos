import React from 'react'
import Aside2 from '../../components/Aside2'
import Tabla from '../../components/Tabla';


//importaciones 

import imagenFondoNovedades from '../../images/estadio.jpg'

export default function Novedades() {
  return (
    <main className='home'style={{ backgroundImage: `url(${imagenFondoNovedades})`, backgroundSize: 'cover', backgroundPosition: 'center center'  }} > 
    <Aside2 /> 
    <Tabla /> 
    

  </main>
  )
}