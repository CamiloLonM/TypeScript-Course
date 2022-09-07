// interface genericas
// A diferencia de las clases "las Interfaces deben de tener un tipo de dato por default"
// <T=string> o Generando la interface ---  obj:Person<string>  se le asigna el tipo
// No pueden ser genericas, genericas. A la hora de su implementacion se le dice de que tipo de dato son


interface Person<T> {
    name:T
}


let obj:Person<string> = {name:'Manuel'}
let num:Person<number> = {name:21}