// Hacer que un parametro sea opcional ?  Ejm... name seria opcional
var person = { height: 2, weight: 120, name: 'Camilo' };
function showMeasurePerson(person) {
    var measureWeight = person.height / person.weight;
    if (person.name) {
        return "".concat(person.name, " has a measure of ").concat(measureWeight);
    }
    else {
        return "I don't know who you are but you have a weight of ".concat(measureWeight);
    }
}
console.log(showMeasurePerson(person));
