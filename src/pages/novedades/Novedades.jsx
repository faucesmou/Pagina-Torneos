import React from 'react'
import Aside2 from '../../components/Aside2'
/* import Tabla from '../../components/Tabla'; */
import ResultadosTabla from '../../components/ResultadosTabla';


//importaciones 

import imagenFondoNovedades from '../../images/saltoAlto.jpg'

export default function Novedades() {
  return (
    <main className='home'style={{ backgroundImage: `url(${imagenFondoNovedades})`, backgroundSize: 'cover', backgroundPosition: 'center center'  }} > 
    <Aside2 /> 
   {/*  <Tabla />  */}
    <ResultadosTabla />

    

  </main>
  )
}