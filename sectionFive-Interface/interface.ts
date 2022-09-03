// Esta define una serie de atributos (Sin ser definidos) y propiedades pudiendo generar variables nuevas del tipo Ejm persona

interface Person{

    //Atributos
    name:string
    lastname: string
}

// Interfas defino un atributo como objeto ... ejm variable de tipo persona 
function walk(person:Person):void {
    console.log('The person ' + person.name + ' is walking')
}

// Atributos Nuevos
let new_person = {name: 'Pedro', lastname:'algo', age:32}
walk(new_person)

//Si defino que la variable de tipo interface (Person) los atributos o propiedades  No se puede agregar 
// let new_person:Person = {name: 'Pedro', lastname:'algo', age:32}


