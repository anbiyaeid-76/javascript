
let fullName = "john Doe"; // Index = position number
// ===============================
// JAVASCRIPT STRING METHODS
// ===============================
// ------------------------------------------------
// 1. length
// Counts the number of characters in the string.
// spaces counts as characters
// ------------------------------------------------
// console.log(fullName.length);
// Output: 8


// // ------------------------------------------------
// // 2. toUpperCase()
// // Converts all letters to uppercase.
// // ------------------------------------------------
// console.log(fullName.toUpperCase());
// // Output: JOHN DOE

 
// // ------------------------------------------------
// // 3. toLowerCase()
// // Converts all letters to lowercase.
// // ------------------------------------------------
// console.log(fullName.toLowerCase());
// // Output: john doe


// // ------------------------------------------------
// // 4. charAt(index)
// // Returns the character at the given index.
// // index starts at 0.
// // ------------------------------------------------
// console.log(fullName.charAt(0));
// // Output: j


// // ------------------------------------------------
// // 5. at(index)
// // Returns the character at the given index.
// // Negative index starts from the end.
// // ------------------------------------------------
// console.log(fullName.at(0));
// // Output: j

// console.log(fullName.at(-1));
// // Output: e


// // ------------------------------------------------
// // 6. indexOf()
// // Returns the first index of the character.
// // ------------------------------------------------
// console.log(fullName.indexOf("o"));
// // Output: 1


// // ------------------------------------------------
// // 7. lastIndexOf()
// // Returns the last index of the character.
// // ------------------------------------------------
// console.log(fullName.lastIndexOf("o"));
// // Output: 6


// // ------------------------------------------------
// // 8. includes()
// // Checks whether the string contains the text.
// // ------------------------------------------------
// console.log(fullName.includes("Doe"));
// // Output: true


// // ------------------------------------------------
// // 9. startsWith()
// // Checks whether the string starts with the text.
// // ------------------------------------------------
// console.log(fullName.startsWith("john"));
// // Output: true


// // ------------------------------------------------
// // 10. endsWith()
// // Checks whether the string ends with the text.
// // ------------------------------------------------
// console.log(fullName.endsWith("Doe"));
// // Output: true


// // ------------------------------------------------
// // 11. slice(start, end)
// // Extracts part of a string.
// // ------------------------------------------------
// console.log(fullName.slice(0,4));
// // Output: john

// console.log(fullName.slice(5));
// // Output: Doe


// // ------------------------------------------------
// // 12. substring(start, end)
// // Similar to slice().
// // ------------------------------------------------
// console.log(fullName.substring(0,4));
// // Output: john


// // ------------------------------------------------
// // 13. substr(start, length)
// // Extracts characters by length.
// // Deprecated (avoid using in new code).
// // ------------------------------------------------
// console.log(fullName.substr(5,3));
// // Output: Doe


// // ------------------------------------------------
// // 14. replace()
// // Replaces the first matching text.
// // ------------------------------------------------
// console.log(fullName.replace("john","Ahmed"));
// // Output: Ahmed Doe


// // ------------------------------------------------
// // 15. replaceAll()
// // Replaces every matching text.
// // ------------------------------------------------
// let animals = "cat cat cat";

// console.log(animals.replaceAll("cat","dog"));
// // Output: dog dog dog


// // ------------------------------------------------
// // 16. trim()
// // Removes spaces from both ends.
// // ------------------------------------------------
// let text = "   john Doe   ";

// console.log(text.trim());
// // Output: john Doe


// // ------------------------------------------------
// // 17. trimStart()
// // Removes spaces from the beginning.
// // ------------------------------------------------
// console.log(text.trimStart());
// // Output: john Doe   


// // ------------------------------------------------
// // 18. trimEnd()
// // Removes spaces from the end.
// // ------------------------------------------------
// console.log(text.trimEnd());
// // Output:    john Doe


// // ------------------------------------------------
// // 19. split()
// // Converts a string into an array.
// // ------------------------------------------------
// console.log(fullName.split(" "));
// // Output:
// // ['john', 'Doe']


// // ------------------------------------------------
// // 20. concat()
// // Joins strings together.
// // ------------------------------------------------
// let first = "John";
// let last = "Doe";

// console.log(first.concat(" ", last));
// // Output: John Doe


// // ------------------------------------------------
// // 21. repeat()
// // Repeats the string.
// // ------------------------------------------------
// console.log("Hi ".repeat(3));
// // Output:
// // Hi Hi Hi


// // ------------------------------------------------
// // 22. padStart()
// // Adds characters to the beginning.
// // ------------------------------------------------
// let num = "5";

// console.log(num.padStart(3,"0"));
// // Output: 005


// // ------------------------------------------------
// // 23. padEnd()
// // Adds characters to the end.
// // ------------------------------------------------
// console.log(num.padEnd(3,"0"));
// // Output: 500


// // ------------------------------------------------
// // 24. search()
// // Returns the index of the searched text.
// // ------------------------------------------------
// console.log(fullName.search("Doe"));
// // Output: 5


// // ------------------------------------------------
// // 25. match()
// // Returns matching text.
// // ------------------------------------------------
// console.log(fullName.match("Doe"));
// // Output:
// // ['Doe']


// // ------------------------------------------------
// // 26. matchAll()
// // Returns all matches.
// // ------------------------------------------------
// let pets = "cat dog cat";

// console.log([...pets.matchAll(/cat/g)]);
// // Output:
// // [
// //   ['cat'],
// //   ['cat']
// // ]


// // ------------------------------------------------
// // 27. localeCompare()
// // Compares two strings alphabetically.
// // ------------------------------------------------
// console.log("apple".localeCompare("banana"));
// // Output: -1


// // ------------------------------------------------
// // 28. valueOf()
// // Returns the primitive string value.
// // ------------------------------------------------
// console.log(fullName.valueOf());
// // Output: john Doe


// // ------------------------------------------------
// // 29. toString()
// // Converts the value to a string.
// // ------------------------------------------------
// console.log(fullName.toString());
// // Output: john Doe


// // ------------------------------------------------
// // 30. Accessing characters using index
// // ------------------------------------------------
// console.log(fullName[0]);
// // Output: j

// console.log(fullName[5]);
// // Output: D