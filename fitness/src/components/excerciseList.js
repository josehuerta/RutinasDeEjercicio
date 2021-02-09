import React from 'react'
import Card from './card'

const ExerciseList=(props)=>{

// otra forma de hacer la linea de arriba seria 
// const ExerciseList=({exercises}), destructuramos las props y solo
// obtenemos a exercises, asi abajo evitariamos colocar
// props. antes de exercises

    return (
        <div>
            {props.exercises.map((exercise)=>{
                    return (
                        <Card title={exercise.title}
                            key={exercise.id}  
                            description={exercise.description} 
                            img={exercise.img}
                            leftColor={exercise.leftColor}
                            rightColor={exercise.rightColor} 
                            
                        />
                    )
                })
            }

        </div>
    )
}

export default ExerciseList