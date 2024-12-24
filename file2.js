// console.log("hello world");
// understanding callback
// function myFunc(callback) {
//   console.log("Function is doing task");
//   callback();
// }
// myFunc(() => {
//   console.log("function is doing task 2");
// });
// function myFunc(callback) {
//   console.log("Function is doing task 1");
//   callback();
// }
// myFunc(() => {
//   console.log("function is doing task 2");
// });

// function getTwoNumbersAndAdd(number1, number2, callback) {
//   console.log(number1, number2);
//   callback(number1, number2);
// }

// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }

// getTwoNumbersAndAdd(4, 5, addTwoNumbers);

// function getTwoNumberAndAdd(number1, number2, onSucess, onFaliure) {
//   if (typeof number1 === "number" && typeof number2 === "number") {
//     onSucess(number1, number2);
//   } else {
//     onFaliure();
//   }
// }
// // function addTwoNumbers(num1, num2) {
// //   console.log(num1 + num2);
// // }Skip this part and do direct

// getTwoNumberAndAdd(
//   "5",
//   2,
//   (num1, num2) => {
//     console.log(num1 + num2);
//   },
//   () => {
//     console.log("wrong data type");
//     console.log("please pass number only");
//   }
// );

// callbacks in asynchronous programing
// callback hell
// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");
// const heading6 = document.querySelector(".heading6");
// const heading7 = document.querySelector(".heading7");
// setTimeout(() => {
//   heading1.textContent = "One";
//   heading1.style.color = "violet";
//   setTimeout(() => {
//     heading2.textContent = "Two";
//     heading2.style.color = "purple";
//     setTimeout(() => {
//       heading3.textContent = "Three";
//       heading3.style.color = "red";
//       setTimeout(() => {
//         heading4.textContent = "Four";
//         heading4.style.color = "pink";
//         setTimeout(() => {
//           heading5.textContent = "five";
//           heading5.style.color = "green";
//           setTimeout(() => {
//             heading6.textContent = "six";
//             heading6.style.color = "blue";
//             setTimeout(() => {
//               heading7.textContent = "Seven";
//               heading7.style.color = "brown";
//             }, 1000);
//           }, 3000);
//         }, 2000);
//       }, 1000);
//     }, 2000);
//   }, 2000);
// }, 1000);

// promise
// const bucket = ["coffee", "chips", "vegetable", "salt", "rice"];
// const friedRicePromise = new Promise((resolve, reject) => {
//   if (
//     bucket.includes("vegetable") &&
//     bucket.includes("salt") &&
//     bucket.includes("rice")
//   ) {
//     resolve("Fried Rice");
//   } else {
//     reject("couldn't do it");
//   }
// });

// // how to consume, we will use then method
// // then as a input ek call back function lega
// friedRicePromise
//   .then(
//     // jab promise resolve hoga
//     (myfriedRice) => {
//       console.log("lets eat", myfriedRice);
//     }
//   )
//   //   catch humlog kiye h chaining krne k liye
//   .catch((error) => {
//     console.log(error);
//   });

//   promise add hote h microtask que me

// function returing promise
// function ricePromise() {
//   const bucket = ["coffee", "chips", "vegetable", "salt", "rice"];
//   return new Promise((resolve, reject) => {
//     if (
//       bucket.includes("vegetable") &&
//       bucket.includes("salt") &&
//       bucket.includes("rice")
//     ) {
//       resolve("Fried Rice");
//     } else {
//       reject("couldn't do it");
//     }
//   });
// }
// ricePromise()
//   .then(
//     // jab promise resolve hoga
//     (myfriedRice) => {
//       console.log("lets eat", myfriedRice);
//     }
//   )
//   //   catch humlog kiye h chaining krne k liye
//   .catch((error) => {
//     console.log(error);
//   });

// promise and setTimeout ko ek sath kaam krwana h
// function myPromise() {
//   return new Promise((resolve, reject) => {
//     const value = true;
//     setTimeout(() => {
//       if (value) {
//         resolve();
//       } else {
//         reject();
//       }
//     }, 2000);
//   });
// }
// myPromise()
//   .then(() => {
//     console.log("resolved");
//   })
//   .catch(() => {
//     console.log("rejected");
//   });

// promise resolve
// then method hamesha promise return krta h

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

function changeText(element, text, color, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (element) {
        element.textContent = text;
        element.style.color = color;
        resolve();
      } else {
        reject();
      }
    }, time);
  });
}

changeText(heading1, "one", "red", 1000)
  .then(() => changeText(heading2, "two", "purple", 1000))
  .then(() => changeText(heading3, "three", "green", 1000))
  .then(() => changeText(heading4, "four", "orange", 1000))
  .then(() => changeText(heading5, "five", "pink", 1000))
  .then(() => changeText(heading6, "six", "yellow", 1000))
  .then(() => changeText(heading7, "seven", "brown", 1000))
  //   catch kb lega jab koi chiz galat hogyi
  .catch((error) => {
    alert(error);
  });

//   ----AJAX : asynchronous javascript and XML-----(xml k jagha humlog json use krte h)
// xml ek data ka format h but abhi use nhi krte h
// http request krna
// http kya h client aur server k bech me baat chit krne ka kaam krta h
// http fullform(hyper text transfer protocall)
// what is AJAX ?
// it is a set of "web development techinique"
// using many web technologies on the client side
// to create asynchronous web application

// with ajax web application can send and retrive
// data from a server asynchronously (in the background)
// without interfering with the display and 
// behaviour of the existing page

// we have 3 most common ways to create and send request to server
// 1.) xmlHTTP request (old way of doing)
// 2.) fetch API (new way of doing)
// 3.)axios (this is the third party library)