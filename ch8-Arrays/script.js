// let firstName = "john";
// let friendNames = ["Alice", "Bob", "Charlie", "David"];
// let friendAges = ["25", "30", "22", "28"];
// console.log(firstName);
// console.log(friendNames);
// console.log(friendAges);

// console.log(friendNames[0] + " is " + friendAges[0] + " years old. ");
// console.log(friendNames[1] + " is " + friendAges[1] + " years old. ");

// let students = new Array();
// students.push("Liban")
// students.push("Abdi")
// students.push("Ahmed")
// students.push("Ali")
// students[1] = "Noura"

//console.log(students[2]);

//console.log(students.length);

// =========================================
// ARRAY
// =========================================

let students = new Array();

students.push("Liban");
students.push("Abdi");
students.push("Ahmed");
students.push("Ali");

console.log("Original Array");
console.log(students);

// =========================================
// 1. push()
// Adds element to the end
// =========================================
// students.push("Noura");
// console.log("\n1. push()");
// console.log(students);

// =========================================
// 2. pop()
// Removes the last element
// =========================================
// students.pop();
// console.log("\n2. pop()");
// console.log(students);


// // // =========================================
// // 3. unshift()
// // Adds element to the beginning
// // =========================================
// students.unshift("Mohamed");
// console.log(students);

// =========================================
// 4. shift()
// Removes the first element
// =========================================
// students.shift();
// console.log(students);

// // =========================================
// // 5. length
// // =========================================
// console.log("\n5. length");
//console.log(students.length);

// // =========================================
// // 6. indexOf()
// // =========================================
// console.log("\n6. indexOf()");
//console.log(students.indexOf("Ahmed"));

// // =========================================
// // 7. lastIndexOf()
// // =========================================
// students.push("Ahmed");
// console.log("\n7. lastIndexOf()");
//console.log(students.lastIndexOf("Ahmed"));

// // =========================================
// // 8. includes()
// // =========================================
// console.log("\n8. includes()");
//console.log(students.includes("Ali"));

// // =========================================
// // 9. join()
// // =========================================
// console.log("\n9. join()");
//console.log(students.join(" - "));

// // =========================================
// // 10. reverse()
// // =========================================
// console.log("\n10. reverse()");
// students.reverse();
//console.log(students);

// // =========================================
// // 11. sort()
// // =========================================
// console.log("\n11. sort()");
// students.sort();
//console.log(students);

// // =========================================
// // 12. slice()
// // =========================================
// console.log("\n12. slice()");
// console.log(students.slice(1, 4));

// // =========================================
// // 13. splice()
// // Removes one element at index 2
// // =========================================
// console.log("\n13. splice()");
//students.splice(2, 1);
//console.log(students);

// // =========================================
// // 14. concat()
// // Combines arrays
// // =========================================
// console.log("\n14. concat()");
//console.log(students.concat(["Amina", "Safa"]));

// // =========================================
// // 15. toString()
// // =========================================
// console.log("\n15. toString()");
//console.log(students.toString());

// // =========================================
// // 16. at()
// // =========================================
// console.log("\n16. at()");
//console.log(students.at(1));

// // =========================================
// // 17. find()
// // =========================================
// console.log("\n17. find()");
//console.log(students.find(student => student.startsWith("A")));

// // =========================================
// // 18. findIndex()
// // =========================================
// console.log("\n18. findIndex()");
// console.log(students.findIndex(student => student === "Ali"));

// // =========================================
// // 19. filter()
// // =========================================
// console.log("\n19. filter()");
//console.log(students.filter(student => student.includes("A")));

// // =========================================
// // 20. map()
// // =========================================
// console.log("\n20. map()");
// console.log(students.map(student => student.toUpperCase()));

// // =========================================
// // 21. forEach()
// // =========================================
// console.log("\n21. forEach()");
// students.forEach(student => console.log(student));

// // =========================================
// // 22. every()
// // =========================================
// console.log("\n22. every()");
// console.log(students.every(student => student.length > 2));

// // =========================================
// // 23. some()
// // =========================================
// console.log("\n23. some()");
//console.log(students.some(student => student === "Ali"));

// // =========================================
// // 24. reduce()
// // =========================================
// console.log("\n24. reduce()");
//console.log(students.reduce((total, student) => total + student.length, 0));

// // =========================================
// // 25. fill()
// // =========================================
// console.log("\n25. fill()");
// students.fill("Student");
// console.log(students);

// // Restore the array
// students = ["Liban", "Abdi", "Ahmed", "Ali"];

// // =========================================
// // 26. copyWithin()
// // =========================================
// console.log("\n26. copyWithin()");
// students.copyWithin(1, 2);
// console.log(students);

// // Restore again
// students = ["Liban", "Abdi", "Ahmed", "Ali"];

// // =========================================
// // 27. keys()
// // =========================================
// console.log("\n27. keys()");
// console.log([...students.keys()]);

// // =========================================
// // 28. values()
// // =========================================
// console.log("\n28. values()");
// console.log([...students.values()]);

// // =========================================
// // 29. entries()
// // =========================================
// console.log("\n29. entries()");
// console.log([...students.entries()]);

// // =========================================
// // 30. Array.isArray()
// // =========================================
// console.log("\n30. Array.isArray()");
// console.log(Array.isArray(students));

// // =========================================
// // 31. Array.from()
// // =========================================
// console.log("\n31. Array.from()");
// console.log(Array.from("HELLO"));

// // =========================================
// // 32. Array.of()
// // =========================================
// console.log("\n32. Array.of()");
// console.log(Array.of("Liban", "Abdi", "Ahmed", "Ali"));


