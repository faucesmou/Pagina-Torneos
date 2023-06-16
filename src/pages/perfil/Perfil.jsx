import Aside2 from '../../components/Aside2'
import imagenFondoPerfil from '../../images/rebotando-cancha.jpg'



export default function Perfil() {

  
  return (
    <main className='home' style={{ backgroundImage: `url(${imagenFondoPerfil})`, backgroundSize: 'cover', backgroundPosition: 'center center'  }}> 
    <Aside2 /> 
    

  </main>
  )
}
