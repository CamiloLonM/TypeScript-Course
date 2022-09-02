// Diferencias de una funcion de java a typescript
// Dos funciones que son iguales pero se trabajan diferente (Funcion normla y arrow )
//tipo void ningun tipo
//tipo any: cualquier tipo
function show() {
    console.log('Function One');
}
var showTwo = function () {
    console.log('Function Two');
};
show();
showTwo();
//Recibiendo un parametro
var showThree = function (a) { console.log('a'); };
