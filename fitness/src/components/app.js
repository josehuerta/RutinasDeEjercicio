import React from 'react'

import {BrowserRouter,Route, Switch} from 'react-router-dom'

import ExercisesContainer from '../pages/exercisesContainer'
import NotFound from '../pages/notFound'
import ExerciseNewContainer from '../pages/exerciseNewContainer'

import Example from './example'

const App=()=>{
    return(
        <BrowserRouter>
            <Switch>
            {/* colocamos exact ya que la primera y segunda ruta comienzan igual y pueden ser confundidas
            por ende se termina mostrando el contenido de ambas al mismo tiempo,lo cual
            no seria correcto. */}
                <Route exact path="/exercise/" component={ExercisesContainer} />
                <Route exact path="/exercise/new" component={ExerciseNewContainer} />
                
                <Route exact path="/" component={Example}/>

                {/* la pagina de abajo se observara cuando se solicite una 
                ruta que no existe, por ello es que no le colocamos ni path ni exact */}
                
                <Route component={NotFound} />

                {/* switch aqui nos ayudo como un tipo switch case, es un seleccionador
                de las rutas que se estan requiriendo y hasta el final el componente
                notFound que es como nuestro default, si la ruta requerida no se parecio
                a ninguna de las de arriba, el Route a ejecutarse sera el del componente
                NotFound */}
            </Switch>
        </BrowserRouter>
    ) 

}
export default App