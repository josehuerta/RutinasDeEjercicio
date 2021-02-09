// cada componente tendra su propio archivo
import React from 'react'
// import excersiceImg from '../images/exercise.png'
//    aqui hemos definido una variable a la cual asignarle la ruta

import './styles/card.css' 
import circleImg from '../images/circles.png'
import emptyImg from '../images/empty.png'


// existen 2 tipos de datos que controlan un componente 
// las props: son establecidas al inicio y son fijas durante toda la vida del componente 
// el estado: es para los datos que van a cambiar durante la vida del componente

//ciclo de vida de react

//MONTADO
/*
metodos:

los siguiente metodos se ejecutan antes de que el componente sea montado
constructor(props){}
-inicializamos el estado del componente
-enlazamos eventos 
-seteamos variables globales

componentWillMount(){}
-puede modificar el estado
-aqui no se pueden hacer llamadas a apis
-aqui no se pueden realizar suscripciones a eventos

en este metodo ya se muestra/renderiza el componente
render(){}
-debe ser una funcion pura
-dentro de el no se debe modificar el estado

componentDidMount(){}
se ejecuta una ves que el componente ya se monto
-aqui es el mejor momento en que podemos madar llamar a las apis
-realizar suscripciones a eventos
-modificaciones al estado

*/
//ACTUALIZACION
/*
esta puede suceder N veces o incluso ninguna ves, sucede cuando algun dato del componente cambia
metodos
componentWillReceiveProps(nextProps){}
-recibe como parametro nuevas propiedades, las cuales sirven para realizar cambios en los estados
basado en esas nuevas propiedades

shouldComponentUpdate(nextProps,nextUpdate){}
-esta funcion se ejecuta antes de actualizar un componente, aqui podemos validar
si en verdad amerita renderizar de nuevo el componente basado en esas nuevas propiedades o no

componentWillUpdate(nextProps,nextUpdate){}
-este metodo se va a ejecutar una ves que el metodo anterior devuelva un true, es decir que 
realmente hayamos validado y necesitemos renderizar de nuevo el componente
-aqui podemos realizar cualquier tipo de preparacion antes de que se actualice el componente

render(){}
renderiza el componente con nuevos valores en sus propiedades o estados


*/
//DESMONTADO
/*
metodo:
componentWillUnmount(){}
-dejar de escuchar eventos
-desuscribirse de un websocket
-cancelaciones de peticiones http

este metodo regularmente se utiliza para hacer la limpieza, ya que 
se ejecuta antes de que un componente se desmonte

*/
//CONTROL DE ERRORES
/*
Se ejecuta al detectar un error al renderizar/montar un componente
metodo:
componentDidCatch(){}

*/


// class Card extends React.Component{
//     //para inicalizar los valores de los estados , debemos hacerlo en el constructor
//     // constructor(props){
//     //     super(props)
//     //     this.state={
//     //         image:'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/bulbasaur.png?alt=media&token=567caf19-af47-414e-a9d4-3854ab24c7dc'
//     //     }
//     // }
//     // componentDidMount(){
//     //     //esta funcion se ejecuta inmediatamente despues de que un componente se monte
//     //     setTimeout(() => {
//     //         this.setState({image:'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06'
//     //         })

//     //     }, 2000);
        
//     // }
//     render(){
//         const {title,description,img,leftColor,rightColor}=this.props
    
//         return (
//             <div className="card mx-auto Fitness-Card"
//             style={{
//                 backgroundImage:`url(${circleImg}) ,linear-gradient(to right,${leftColor||'#56CCF2'} ,${rightColor||'#2F80ED'})`
//             }}
//             >
//                 <div className="card-body">
//                     <div className="row center">
                
//                         <div className="col-6">
//                             <img src={img||emptyImg} className="float-right" alt="imagen"/>
//                         </div>
//                         <div className="col-6 Fitness-Card-Info" >
//                             <h1>{title}</h1>
//                             <p>{description}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
            
//         )
//     }
// }

//pasamos a card a un componente funcional, ya que 
//internamente en la definicion del componente, no se esta actualizando su estado
//o algo por el estilo
//simplemente recibia props

const Card=({title,description,img,leftColor,rightColor})=>{
   
    return(
        <div className="card mx-auto Fitness-Card"
            style={{
                backgroundImage:`url(${circleImg}) ,linear-gradient(to right,${leftColor||'#56CCF2'} ,${rightColor||'#2F80ED'})`
            }}
            >
                <div className="card-body">
                    <div className="row center">
                
                        <div className="col-6">
                            <img src={img||emptyImg} className="float-right" alt="imagen"/>
                        </div>
                        <div className="col-6 Fitness-Card-Info" >
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Card