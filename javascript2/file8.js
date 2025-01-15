const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
// child.addEventListener("click", ()=>{
//     console.log("you clicked on child")
// })

// event delegation
grandparent.addEventListener("click", (e) => {
  console.log(e.target);
});

// event delegation ka use index5.html me kiye h