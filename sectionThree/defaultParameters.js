// Parametros por defecto
var show = function (name, lastname, age) {
    if (age === void 0) { age = 30; }
    return "his name is ".concat(name, " your lastname ").concat(lastname, " have ").concat(age, " years");
};
console.log(show('patricia', 'algo'));
console.log(show('victor', 'muñez'));
