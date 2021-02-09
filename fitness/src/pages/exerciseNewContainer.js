import React from 'react'

import UnexpectedError from '../components/500'
import ExerciseNew from './exerciseNew'

class ExerciseNewContainer extends React.Component{
    
    state={
        form:{
            title:'',
            description:'',
            img:'',
            leftColor:'',
            rightColor:''
        },
        loading:false,
        error:null
    }
    //levantamos el estado, el hijo le comparte informacion al padre
    //y el componente padre de igual manera interactua con el hijo
    
    handleChange =( e ) => {
        //todos los input tienen este evento
        // lo que sucedera es que cada que escribamos algo 
        //se actualizara o creara(en caso de ser la primera ves que escribimos)
        //el campo description,title, etc , en el estado
        this.setState({
            form:{
                ...this.state.form, //esta linea hace que no se sobreescriba el campo form
                //ya que cada que nos cambiabamos a escribir a diferente input
                //se creaba un nuevo objeto form en el state
                [e.target.name]: e.target.value 
            // utilizamos parentesis cuadrados por que para el nombre de los campos
            // los puntos mandan error

            //the prop target of the event returns the element that triggered the event
            }
            
        })
    }
    handleSubmit = async e => {
        //la linea de abajo evita que se recargue la pagina 
        //ya que al dar click en el boton , es como si se hiciera
        //un post , entonces por naturaleza la pagina interpreta 
        //que se ira a otra ruta pero no es asi
        e.preventDefault()

        this.setState({loading:true})
        //para hacer un post, debemos escribir un objeto de configuracion

        try {
            let config={
                method:'post',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(this.state.form)
            }
            //if we do not put a config objec, the fetch will do a get request
            //i will not do a post request    
            let response=await fetch('http://localhost:8000/api/exercises',config)
            let json= await response.json()
            console.log(json)
            this.setState({loading:false})
            this.props.history.push('/exercise')

        } catch (error) {
            this.setState({loading:true,error})

        }
        
        console.log(this.state)
    }
    render(){
        if (this.state.error){
            return <UnexpectedError />
        }
        return(
            //pasamos handleChange a ExerciseForm , como una prop
            //quien maneja ahora el cambio de estado es ExerciseNew y no
            //ExerciseForm

            //algo asi como haber hecho que ExerciseForm heredara ese metodo de ExerciseNew, y
            //posteriormente pueda usarlo cuando y como guste

            //lo que sucede al pasar una funcion como prop de un componente
            //es que cuando ese componente haga uso de la funcion 
            //quien notara los resultados es el padre, mas no el hijo, que es quien
            //ejecuto la funcion
            //https://www.youtube.com/watch?v=mcgk-NEmaQw
            <ExerciseNew 
            form={this.state.form}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            />

            
            
        )
    }
    
}

export default ExerciseNewContainer