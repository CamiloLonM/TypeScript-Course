// Clase de tipo generico: Se dice que es generico porque dentro
// puede contener tanto atributos como funciones genericas

// porque la clase en si ya tiene un tipo por defeault Ejm 
//class Person<T>{ }   const obj = new person()   Ya seria de clase persona o generica

class Person<T>{
    name:string
    age:T
    
    Show:(dato:T)=>T 
}

const obj = new Person()