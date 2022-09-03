// get y set .... sirve para interceptar a un mienbro de un objeto
// tener control sibre las propiedades de nuestra clase
var permission = false;
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Object.defineProperty(Person.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setName", {
        set: function (name) {
            if (permission) {
                this.name = name;
            }
            else {
                console.log('No permission - Access denied!!!');
            }
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var obj = new Person('Carlos');
obj.setName = 'Alguien';
console.log(obj.getName);
