import React,{useState,useEffect} from 'react'

import Loading from '../components/loading'
import UnexpectedError from '../components/500'

import Exercises from './exercises'

import useFetch from '../hooks/useFetch' //creamos nuestro propio hook


import url from '../config'

// class ExercisesCointainer extends React.Component{
//     //en es7 ya no necesitamos inicializar el estado en el constructor
//     //con this.state={}, simplemente hacemos uso de state
//     //esto por que create-react-app desde la v=3.0.0 contiene un compilador llamado babel
//     //el cual compila codigo de nueva generacion, a generaciones pasadas 
//     //de acuerdo al navegador en que estemos
//     state={
//             data:[],
//             loading:true, 
//             error:null
//         }
    
//     async componentDidMount(){
//         //await nos  sirve para detener unos momentos la ejecucion de la funcion
//         // hasta que la promesa que nos devuelve algo sea resuelta
//         //y asi poder trabajar con el resultado de esa promesa

//         //await puede ser utilizado por que arriba hemos utilizado async

//         await this.fetchExercises()
        
//     }

//     fetchExercises=async ()=>{
//         //el valor que retorna fetch es una promesa
//         //await es muy util por que nos sirve para que se espere siempre
//         //hasta que la promesa arroje un resultado y asi poder trabajar 
//         //con un valor 

//         try{
//             let res= await fetch('http://localhost:8000/api/exercises')
//             let data =await res.json()
//             //en nuevas versiones de js cuando la clave y el valor 
//             //tienen el mismo nombre, bastara con solo colocar una ves
//             //en ves de hacer data:data
//             this.setState({data,loading:false})
//         }
//         catch(error){
//             this.setState({loading:false, error})
//         }
        
//     }


//     render(){
//         if (this.state.loading){
//             return <Loading />
//         }
//         if (this.state.error){
//             return <UnexpectedError />
//         }
        
//         return(
//             <Exercises data={this.state.data}/>
//         )
//     }
// }

//PASAREMOS LA CLASE A UN HOOK

const ExercisesCointainer=()=>{
    //por convencion la funcion que modificara la variable
    //sera set+nombreVariable
    // const [data,setData]=useState([])
    // const [loading,setLoading]=useState(true)
    // const [error,setError]=useState(null)
    

    //efect sirve para que podamos decirle a react que el componente debe
    //hacer algo despues de renderizarse, es parecido a componentDidMount
    //o componentDidUpdate

    //effect se ejecuta justo despues del primer renderizado y tambien 
    // despues de cada update , de nuestro componente

    // useEffect(()=>{
    //     const fetchExercises=async ()=>{
    //         //el valor que retorna fetch es una promesa
    //         //await es muy util por que nos sirve para que se espere siempre
    //         //hasta que la promesa arroje un resultado y asi poder trabajar 
    //         //con un valor 

    //         try{
    //             let res= await fetch('http://localhost:8000/api/exercises')
    //             let data =await res.json()
    //             //en nuevas versiones de js cuando la clave y el valor 
    //             //tienen el mismo nombre, bastara con solo colocar una ves
    //             //en ves de hacer data:data
    //             setData(data)
    //             setLoading(false)
    //         }
    //         catch(error){
    //             setLoading(false)
    //             setError(error)
    //         }
        
    //     }
        
    //     fetchExercises()

    // },[])
    //el [] le indica a react que se ejecutara efect solo si las variables
    //data,loading y error han cambiado, [] puede colocarse o no, dependiendo
    //de las necesidades
    //para mas info
    //https://es.reactjs.org/docs/hooks-effect.html
    //ctrl+f [] , para ubicar la informacion de forma mas rapida
    
                            //utilizamos el hook que hemos creado
    const {data,loading,error}=useFetch(url)
    if (loading){
        return <Loading />
    }
    if (error){
        return <UnexpectedError />
    }
    
    
    return <Exercises data={data}/>
        
    
}


// react router
// es una coleccion de componentes de navegacion dinamica

// MPA=Multiple Page App, aplicacion de varias paginas, que se obtienen desde el servidor
// SPA=Single Page Application, sobre una misma pagina mostramos diferentes componentes, dadas
// ciertas condiciones, cambia el contenido de forma reactiva, sin necesidad de hacer un reload

export default ExercisesCointainer