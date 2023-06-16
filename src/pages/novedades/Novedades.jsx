import React from 'react'
import Aside2 from '../../components/Aside2'
/* import Formulario from '../../components/Formulario'; */


//importaciones 
import imagenFondoNovedades from '../../images/rebotando-cancha.jpg'

export default function Novedades() {
  return (
    <main className='home'style={{ backgroundImage: `url(${imagenFondoNovedades})`, backgroundSize: 'cover', backgroundPosition: 'center center'  }} > 
    <Aside2 /> 
    

  </main>
  )
}