//Modificador de acceso PUBLICO Es accesible global    .... Ejm tiene dos propiedades name y size

class Animal{
    public name:string
    public size:number

    public constructor(_name:string, _size:number){
        this.name = _name
        this.size = _size
    }

    // El metodo moverse es por modifcacion publica 
    public move():void{
        console.log('Im moving')
    }
}

const obj = new Animal('horse', 3)
