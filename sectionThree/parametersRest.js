// parametro Rest tiene que ser de tipo que asigne
// ... Recibe una Rai de objetos para luego mostrarlos ...fruits:string[]
var dessertMenu = function (dessert) {
    var fruits = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        fruits[_i - 1] = arguments[_i];
    }
    console.log("The dessert is ".concat(dessert, " and have ").concat(fruits));
};
dessertMenu('dessertOne', 'orange', 'mandarin');
