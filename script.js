const output = document.getElementById("output");

console.log = function (...values) {
    output.innerHTML += values.join(" ") + "\n";
};

console.log("Primitive Data Types in JavaScript");
// Task 1 Create a variable studentName and assign your name. Print its data type.

let studentName = "Hari";
console.log(typeof studentName);

// Task 2 Create a variable employeeAge and assign your age. Print its data type.
let employeeAge = 23;
console.log(typeof employeeAge);

// Task 3 Create a variable isWorking and assign true. Print its data type.

let isWorking = true;
console.log(typeof isWorking);

// Task 4 Declare a variable without assigning a value. Print its value.
let myVariable;
console.log(myVariable);

// Task 5 Create five variables using string, number, boolean, undefined, and null.
let myString = "Hello";
let myNumber = 24;
let myBoolean = true;
let myUndefined;
let myNull = null;

//Task 6 Print the data type of each variable using typeof.


console.log(typeof myString);
console.log(typeof myNumber);
console.log(typeof myBoolean);
console.log(typeof myUndefined);
console.log(typeof myNull);

// Task 7 Print the data type of each variable using typeof.
let courseName = "JavaScript";
console.log(courseName);

// Task 8 Create a variable batchNumber with the value 42 and print its data type.
let batchNumber = 42;
console.log(typeof batchNumber);


console.log("PART 2: ARRAYS");

// Task 9 Create an array containing five fruit names.
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

// Task 10 Print the first element of the array.
console.log(fruits[0]);

// Task 11 Print the third element of the array.
console.log(fruits[2]);

// Task 12 Print the last element using length.
console.log(fruits[fruits.length - 1]);

// Task 13 Create an array containing your name, age, city, and designation.
let studentDetails = ["Hari", 23, "Chennai", "Developer"];

//Task 14 Print each element using its index.

console.log(studentDetails[0]);
console.log(studentDetails[1]);
console.log(studentDetails[2]);
console.log(studentDetails[3]);

// Task 15 Create an array containing strings, numbers, and boolean values.
let mixedArray = ["JavaScript", 24, true, "HTML", 200];

//task 16 Print the length of the array.
console.log(mixedArray.length);

// Task 17 Create an array of five mobile brands and print the second brand.
let mobileBrands = ["Samsung", "Apple", "Vivo", "Oppo", "OnePlus"];
console.log(mobileBrands[1]);

// Task 18 Create an array of programming languages and print the last language using length.
let programmingLanguages = [
    "JavaScript",
    "Python",
    "Java",
    "C",
    "C++",
    "PHP"
];

//print the last Language

console.log(programmingLanguages[programmingLanguages.length - 1]);


console.log("PART 3: OBJECTS");

// Task 19 Create an object student with properties name, age, and city.
let student = {
    name: "John",
    age: 22,
    city: "Chennai"
};

// Task 20 Print the student name using dot notation.
console.log(student.name);

// Task 21 Print the student age using dot notation.
console.log(student.age);

// Task 22 Create an object named employee with  name, salary, and designation. 
let employee = {
    name: "David",
    salary: 30000,
    designation: "Developer"
};

// Task 23 Create an object containing an array of five skills. Print the third skill.

let skills = {
    skillsList: ["HTML", "CSS", "JavaScript", "React", "Node.js"]
};

console.log(skills.skillsList[2]);

// Task 24 Create an object containing fruit, number, boolean, and toy properties.
let myObject = {
    fruit: "Apple",
    number: 100,
    isAvailable: true,
    toy: "Car"
};

// Task 25 Print the toy property.
console.log(myObject.toy);

// Task 26 Create an object named company with company name, location, and employee count.
let company = {
    companyName: "stackly",
    location: "Salem",
    employeeCount: 600
};

console.log(company);


console.log("PART 4: ARITHMETIC OPERATORS");

// Task 27: Addition
console.log(10 + 20);

// Task 28: Subtraction
console.log(50 - 20);

// Task 29: Multiplication
console.log(2 * 3 * 4);

// Task 30: Division
console.log(100 / 5);

// Task 31: Modulus
console.log(25 % 4);

// Task 32: Exponentiation
console.log(3 ** 4);

// Task 33: Create two variables and perform all six arithmetic operations on them.
let num1 = 20;
let num2 = 5;

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus:", num1 % num2);
console.log("Exponentiation:", num1 ** num2);


console.log("PART 5: INCREMENT AND DECREMENT");

// Task 34: Pre-increment
let first = 10;
console.log(++first);

// Task 35: Post-increment
let second = 20;
console.log(second++);
console.log(second);

// Task 36: Pre-decrement
let third = 30;
console.log(--third);

// Task 37: Post-decrement
let fourth = 40;
console.log(fourth--);
console.log(fourth);

// Task 38: Predict the output
let a = 10;
let b = a++;

console.log(a);
console.log(b);

// Task 39: Predict the output
let x = 15;
let y = ++x;

console.log(x);
console.log(y);

// Task 40: Predict the final values
let number1 = 25;
let number2 = --number1;
let number3 = number2++;
let number4 = ++number3;

console.log(number1);
console.log(number2);
console.log(number3);
console.log(number4);