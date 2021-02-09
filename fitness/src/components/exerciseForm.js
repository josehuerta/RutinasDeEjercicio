import React from 'react'

class ExerciseForm extends React.Component{
    

    //EVENTOS-EJEMPLO CON EVENTO CLICK
    //por convencion cuando asociamos una funcion a un evento
    //se le coloca de prefijo handle

    //las arrowfunctions crean un enlace para que this funcione dentro del callback
    //callback, es la respuesta a una llamada hecha desde otro lugar
    //ejemplo de callback:
    // una función "A" que se usa como argumento de otra función "B". 
    // Cuando se llama a "B", ésta ejecuta "A". para poder dar un resultado

    // handleClick=()=>{
    //     console.log(this.props)
    // }
    state = {}

    //When an event occurs in HTML, the event belongs to a certain event 
    //object, like a mouse click event belongs to the MouseEvent object.
    // https://developer.mozilla.org/es/docs/Web/API/Event
    
    
    render(){
        const {onChange,form,onSubmit}=this.props
        
        return (

            <div className="container">
                
            <form 
                onSubmit={onSubmit}
            >
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="title" 
                        name="title"
                        onChange={onChange}
                        value={form.title}

                        // teniamos 2 fuentes de informacion el value del input y
                        // el estate con el nombre del input , podiamos obtener informacion
                        // de ambos, para que la informacion sea la misma, tanto accediendo
                        // por value como por el state, a value le igualamos el state
                        // esto solo para asegurar que la informacion a obtener sea la misma
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="description" 
                        name="description"
                        onChange={onChange}
                        value={form.description}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="img" 
                        name="img"
                        onChange={onChange}
                        value={form.img}
                    />
                </div>
                <div className="form-row">
                    <div className="col">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="leftColor" 
                            name="leftColor"
                            onChange={onChange}
                            value={form.leftColor}
                        />
                    </div>
                    <div className="col">
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="rightColor" 
                            name="rightColor"
                            onChange={onChange}
                            value={form.rightColor}
                        />    
                    </div>
                </div>
                
                <button 
                    type="submit" 
                    className="btn btn-primary"
                >
                    Submit
                </button>
            </form>
        </div>
        )
    }
}

export default ExerciseForm