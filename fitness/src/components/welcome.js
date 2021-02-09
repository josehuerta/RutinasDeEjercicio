import React from 'react'
import './styles/welcome.css'
const Welcome=(props)=>{
    const{userName}=props
    return(
        <div className="container">

            <div className="Fitness-User-Info">
                <h1>Hello {userName}</h1>
                <p>Lets workout to get some gains!</p>
            </div>
        </div>
    )
}

//la diferencia con los componentes de clase
//es que con los componente funcionales, solo podemos trabajar con las props
// y no tenemos cosas como el estado o el ciclo de vida
//recordar que las props son aquellos valores que no tenderan a cambiar 
//tras haber sido establecidos

export default Welcome