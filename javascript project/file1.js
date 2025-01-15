// Javascript project
// to add two number
// program to add static number
// let a = 5;
// let b = 6;
// let c = a + b;
// console.log(a + b);
// console.log(" The sum of " + a + " and " + b + " is: " + c);
// console.log("hello world");

// program to add dynamic number
// prompt() method
// let a = prompt("please enter first number", "");
// let b = prompt("please enter second number", "");
// var c = parseInt(a) + parseInt(b);
// console.log("The sum of " + a + " and " + b + " is :" + c);
// parseInt() ka kaam h kisi bhi string ko integer me convert kr deta h
// because user se data hamesha string me leta h

// to find a square root of a number using javaxcript
// to find the square root of a number in javascript, you can use the built in Math.sqrt() method
// let a = prompt("Please enter a number");
// let b = Math.sqrt(a);
// console.log(b);

// To find the area of a triangle
// general formula is (base * height)/2
// let base = prompt("Please enter the base value");
// let height = prompt("Please enter the height value");
// let area = (base * height) / 2;
// console.log(area);

// if we know all the sides of a triangle, you can find the area using heron's formula
// area = square root of s(s-a)* (s-b) * (s-c)
// s = (a+b+c)/2
// let a = 10;
// let b = 5;
// let c = 10;
// let s = (a + b + c) / 2;
// console.log(s);
// let temp = s * (s - a) * (s - b) * (s - c);
// let area = Math.sqrt(temp);

// console.log(temp);
// console.log(area);

// swapping of two number
// two method  are there
// 1.)Swapping using temporary variable
// let a = prompt("Please enter the a value");
// let b = prompt("Please enter the b value");
// console.log(`The value of a is: ${a}, The value of b is: ${b}`);

// let temp;
// temp = a;
// a = b;
// b = temp;
// console.log(
//   "After swapping \n",
//   `The value of a is: ${a},\n The value of b is: ${b}`
// );

// Swapping without using temporary variable
// we will set some value of a and b then we will set a = a + b and then we will set b = a - b and again we will set a = a - b
// here we will use parseInt because we have to add and user gives us string so we will use parseInt() to convert string to integer
// let a = parseInt(prompt("Please enter the a value"));
// let b = parseInt(prompt("Please enter the b value"));
// a = a + b; //a = 5 + 6 = 11
// b = a - b; //b = 11 - 6 = 5
// a = a - b; //a = 11 - 5 = 6
// console.log(
//   `After Swapping \n The value of a is: ${a}, \n The value of b is: ${b}`
// );

// Convert kms to miles using javascript function
// 1 kilometer = 0.621371;
// miles = kilometer * factor (and factor is 0.621371)

// const convert = document.querySelector("#convert");
// convert.addEventListener("click", function () {
//   let kms = document.getElementById("data").value;
//   const factor = 0.621371;
//   let miles = kms * factor;
//   document.getElementById("res").innerText = `${miles} miles`;
// });

// convert celsius to fahrenheit
// formula =
// fahrenheit = celsius * 1.8 + 32
// const convert = document.getElementById("convert");
// convert.addEventListener("click", () => {
//   let cel = document.getElementById("data").value;
//   let farhen = cel * 1.8 + 32;
//   document.getElementById(
//     "res"
//   ).innerText = `${cel}degree C = ${farhen} degree farhenheit `;
// });

// check if a number is positive, negative or zero
// const check = document.getElementById("check");
// check.addEventListener("click", () => {
//   let value = document.getElementById("data").value;
//   //   let res = Math.sign(value);
//   // here we will not use math.sign, instead we will use userdefined function
//   if (value > 0) {
//     res = `${value} is Positive Number`;
//   } else if (value < 0) {
//     res = `${value} is Negative Number`;
//   } else if (value == 0) {
//     //here we have not used three zero because three zero calculate data type also
//     res = `${value} is zero`;
//   } else {
//     res = `${value} is not a number`;
//   }
//   document.getElementById("res").innerText = res;
// });

// Math.random(), generate a random number
// it give floating point number ranging from 0 to less than 1.
// let x = Math.random();
// console.log(x);
// for getting integer number we will we will use Math.floor method
// let x = Math.floor(Math.random() * 10000    );
// console.log(x);

// check if number is odd or even
// this is first method
// let check = document.getElementById("check");
// check.addEventListener("click", () => {
//   let value = document.getElementById("data").value;
//   if (value % 2 == 0) {
//     res = `${value} is even`;
//   } else {
//     res = `${value} is odd`;
//   }

//   document.getElementById("res").innerText = res;

// });
// second method is
// let x = 77;
// if (x % 2 == 0) {
//   console.log(`${x} is an even number`);
// } else {
//   console.log(`${x} is odd number`);
// }
// to check if a number is prime number or not
// important

// function isPrime(number) {
//   if (number <= 1) return false; // 0 and 1 are not prime numbers
//   if (number === 2) return true; // 2 is a prime number
//   if (number % 2 === 0) return false; // Eliminate even numbers greater than 2

//   // Check for factors from 3 up to the square root of the number
//   for (let i = 3; i * i <= number; i += 2) {
//     if (number % i === 0) {
//       return false; // If divisible by i, it's not prime
//     }
//   }
//   return true; // If no factors found, it's prime
// }

// function isPrime(number) {
//   if (number <= 1) return false; // 0 and 1 are not prime numbers
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       return false; // If divisible by i, it's not prime
//     }
//   }
//   return true; // If no divisors are found, it's prime
// }

// // Prompt the user for a number
// let userInput = prompt("Enter a number to check if it's prime:");

// // Convert input to a number (since prompt returns a string)
// let number = parseInt(userInput);

// // Check if the input is a valid number
// if (isNaN(number)) {
//   console.log("Please enter a valid number.");
// } else {
//   // Check if the number is prime
//   if (isPrime(number)) {
//     console.log(`${number} is a prime number.`);
//   } else {
//     console.log(`${number} is not a prime number.`);
//   }
// }

// practice a number is oprime or not
// function isPrime(number) {
//   if (number <= 1) {
//     return false;
//   }
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// let userInput = prompt("Enter a number to check if  it is a prime or not.");
// let number = parseInt(userInput);
// if (isNaN(number)) {
//   console.log("Please enter a valid number");
// } else {
//   if (isPrime(number)) {
//     console.log(`${number} is a prime number`);
//   } else {
//     console.log(`${number} is not a  prime number`);
//   }
// }

//find the largest no
// we can do it by 2 method
// 1.)Math.max()
// 2.)Using user defined method

// function check(a, b, c) {
//   if (a >= b && a >= c) {
//     return a;
//   } else if (b >= a && b >= c) {
//     return b;
//   } else {
//     return c;
//   }
// }

// let a = prompt("Please enter the first number");
// let b = prompt("Please enter the second number");
// let c = prompt("Please enter the third number");
// let x = check(a, b, c);
// console.log(`${a}, ${b}, ${c} : Largest = ${x}`);

// practice of finding the largest number
// function check(a, b, c) {
//   if (a >= b && a >= c) {
//     return a;
//   } else if (b >= a && b >= c) {
//     return b;
//   } else {
//     return c;
//   }
// }
// let a = prompt("Please enter the first number");
// let b = prompt("Please enter second number");
// let c = prompt("Please enter the third number");
// let x = check(a, b, c);
// console.log(`${a}, ${b}, ${c} :Largest = ${x}`);

// find the factorial of the number
// let number = prompt("Please enter a number");
// let fact = 1;
// if (number == 0) {
//   console.log(`The factorial of ${number} is 1`);
// } else if (number < 0) {
//   console.log(`The factorial of -ve number is not possible`);
// } else {
//   for (let i = 1; i <= number; i++) {
//     fact = fact * i;
//   }
//   console.log(`The factorial of a ${number} is ${fact}`);
// }

// to find the factorial of a number using recursion
// what is recursion
// the process in which a function calls itself directly or indirectly is called recursion
// let number = prompt("Please enter a number");
// let factorial = 1;
// function fact(n) {
//   if (n > number) {
//     return;
//   }
//   factorial = factorial * n;
//   n++;
//   fact(n);
// }
// fact(1);
// console.log(`The factorial of ${number} is ${factorial}`);

// practice of factorial
// let number = prompt("Please enter a number");
// let factorial = 1;
// function fact(n) {
//   if (n > number) {
//     return;
//   }
//   factorial = factorial * n;
//   n++;
//   fact(n);
// }
// fact(1);
// console.log(`The factorial of ${number} is ${factorial}`);

// Print the table of any user given number
// function table(number) {
//   for (let i = 1; i <= 10; i++) {
//     let res = i * number;
//     console.log(`${number} * ${i} = ${res}`);
//   }
// }
// table(5);
// table(15);

// find armstrong number in an interval
// console.log("hello world");
// let number = prompt("Please enter a user number");
// let temp = number;
// let noOfDigits = number.toString().length;
// alert(noOfDigits)
// let sum = 0;
// while (temp > 0) {
//   let digit = temp % 10;
//   sum += digit ** noOfDigits;
//   temp = parseInt(temp / 10);
// }
// if (sum == number) {
//   console.log(`${number} is an armstrong number`);
// } else {
//   console.log(`${number} is not an armstrong number`);
// }

// to check if the number have same last digit
// let a = prompt("Please select first number");
// let b = prompt("Please enter second number");
// let c = prompt("Please enter third number");
// let res1 = a % 10;
// let res2 = b % 10;
// let res3 = c % 10;
// if (res1 == res2 && res1 == res3) {
//   console.log(`${a}, ${b}, ${c} are having the same last digit`);
// } else {
//   console.log(`${a}, ${b}, ${c} are not  having the same last digit`);
// }

// check palindrome using array methods
// 1.) step is by using split() method.it will split a string and returns an array
// 2.) step is using reverse() method.
// 3.) step is using join() method, join the arrays elements and return a string.
// let string = prompt("Please enter a string");
// let stringArray = string.split("");
// let stringArrayRev = stringArray.reverse();
// let revString = stringArrayRev.join("");
// console.log(revString);
// if (string === revString) {
//   console.log(`${string}: is Palidrome `);
// } else {
//   console.log(`${string}: is not Palidrome`);
// }

// to check palidrome using for loop
// let string = prompt("Please enter a string");
// let length = string.length;
// let msg = "It is a palindrome";
// for (let i = 0; i < length / 2; i++) {
//   if (string[i] != string[length - 1 - i]) {
//     msg = "It is not a Palindrome";
//   }
// }
// console.log(`${string}: ${msg}`);

// check the number of occurrences of a character in a string using for loop
// let string = prompt("Please enter a string");
// let letter = prompt("Please enter a letter");
// let strLength = string.length;
// // alert(strLength);
// let counter = 0;
// for (let i = 0; i < string.length; i++) {
//   if (string[i] == letter) {
//     counter++;
//   }
// }
// console.log(`${string}; ${letter}: ${counter}`);

// to check whether a string starts and ends with certain characters
// to check this we will use two function
// 1.)string.startsWith();
// 2.)string.endsWith();
// let string = prompt("Please enter a string.");
// console.log(string);
// let testStart = string.startsWith("W");

// let testEnd = string.endsWith("e");
// if (testStart == true && testEnd == true) {
//   console.log(`${string} starts with W and e`);
// } else if (testStart == true && testEnd == false) {
//   console.log(`${string} starts with W`);
// } else if (testStart == false && testEnd == true) {
//   console.log(`${string} ends with e`);
// } else {
//   console.log(`${string} neither starts with W nor ends with e`);
// }

// check whether a string contains a substring
// 1.)method is string.includes() it returns true or false
// 2.)string.indexOf() it gives value in string or -1 if it is not present
// let string = prompt("Please enter a string");
// let subString = "the";
// let test1 = string.includes(subString);
// console.log(test1);
// let test2 = string.indexOf(subString);
// console.log(test2);

// convert the first letter of a string in to uppercase
// 1.)first method is charAt(); to get a character at an index;
// 2.)second method is toUpperCase(); to uppercase character
// 3.)slice() method; to slide any character from the string
// let string = prompt("Please enter a string");
// console.log(string);
// let first = string.charAt(0);
// console.log(first);
// let rem = string.slice(1);
// console.log(rem);
// console.log(first.toUpperCase());
// let final = first.toUpperCase() + rem;
// console.log(final);

// count the number of vowels in a string using regex;
// regex is known as regular expression.
// it is used to match, test and find character(s) from a string.
// to find vowels
// expression: [aeiou];
// modifiers : gi; g means global and i means case irrelevent;
// let string = prompt("Please enter a string");
// const reg = /[aeiou]/gi;
// let count = string.match(reg);
// console.log(count);
// array ko string me convert krne k liye join(',') use krenge

// practicing armstrong number
// let number = prompt("Please enter a number");
// let temp = number;
// let sum = 0;
// let noOfDigits = number.toString().length;
// while (temp > 0) {
//   let digit = temp % 10;
//   sum += digit ** noOfDigits;
//   temp = parseInt(temp / 10);
// }
// if (sum == number) {
//   console.log(`${number} is an armstrong number`);
// } else {
//   console.log(`${number} is not an armstrong number`);
// }
// practicing armstrong number
// let number = prompt("Please enter a number");
// let temp = number;
// let sum = 0;
// let noOfDigit = number.toString().length;
// while (temp > 0) {
//   let digit = temp % 10;
//   sum += digit ** noOfDigit;
//   temp = parseInt(temp / 10);
// }
// if (sum == number) {
//   console.log(`${number} is armstrong number`);
// } else {
//   console.log(`${number} is not an armstrong number `);
// }
// practicing armstrong number
// let number = prompt("Please enter a number");
// let temp = number;
// let sum = 0;
// let noOfDigit = number.toString().length;
// while (temp > 0) {
//   let digit = temp % 10;
//   sum += digit ** noOfDigit;
//   temp = parseInt(temp / 10);
// }
// if (sum == number) {
//   console.log(`${number} is armstrong number`);
// } else {
//   console.log(`${number} is not an armstrong number`);
// }

// find armstrong number between interval
// var a = prompt("Please enter lower number");
// var b = prompt("Please enter upper number");
// for (let i = a; i <= b; i++) {
//   let temp = i;
//   let sum = 0;
//   let noOfDigits = i.toString().length;
//   while (temp > 0) {
//     let digit = temp % 10;
//     temp = parseInt(temp / 10);
//     sum += digit ** noOfDigits;
//   }
//   if (sum == i) {
//     console.log(`${i} is an armstrong number`);
//   }
// }

// find the sum of natural number using recursion
// recursion is a technique to call a function directly or indirectly
// function sum(num) {
//   if (num > 0) {
//     return num + sum(num - 1);
//   } else {
//     return num;
//   }
// }
// let total = sum(5);
// console.log(total);
// find the sum of natural number using recursion
// recursion is a  technique to call a function directly or indirectly
// function sum(num) {
//   if (num > 0) {
//     return num + sum(num - 1);
//   } else {
//     return num;
//   }
// }
// let total = sum(200);
// console.log(total);

// find the factors of a number
// let number = prompt("Please enter a number");
// for (let i = 1; i <= number; i++) {
//   if (number % i == 0) {
//     console.log(i);
//   }
// }

// very important
// to make a simple calculator using switch case
// calulator always use switch case
// let num1 = prompt("Please enter 1st number");
// let num2 = prompt("Please enter 2nd number");
// let operator = prompt("Please select among +,-,x,/");
// switch (operator) {
//   case "+":
//     var res = parseFloat(num1) + parseFloat(num2);
//     console.log(`${num1} + ${num2} = ${res}`);
//     break;
//   case "-":
//     var res = parseFloat(num1) - parseFloat(num2);
//     console.log(`${num1} - ${num2} = ${res}`);
//     break;
//   case "*":
//     var res = parseFloat(num1) * parseFloat(num2);
//     console.log(`${num1} * ${num2} = ${res}`);
//     break;
//   case "/":
//     var res = parseFloat(num1) / parseFloat(num2);
//     console.log(`${num1} / ${num2} = ${res}`);
//     break;
//   default:
//     console.log("Invalid operator");
// }

// to print fibonacci sequence
// fibonacci sequences is the integer sequence where the first two terms are 0 and 1.
// after that the next term is define  as the sum  of previous two terms
// let a = 0,
//   b = 1;
// for (let i = 0; i <= 7; i++) {
//   let temp = a + b;
//   a = b;
//   b = temp;
//   console.log(temp);
// }
// to print fibonacci sequence
// let a = 0, b = 1
// for(let i = 0; i <= 7; i++){
//     let temp = a + b;
//     a = b;
//     b = temp;
//     console.log(temp)
// }

// program to replace characters of a string
// 1.) replace():- the replace function finds, replace and returns a new string
// let string = "Mr. Red has a red car and a red bike";
// let reg = new RegExp("red", "gi");
// let newString = string.replace(reg, "blue");
// console.log(newString);

// reverse a string using for loop
// let string = prompt("Please enter a string");
// let strLen = string.length;
// let revStr = " ";
// for (let i = strLen - 1; i >= 0; i--) {
//   revStr += string[i];
// }
// console.log(`${string} reverse is ${revStr}`);
// reverse a string using for loop
// let string = prompt("Please enter a string");
// let strLen = string.length;
// let revStr = " ";
// for (let i = strLen - 1; i >= 0; i--) {
//   revStr += string[i];
// }
// console.log(`${string} reverse is ${revStr}`);

// sort words in alphabetical order
// we have two methods
// 1.) split(' '): to split the string into array.
// now we will sort the above array by sort() method into alphabetical ascending order
let string = prompt("Please enter a string");
let stringArray = string.split(" ");
stringArray.sort();
console.log(stringArray.join(" "));
