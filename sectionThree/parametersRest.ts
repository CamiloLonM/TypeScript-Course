
// parametro Rest tiene que ser de tipo que asigne
// ... Recibe una Rai de objetos para luego mostrarlos ...fruits:string[]


const dessertMenu =(dessert:string, ...fruits:string[] ):void => {
    console.log(`The dessert is ${dessert} and have ${fruits}`)
}
dessertMenu('dessertOne','orange','mandarin')