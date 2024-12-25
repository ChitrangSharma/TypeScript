type Person1 = {
    name: string;
    age?: number;
    email?: string;
}

const chitrang: Person1 = {
    name: 'Chitrang',
    age: 25
}

const john: Person1 = {
    name: 'John'
}

const jane: Person1 = {
    email:'jane@gmail.com',
    age: 25,
    name: 'Jane'
}

console.log("jane", jane);
