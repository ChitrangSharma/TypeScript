type Man = {
    name: string;
    age: number;
}

type Women = {
    id: number;
    title: string;
    passion?:string
}

type ManAndWomen = Man & Women; // Intersection type

let person1: ManAndWomen = {
    name: 'John',
    age: 30,
    id: 1,
    title: 'Software Engineer'
}

console.log(person1); // { name: 'John', age: 30, id: 1, title: 'Software Engineer' }

