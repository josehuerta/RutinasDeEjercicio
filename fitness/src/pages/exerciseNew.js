import React from 'react'
import ExerciseForm from '../components/exerciseForm'
import Card from '../components/card'

//dividimos exercise new, la parte logica (exercisenewcontainer)
//y aparte la parte donde presentamaos la informacion
//que es en el return

//esto surge tras el paradigma presentational and cointainer
//que se refiere a separar la parte de ui y la parte logica

const ExerciseNew =({form,handleChange,handleSubmit})=>{
    return (
    <div className="row" >
                <div className="col-sm">
                    {/* pasamos el form como prop, en este caso
                    para no pasar cada campo del form de uno en uno como prop
                    ...form
            
                    a esto se le llama parametros spread */}
                    <Card  {...form}/>

                    {/* form es un objeto con estos atributos { title, description, img, 
                    leftColor, rightColor } y Card es un componente que espera los mismos, 
                    asi que regularmente hariamos algo como <Card title=form.title 
                    description=form.description img = form.img, leftColor=form.leftColor
                     rightColor=form.rightColor/> esto se hace muy extenso claro esta, 
                     asi que con la propiedad Parametros REST nos permite destruir el objeto 
                     y transferir todas sus propiedades encapsuladas en un array para que 
                     despues con destructuring podamos acceder a toda esa info sin necesidad 
                     de hacerlo de forma manual asi que ...form sera igual a title=form.title 
                     description=form.description img = form.img, leftColor=form.leftColor 
                     rightColor=form.rightColor, aqui te dejo la documentacion oficial de 
                     javascript sobre Parametros REST https://mzl.la/2KitnNy
                        & aqui la de Destructuring https://mzl.la/2X9q5hS */}

                </div>
                <div className="col-sm">
                    <ExerciseForm onChange={handleChange} 
                            form={form}
                            onSubmit={handleSubmit}/>
                </div>
            </div>
    )
}

export default ExerciseNew