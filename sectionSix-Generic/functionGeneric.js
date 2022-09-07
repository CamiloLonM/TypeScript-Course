// Funcion generica , la < T > es por Convencion, tambien recibe una interfas
//Funcion normal
function show(fact) {
    return fact;
}
console.log(show('Marcos'));
// Funcion generica <convencion>  recibe tipo generica , parametro generico y devuelve dato generico
function showGeneric(fact) {
    return fact;
}
var d = showGeneric(22);
//d.
//console.log(showGeneric('jose'))
