import React from 'react'
import img2 from './imagenes/imagen2.jpg'

const Inicio = () => {
  return (
    <div>
      <h3 className='titulo'>¿Quiénes somos?</h3>
      <div className='contenedor1'>
        <img src={img2} className='img2' />
        <div className='aboutUs'>
            <h1 className='nombreEmpresa'>C.A.C. Abogados S.A.S </h1>
            <p>Es una de las compañías de cobranzas más reconocidas, con presencia a nivel nacional y 20 años de experiencia entregando resultados eficaces a quienes nos eligen como sus aliados estratégicos.
            Somos una Firma especializada en la administración, normalización y recuperación de cartera en las diferentes etapas de cobro, prestamos servicios de Call Center, Contac center y BPO.</p>
            <h2 className='text1'>¡Somos su aliado estratégico!</h2>
        </div>
      </div>
    
      <div className='contenedor1'>
        <div className='mision'>
        <h1>Misión</h1>
        <p>C.A.C. ABOGADOS S.A.S., es una compañía de prestación deservicios BPO&O (Business Procesing outsourcing & Offshorining,especializados en el Cobro de Cartera, en las etapas: Preventiva,Pre-jurídica y Jurídica; para empresas de los sectores financiero,real y público.</p>    
        </div>

        <div className='vision'>
        <h1>Visión</h1>
        <p>En C.A.C. ABOGADOS S.A.S., trabajamos para ser su aliado estratégico, adaptando permanentemente nuestro portafolio deservicios a las necesidades del mercado; dando valor agregado y confianza a nuestros clientes. Seguiremos siendo una empresa alineada con el cumplimiento de las necesidades de nuestras partes interesadas, fortaleciendo las competencias del talento humano, reforzando nuestros servicios con una avanzada infraestructura tecnológica y herramientas digitales.</p>
        </div>
     
      </div>
      
    </div>
  )
}

export default Inicio
