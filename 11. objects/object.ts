// syntax of object - 
// type varName (annotations/types) = {property:value}

const person:{firstName:string, lastName:string, age:number} = {
    firstName:'chitrang',
    lastName:'sharma',
    age:25
}

//factory function to make an object
function createPerson(firstName:string, lastName:string, age:number){
    return {
        firstName,
        lastName,
        age
    }
};

console.log(createPerson('chitrang', 'sharma', 25));

//using function return type
function printUser() : {firstName:string; lastName:string;}{
    return {firstName:'chitrang', lastName:'sharma'}
}

console.log(printUser());
