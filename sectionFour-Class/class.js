var Car = /** @class */ (function () {
    //Cuando se crea una istancia de esa clase... Se ejecuta automaticamente este metodo de los atributos
    // para que no choque con las propiedades de la class Car
    // This hace referencia a Car
    function Car(brand_, model_, color_) {
        //inicializamos propiedades
        this.brand = brand_;
        this.model = model_;
        this.color = color_;
    }
    // Metodos-funciones
    Car.prototype.speed = function () {
        console.log('im accelerating!!!!');
    };
    Car.prototype.brake = function () {
        console.log('im holding back!!!!');
    };
    return Car;
}());
// Instancia del car
var car = new Car('Ford', 1992, 'red');
// Aceder a las propiedades y metodos()
car.brand;
car.color;
console.log(car.brand, car.speed());
