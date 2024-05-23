import React from 'react'
import valor1 from './imagenes/valor1.png'
import valor2 from './imagenes/valor2.png'
import valor3 from './imagenes/valor3.png'

const Valores = () => {
  return (
    <div>
      <h3 className='titulo'>Principios</h3>
      <div className='contenedor2'>

            <div className='text2'>
                <img src={valor1} />
                <h3 >VALOR ÉTICO</h3>
                <p>Actuar con profesionalidad, moral, lealtad y respeto a las personas.</p>
            </div>

            <div className='text2'>
                <img src={valor2} />
                <h3 >TRABAJO EN EQUIPO</h3>
                <p>Impulsar la colaboración, comunicación, coordinación, confianza y compromiso, enseñando a todos a trabajar y encarar los retos como equipo.</p>
            </div>

            <div className='text2'>
                <img src={valor3} />
                <h3 >GESTIÓN DEL TALENTO HUMANO</h3>
                <p>Atraer, desarrollar, involucrar y fidelizar talento humano comprometido, para el logro de los resultados.</p>
            </div>
        </div>

        <div>
            <h3 className='titulo'>Valores corporativos</h3>
            <div className='valor-corporativo'>
                <h3>INSPIRAR A LA EXCELENCIA</h3>
                <p>° El buen servicio no puede ser intermitente, debe ser permanente que garantice la satisfacción de nuestros clientes.</p>
                <p>° Superarse día a día siendo ejemplo e influencia positiva de las buenas prácticas en la organización.</p>

                <h3>CRECIMIENTO Y DESARROLLO</h3>
                <p>Transmitiendo y motivando el cambio personal y avance profesional de toda la familia CAC Abogados.</p>

                <h3>COMUNICACIÓN CONSTRUCTIVA</h3>
                <p>Interactuando de manera eficaz y productiva entre las partes interesadas.</p>
            </div>
        </div>

    </div>
  )
}

export default Valores
