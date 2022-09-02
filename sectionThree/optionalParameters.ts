// Son los parametros que por implementacion de nuestro pryecto podemos y no podemos tener

// opcional = ?

const optional = (name:string,lastname:string,age?:number) =>{
    if(age){
        console.log(`his name is ${name} your lastname ${lastname} have ${age} years`)
    } else {
        console.log(`his name is ${name} your lastname ${lastname} have ${age} years`)
    }
    
}

optional('camilo','nose',40)