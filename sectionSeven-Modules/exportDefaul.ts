// EXPORT DEFAULT
// Me permite exportar todo el objeto por default

class Person{
    name:string
    age:number
    height:number

    constructor(name,age,height){
        this.name = name
        this.height = height
        this.age = age
    }

    show():void{
         console.log('this.name')  
    }
}   

export default Person

