// let car = {
//     brand : "Mitshumbishi",
//     model : "Pajero",
//     odometer_reading : 5000
// };
//
// console.log(car);
// console.log("Car brand: " + car.brand);
// console.log("Car model: " + car.model);
// console.log("Car has run for: " + car.odometer_reading);
//
function someFunction(a, b){
    return a**2 + b**2;
}
//
const add = (a,b) => a+b;

let arr = [2,4,6,8,10];
// console.log(arr[arr.length-1]);
//
// arr.push(12);
// console.log(arr[arr.length-1]);

let arr2 = arr.map(num => someFunction(num**2, num**2 + 1));
console.log(arr2);
arr2.push(10);
arr2.push(12);
console.log(add(arr[2], arr[arr.length-1]));

const cube = (a) => a**3;
console.log(cube(8));

const greet = (name) => console.log("Hello there" + " " + name);
// greet();
greet("skandan");

const greetings = (name) => "haha " + name;
console.log(greetings("there "));

const oddNumbers = arr2.filter(num => num % 2 != 0);
console.log(arr2);
console.log(oddNumbers);

let someNumber = arr2.reduce((temp, present) => temp**2 + present**2, 0);
console.log(someNumber);
