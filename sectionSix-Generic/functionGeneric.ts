// Funcion generica , la < T > es por Convencion, tambien recibe una interfas

//Funcion normal
function show(fact:string):string{
    return fact
}
console.log(show('Marcos'))

// Funcion generica <convencion>  recibe tipo generica , parametro generico y devuelve dato generico
function showGeneric<T>(fact:T):T{
    return fact
}

const d = showGeneric(22)
//d.

//console.log(showGeneric('jose'))