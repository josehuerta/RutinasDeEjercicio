import React,{useState} from 'react'
//EJEMPLO DEL USO DE HOOKS, EL CUAL ENTRE MUCHAS COSAS,NOS PERMITE
//HACER EL USO DEL ESTADO SIN LA NECESIDAD DE TRABAJAR
//CON UNA CLASE
// class Example extends React.Component{
//     state={
//         count:0
//     }
//     handleClick=()=>{
//         this.setState(
//             {
//                 count:this.state.count+1
//             }
//         )
//     }
//     render(){
//         return(
//             <div>
//                 <p>Count : {this.state.count}</p>
//                 <button onClick={this.handleClick}>Click to add</button>
//             </div>
//         )
//     }
// }
const Example=()=>{
    //useState es un hook que nos permite utilizar el estado dentro de un componente
    //funcional
    //[varaible,funcion] ,(valor del estado inicial que tendra nuestra variable)
    //variable=sera quien guarda el valor del estado
    //funcion=funcion que va a actualizar el valor de la variable
    //el nombre de la funcion puede ser el que sea sin embargo se recomienda
    //colocar el prefijo set+nombreVariable , indicando que es quien modificara a la variable
    const [count,setCount]=useState(0)
    //setCount en su interior simplemente hace lo que hace cualquier set
    //setCount(valor){count=valor }

    return(
        <div>
            <p>Count : {count}</p>
            <button onClick={()=>setCount(count+1)}>Click to add</button>
        </div>
    )
}

export default Example