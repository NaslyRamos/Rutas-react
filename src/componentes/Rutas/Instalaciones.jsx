import React from 'react'
import sede1 from './imagenes/sede1.jpg'
import sede2 from './imagenes/sede2.jpg'

const Instalaciones = () => {
  return (
    <div>
      <h3 className='titulo'>Instalaciones</h3>
      <div className='contenedor4'>
        <div className='soledad'>
          <h2>Sede Soledad</h2>
          <img src={sede1}/>
          <h3>Dirección:</h3>
          <p>Av. Cra 28 #39 b -03</p>
        </div>
        <div className='lourdes'>
          <h2>Sede Lourdes</h2>
          <img src={sede2}/>
          <h3>Dirección:</h3>
          <p>Cra.13 # 63-39 piso 11</p>
        </div>
       

      </div>
    
    </div>
  )
}

export default Instalaciones
