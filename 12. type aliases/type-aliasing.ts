type Person = {
    name: string;
    age: number;
}

function printPerson(person: Person):string {
    return `Name: ${person.name}, Age: ${person.age}`;
}

const result:string = printPerson({name: 'John', age: 30}); // Name: John, Age: 30

console.log("result: ", result);


//object 
const myPerson: Person = {name : 'John', age: 30};
console.log("myPerson: ", myPerson); // { name: 'John', age: 30 }


//object without the aliasing 
const myPerson2: {name: string, age: number} = {name: 'John', age: 30};
console.log("myPerson2: ", myPerson2); // { name: 'John', age: 30 }
