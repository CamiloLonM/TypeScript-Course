// Importar

// Para imprimir por consola
// tenemos que compilar los dos archivos con tsc  y luego en node compilar la constante 
// import {names} from './moduleA'
// console.log(names)



import {name, Person,Human, show } from './moduleA'

// destructuración objeto
const human:Human = { name: 'Coco'}
show('Coco')

// Importar con alianza - IMPORTACION GLOBAL  NO RECOMENDABLE

// import * as paquete from './moduleA'

// const human:paquete = { name: 'Coco'}
// show('Coco')
// paquete.person .... etc Human ....