// Propiedad de solo lectura  readonly
// No se puede modificar ya que es lo lectura

interface Person{
    readonly name:string
    lastname:string
}

let person: Person = {name:'Pipo', lastname:'Algo'}

// person.name= 'Carlos' No lo permite


console.log(person)