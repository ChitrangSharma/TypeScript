const nums : number[] = [1, 2, 3, 4, 5];
console.log(nums); // [1, 2, 3, 4, 5]

const nums2 : Array<number> = [1, 2, 3, 4, 5];
console.log(nums2); // [1, 2, 3, 4, 5]

const str : string[] = ['a', 'b', 'c', 'd', 'e'];
console.log(str); // ['a', 'b', 'c', 'd', 'e']

const bool : boolean[] = [true, false, true, false];
console.log(bool); // [true, false, true, false]

bool.push(true);
// bool.push('false'); // Error: Argument of type '"false"' is not assignable to parameter of type 'boolean'.


//The syntax is little old -
const str2 : Array<string> = ['a', 'b', 'c', 'd', 'e'];
console.log(str2); // ['a', 'b', 'c', 'd', 'e']