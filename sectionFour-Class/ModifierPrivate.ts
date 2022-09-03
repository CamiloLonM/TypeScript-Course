// Modificador de acceso PRIVADO   Solo son acecibles dentro de la clase donde se difine  {  }
// Ejm tiene dos propiedades name y size

class Animal{
    private name:string
    private size:number

    public constructor(_name:string, _size:number){
        this.name = _name
        this.size = _size
    }

    // El metodo moverse es por modifcacion PUBLICA-PRIVADA-
    public move():void{
        console.log('Im moving')
    }
}

const obj = new Animal('horse', 3)