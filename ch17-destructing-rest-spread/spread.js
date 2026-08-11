//  {
//     firstName: "ahmed",
//     age: 40
// }

// [
//     "bananna",
//     "apple"
// ]

// let arr1 = [10, 20, 30];
// let arr2 = [40, 50, 60];

// let merged = [...arr1 , ...arr2];

// console.log(merged);

// let num = [10, 20, 30];
// let copy = [...num];
// console.log(num);
// console.log(copy);

// let person = {
//     name: "Ali",
//     age: 25
// };

// let newPerson = {
//     ...person
// };

// console.log(newPerson);

function multiply(x,y){
    return x * y;
}
let numbers = [3 , 5]
let result = multiply(...numbers);
console.log(result);