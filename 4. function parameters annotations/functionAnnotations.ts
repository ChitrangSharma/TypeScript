//Regular function

function addOne(num:number){
    return num + 1;
}

const result1 = addOne(6);
console.log(result1); //output: 7

//Arrow function
const mulNumber = (x:number,y:number) =>{
    return x * y;
}

const result2 = mulNumber(2,3);
console.log(result2); //output: 6
