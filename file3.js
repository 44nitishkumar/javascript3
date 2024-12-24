// const URL = "https://jsonplaceholder.typicode.com/posts";

// const xhr = new XMLHttpRequest();

// // step1
// // console.log(xhr.readyState);
// xhr.open("GET", URL);
// // console.log(xhr.readyState);
// // xhr.onreadystatechange = function () {
// //   if (xhr.readyState === 4) {
// //     const response = xhr.response;
// //     const data = JSON.parse(response);
// //     console.log(typeof data);
// //   }
// // };
// // onload tabhi chalega jab uska readyState 4 ho jayega
// xhr.onload = function () {
//   console.log(xhr.readyState);
// };
// xhr.send();
// const URL = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();
// xhr.open("GET", URL);
// xhr.onload = () => {
//   if (xhr.status >= 200 && xhr.status < 300) {
//     const data = JSON.parse(xhr.response);
//     const id = data[3].id;
//     const xhr2 = new XMLHttpRequest();
//     const URL2 = `${URL}/${id}`;
//     console.log(URL2);
//     xhr2.open("GEt", URL2);
//     xhr2.onload = () => {
//       const data2 = JSON.parse(xhr2.response);
//       console.log(data2);
//     };
//     xhr2.send();
//   } else {
//     console.log("something went wrong");
//   }
// };
// xhr.onerror = () => {
//   console.log("on error");
// };

// xhr.send();

// now we will do same thing above one by promise method
// const URL = "https://jsonplaceholder.typicode.com/posts";
// function sendRequest(method, url) {
//   return new Promise(function (resolve, reject) {
//     const xhr = new XMLHttpRequest();
//     xhr.open(method, url);
//     xhr.onload = function () {
//       if (xhr.status >= 200 && xhr.status < 300) {
//         resolve(xhr.response);
//       } else {
//         reject(new Error("Something went wrong"));
//       }
//     };
//     xhr.onerror = function () {
//       reject(new Error("something went wrong"));
//     };
//     xhr.send();
//   });
// }
// const whatisthis = sendRequest("GET", URL);
// console.log(whatisthis);

// const URL = "https://jsonplaceholder.typicode.com/postss";

// fetch(URL, {
//   method: "POST",
//   body: JSON.stringify({
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error("Something went wrong!!!");
//     }
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("inside catch");
//     console.log(error);
//   });

// fetch(URL)
//   .then(response =>{
//     return response.json()})
//     .then(data =>{
//         console.log(data)
//     })

const URL = "https://jsonplaceholder.typicode.com/postss";

async function getPosts() {
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error("Something went wrong!!");
  }
  const data = await response.json();
  return data;
}
getPosts()
  .then((myData) => {
    console.log(myData);
  })
  .catch((error) => {
    console.log(error);
  });
