// Modificador PROTEGIDO.....restringe la visibilidad de los atributos de la clase sólo a esta clase.

class Dad{
    protected name:string

    public constructor(name_:string){
        this.name = name_
    }

}

class Son extends Dad{
    public lastname:string

    constructor(name_:string, lastname_:string){
        super(name_)
    }
    showName():void{
        console.log(this.name)
    }
}
const obj = new Son('Danilo','algo')
//obj.