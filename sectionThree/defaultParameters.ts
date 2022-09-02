// Parametros por defecto
const show =( name:string, lastname:string, age:number = 30)=>{
    return `his name is ${name} your lastname ${lastname} have ${age} years`
}
console.log(show('patricia','algo'))
console.log(show('victor','muñez'))