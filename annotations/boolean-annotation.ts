let isSingle = true; 
isSingle = false; // OK
isSingle = true; // OK
// isSingle = 'yes'; // Error: Type 'string' is not assignable to type 'boolean'
console.log(isSingle); // Output: false