//inferring the types!
let tech = 'TypeScript';
let favNumber = 7;
let isTypeScriptFun = true;

console.log(tech, favNumber, isTypeScriptFun);
//output: TypeScript 7 true

console.log("Type of tech: ", typeof tech);
console.log("Type of favNumber: ", typeof favNumber);
console.log("Type of isTypeScriptFun: ", typeof isTypeScriptFun);

//output: Type of tech:  string
//Type of favNumber:  number
//Type of isTypeScriptFun:  boolean

// tech = 12; // Error: Type 'number' is not assignable to type 'string'
// favNumber = 'chitrang'; // Error: Type 'string' is not assignable to type 'number'
// isTypeScriptFun = 'hey there'; // Error: Type 'string' is not assignable to type 'boolean'
