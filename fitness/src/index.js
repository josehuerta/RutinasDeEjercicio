//ANTES

// const element=document.createElement('h1')
// element.innerText='Hola mundo'
// const contenedor=document.getElementById('root')
// contenedor.appendChild(element)

//CON REACT JS
import React from 'react'
import ReactDom from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'

import App from './components/app'

// const element =<h1>Hola mundo </h1>
// Esta curiosa sintaxis de etiquetas no es ni un string ni HTML.

// Se llama JSX, y es una extensión de la sintaxis de JavaScript. Recomendamos 
// usarlo con React para describir cómo debería ser la interfaz de usuario. JSX puede 
// recordarte a un lenguaje de plantillas, pero viene con todo el poder de JavaScript.


// Puedes poner cualquier expresión de JavaScript dentro de llaves {operacion,variable o funcion}   en JSX. 
// Por ejemplo, 2 + 2, user.firstName, o incluso funcionces como  sumar(2,2) y que retorne el valor de esa suma
// por ejemplo
// const name = 'Josh Perez';
// const element = <h1>Hello, {name}</h1>;

const contenedor=document.getElementById('root')

              // elemento a renderizar, donde lo vamos a renderizar
ReactDom.render(<App /> ,contenedor)

//Los componentes permiten separar la interfaz de usuario en piezas independientes, reutilizables
// y pensar en cada pieza de forma aislada.

//Un elemento es a un componente , lo que un objeto a una clase

//identificar componentes en una aplicacion

//que elementos se repiten en la interfaz de usuario?
//que elementos cumplen una funcion en especifico?

//pe netflix, 
//las peliculas se repite el formato de como se presentan 
//la casilla de informacion de usuario
//la casilla log out
//barra de navegacion y las opciones que vienen ahi , como division de
//peliculas , series o documentales
