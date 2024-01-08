//Write a function that deeply clones an object. 
//The cloning should handle nested objects and arrays.
const obj1 = {
    name : "John Doe",
    age : 25,
    address: {
        place : "New York",
        Country : "America",
        pin : 567432
    }
    
}
let obj2 = JSON.stringify(obj1)
obj2 = JSON.parse(obj2)
obj2.address.place = "India"
console.log(obj2);
console.log(obj1);
