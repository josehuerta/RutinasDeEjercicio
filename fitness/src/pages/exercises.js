import React from 'react'
import Welcome from '../components/welcome'
import ExersiceList from '../components/excerciseList'
import Boton from '../components/boton'

const Exercises=({data})=>{
    return(
        // react fragmet evita que usemos div como contenedores. lo cual a nivel de
            // html nos va a hacer tener muchos divs , otra forma es usando solo <> y </>
            // pero estos no son soportados aun por todos los navegadores
            <React.Fragment>   
                <Welcome userName="Lalo" />
                <ExersiceList exercises={data}/>
                <Boton />
                    
            </React.Fragment>
    )

}

export default Exercises