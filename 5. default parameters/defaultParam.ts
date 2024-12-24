function greet(person:string = 'Guest') {
    return 'Hello, ' + person;
}

const res = greet(); // Hello, Guest
const res2 = greet('Chitrang'); // Hello, Chitrang

console.log("res: ", res);
console.log("res2: ", res2);
