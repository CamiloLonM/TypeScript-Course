// Hacer que un parametro sea opcional ?  Ejm... name seria opcional
// se puede tener tantos parametros opcionales los que quiera


interface Persons{
    height:number
    weight:number
    name?:string
}

let person = {height:2, weight:120, name:'Camilo'}

function showMeasurePerson(person:Persons):string{
    let measureWeight:number = person.height / person.weight
    if(person.name){
        return `${person.name} has a measure of ${measureWeight}`
    } else {
        return `I don't know who you are but you have a weight of ${measureWeight}`
    }
}
console.log(showMeasurePerson(person))