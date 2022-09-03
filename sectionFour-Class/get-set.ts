// get y set .... sirve para interceptar a un mienbro de un objeto
// tener control sibre las propiedades de nuestra clase

let permission:boolean = false

class Person{
    public name:string

    constructor(name:string) {
        this.name =name
    }

    // Permite Leer un valor  ¡¡ No recibe argumentos como parametros !!
    get getName():string{
        return this.name
    }

    // Establecer una valor  ¡¡Obligatoriamente recibe un argumento!!
    set setName(name:string){
        if(permission){
            this.name =name
        } else {
            console.log('No permission - Access denied!!!')
        }
        
    }
}

const obj = new Person('Carlos')
obj.setName = 'Alguien'
console.log(obj.getName)