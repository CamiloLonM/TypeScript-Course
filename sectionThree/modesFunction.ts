// Diferencias de una funcion de java a typescript
// Dos funciones que son iguales pero se trabajan diferente (Funcion normla y arrow )

//tipo void ningun tipo
//tipo any: cualquier tipo

function show():void {
    console.log('Function One')
}

const showTwo = ():void => {
    console.log('Function Two')
}

show()
showTwo()

//Recibiendo un parametro
const showThree = (a:string):void => {console.log('a')}
