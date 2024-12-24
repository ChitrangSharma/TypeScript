function throwError(message: string): never {
    throw new Error(message);
}

throwError("Hello, World!"); //output:

function infiniteLoop(): never {
    while (true) {
        console.log("Hello, World!");
    }
}

infiniteLoop(); //output: Hello, World! Hello, World! Hello, World! ...