// Son los parametros que por implementacion de nuestro pryecto podemos y no podemos tener
// opcional = ?
var optional = function (name, lastname, age) {
    if (age) {
        console.log("his name is ".concat(name, " your lastname ").concat(lastname, " have ").concat(age, " years"));
    }
    else {
        console.log("his name is ".concat(name, " your lastname ").concat(lastname, " have ").concat(age, " years"));
    }
};
optional('camilo', 'nose', 40);
