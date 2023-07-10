import React from 'react';
import Aside2 from '../../components/Aside2';
import Formulario from '../../components/Formulario';
import imagenFondoRegistro from '../../images/login.jpeg'



export default function registroPagina() {
  return (
    <main className='home' style={{ backgroundImage: `url(${imagenFondoRegistro})`, backgroundSize: 'cover', backgroundPosition: 'center center'  }}> 
  
      <Aside2 />
      <Formulario />
      {/* Rest of the contact page content */}
   
    </main>
  );
};
