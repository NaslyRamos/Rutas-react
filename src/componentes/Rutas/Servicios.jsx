import React from 'react'
import servicio1 from './imagenes/servicio1.jpg'
import servicio2 from './imagenes/servicio2.jpg'
import servicio3 from './imagenes/servicio3.jpg'
import servicio4 from './imagenes/servicio4.png'
import servicio5 from './imagenes/servicio5.png'
import servicio6 from './imagenes/servicio6.png'

const Servicios = () => {
  return (
    <div>
          <h3 className="titulo">Servicios</h3>

          <div className="contenedor3">
            <div className="servicio">
              <img src={servicio1}/>
              <h3>Cobro administrativo y cobro pre jurídico</h3>
            </div>

            <div className="servicio">
              <img src={servicio2} />
              <h3>Cobro jurídico y gestión dual</h3>
            </div>

            <div className="servicio">
              <img src={servicio3} />
              <h3>Call center</h3>
            </div>

            <div className="servicio">
              <img src={servicio4} />
              <h3>Asesoría Jurídica</h3>
            </div>

            <div className="servicio">
              <img src={servicio5} />
              <h3>Compra de cartera</h3>
            </div>

            <div className="servicio">
              <img src={servicio6} />
              <h3>Televentas</h3>
            </div>
          </div>
    </div>
   
  
  )
}

export default Servicios
