import React from 'react'
import imgPrin from './imagenes/cac-abogados.png'
import Inicio from './Inicio'
import Valores from './Valores'
import Servicios from './Servicios'
import Instalaciones from './Instalaciones'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import correo from './imagenes/email.png'
import pbx from './imagenes/computer.png'

const Principal = () => {
  return (
    <>
    <img src={imgPrin} className='imagenPrincipal'/>
   
    <BrowserRouter>
    <div className="links-container">
      <Link to="/Inicio" className="link">Inicio</Link>
      <Link to="/valoresPrincipios" className="link">Principios / Valores</Link>
      <Link to="/servicios" className="link">Servicios</Link>
      <Link to="/instalaciones" className="link">Instalaciones</Link>
    </div>

    <Routes>
    <Route path='/Inicio' element={<Inicio/>}></Route>
    <Route path='/valoresPrincipios' element={<Valores/>}></Route>
    <Route path='/servicios' element={<Servicios/>}></Route>
    <Route path='/instalaciones' element={<Instalaciones/>}></Route>
  
    </Routes>

    </BrowserRouter>
    <div className='container-footer'>
      <h1>Datos de Contacto: </h1>
      <img src={correo} />
      <p>cac@abogadoscac.com.co</p>
      <img src={pbx} />
      <p>PBX: 601 6068191</p>
    </div>
    
   
    </> 
  )
}

export default Principal