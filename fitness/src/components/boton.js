import React from 'react'
import './styles/boton.css'
import { Link } from 'react-router-dom'

const Boton=(props)=>{
    return(
        //link nos lleva a esa ruta sin que la pagina se recargue
        <Link to="/exercise/new"> 
        <img alt="imagen " className="Fitness-Add" src="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/add.png?alt=media&token=fbe1d973-4b4f-42d8-b76e-2c4354f6ed9d" />
        </Link>
        
    )
}

export default Boton