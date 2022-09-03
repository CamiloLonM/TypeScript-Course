class Car {
    //Propiedades
    brand:string
    model:number
    color:string

    //Cuando se crea una istancia de esa clase... Se ejecuta automaticamente este metodo de los atributos
    // para que no choque con las propiedades de la class Car
    // This hace referencia a Car

    constructor(brand_:string,model_:number,color_:string) {
        //inicializamos propiedades
        this.brand = brand_
        this.model = model_
        this.color = color_
    }

    // Metodos-funciones
    speed():void{
        console.log('im accelerating!!!!')
    }
    brake():void{
        console.log('im holding back!!!!')
    }
}

// Instancia del car
const car = new Car('Ford',1992,'red')
// Aceder a las propiedades y metodos()
car.brand
car.color
console.log(car.brand,car.speed())
