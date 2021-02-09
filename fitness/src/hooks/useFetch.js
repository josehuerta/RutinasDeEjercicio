//crearemos nuestro propio hook
//custon hooks
import {useState,useEffect} from 'react'

const useFetch=url=>{
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(null)

    useEffect(()=>{
        const fetchResource=async ()=>{
            //el valor que retorna fetch es una promesa
            //await es muy util por que nos sirve para que se espere siempre
            //hasta que la promesa arroje un resultado y asi poder trabajar 
            //con un valor 

            try{
                let res= await fetch(url)
                let data =await res.json()
                //en nuevas versiones de js cuando la clave y el valor 
                //tienen el mismo nombre, bastara con solo colocar una ves
                //en ves de hacer data:data
                setData(data)
                setLoading(false)
            }
            catch(error){
                setLoading(false)
                setError(error)
            }
        
        }
        
        fetchResource()

    },[url])

    //para poder usar parametros en useEffect los podemos pasar mediante 
    //el segundo parametro de la funcion, dentro de un array
    
    return {data,loading,error}

}

export default useFetch