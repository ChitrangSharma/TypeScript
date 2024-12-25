let password : string | number = 20;
password = 'password';
// password = true; // Error: Type 'true' is not assignable to type 'string | number'.

type userInfo = {
    name: string;
    age: number;
    id: number;
}

type accountInfo = {
    email: string;
    password: string;
}

let userTotalInfo : userInfo | accountInfo = {
    name: 'John',
    age: 30,
    id: 1,
    email: 'test@gmail.com',
    password: 'password'
}

//array with uniton type

const array: (string | number) [] = [1,2,3,4,5,'a','b','c'];

console.log("array", array);
