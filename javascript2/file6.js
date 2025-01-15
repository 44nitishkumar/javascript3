// const allButtons = document.querySelectorAll(".my-buttons button");
// for (let button of allButtons) {
//   button.addEventListener("click", function () {
//     console.log(this);
//   });
// }
// for (let i = 0; i < allButtons.length; i++) {
//   allButtons[i].addEventListener("click", function () {
//     console.log(this);
//   });
// }
// allButtons.forEach(function (button) {
//   button.addEventListener("click", function () {
//     console.log(this);
//   });
// });

// const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click", function () {
//   console.log(this);
// });

// const allButtons = document.querySelectorAll(".my-buttons button");
// for (let button of allButtons) {
//   button.addEventListener("click", (e) => {
//     console.log(e.currentTarget);
//   });
// }

// understanding event behind the scene
// important asked in interview
// const allButtons = document.querySelectorAll(".my-buttons button");
// allButtons.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     console.log(e.currentTarget.textContent);
//   });
// });

// little practice with click event
// const allButtons = document.querySelectorAll(".my-buttons button");
// allButtons.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     e.target.style.backgroundColor = "yellow";
//     e.target.style.color = "white";
//   });
// });
