type User = {
    name: string;
    age:number;
    readonly location:string;
}

const user: User = {
    name: "Chitrang",
    age: 25,
    location: "INDAI"
}
user.name = "Geek24";
user.age = 24;
// user.location = "USA"; // Error: Cannot assign to 'location' because it is a read-only property.

console.log(user.name, user.age, user.location); // Geek24 24 INDIA
