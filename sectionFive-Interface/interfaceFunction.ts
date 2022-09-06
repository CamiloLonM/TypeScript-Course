// Interface con funciones 
// Que parametros va a recibir, de que tipo van a ser, los parametros y cual es su funcion 
// Va a ser una plantilla


//Plantilla para la funcion
interface General{
    (name:string, lastname:string, age:number)   // cantidad y tipo de parametros
}


//variable
let functionGeneralOne:General

//Defino que va a ser
functionGeneralOne = function(name:string,lastname:string, age:number):void{
    console.log(`${name} ${lastname} with age: ${age}`)
}

functionGeneralOne('Pocholo','Algo', 24)