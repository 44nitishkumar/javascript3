// now we have to change the body color in every second
const body = document.body;
const button = document.querySelector("button");
console.log(button);
// console.log(body);
// setInterval mere ko ek object dega jisko humlog store kr sakte h co
const intervalId = setInterval(() => {
  const red = Math.floor(Math.random() * 156);
  const green = Math.floor(Math.random() * 156);
  const blue = Math.floor(Math.random() * 156);
  const rgb = `rgb(${red}, ${green}, ${blue})`;
  body.style.background = rgb;
}, 1000);

button.addEventListener("click", () => {
  clearInterval(intervalId);
  button.textContent = body.style.background;
});
console.log(intervalId);
