import React from 'react'
import '../css/aside2.css';

export default function Aside2() {
  return (
    <div className='Aside2ContainerMayor' width='100%'>
    <div className='Aside2ContainerMenor' >Aside2Container
    <svg className='menuAside'></svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
  <circle cx="100" cy="100" r="50" fill="red" />
</svg>
<span className='Aside2Titulo'>Mis Ligas</span>
<div className='Aside2Listado'>
    <div className='Aside2ListadoItem' title= 'Argentina'></div>
    <div className='Aside2ListadoItem' title= 'Chile'></div>
    <div className='Aside2ListadoItem' title= 'Brasil'></div>
</div>
    </div>
    </div>
  )
}
