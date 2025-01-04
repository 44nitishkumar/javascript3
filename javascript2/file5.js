// const mainHeading = document.getElementById("main-heading");
// mainHeading.textContent = "Heading is changed";
// console.log(mainHeading);

// now we have to change the color of h2 tag of class headline
// const mainHeading = document.querySelector("div.headline h2");
// mainHeading.style.backgroundColor = "blue";

// const link = document.querySelector("a");
// console.log(link.getAttribute("href"));
// link.setAttribute("href", "https://codprog.com");
// console.log(link.getAttribute("href"));

// const inputElement = document.querySelector(".form-todo input");
// console.log(inputElement.getAttribute("type"));

// now we have to get only home not # tag then we will use slice method
// const link = document.querySelector("a");
// console.log(link.getAttribute("href").slice(1));

// get multiple elements using getElements by class name
// const navItems = document.getElementsByClassName("nav-item");//ye mereko html collection dega
// console.log(navItems);

// get multiple elements using querySelectorAll
// const navItems = document.querySelectorAll(".nav-item");//ye mere ko node lists dega
// console.log(navItems);

// ab mereko jitna bhi nav-items h uska like home tag and etc uska color green krna h aur background color white chaihiye
// to us k liye loop chalana padega
// loop chalane ka three method hota h
// 1.) simple for loop
// 2.)for of loop
// 3.)forEach method(html collection k sath forEach method nhi use hota h)
// array like objects me humlog indexing use kr skte h and length property use kr skte h
// 1.) simple for loop
// const navItems = document.getElementsByTagName("a");
// for (let i = 0; i < navItems.length; i++) {
//   //   console.log(navItems[i]);
//   // ab loop ko ek variable me store krenge
//   const navItem = navItems[i];
//   navItem.style.backgroundColor = "#fff";
//   navItem.style.color = "green";
// }
// 2.)for of method
// for (let navItem of navItems) {
//   //   const navItem = navItems[i];
//   navItem.style.backgroundColor = "#fff";
//   navItem.style.color = "green";
// }

// we can change array like object to array simply by using Array.from and we have to use let not const
// let navItems = document.getElementsByTagName("a");
// // 3.) now using forEach method in html collection
// navItems = Array.from(navItems);
// navItems.forEach((navItem) => {
//   navItem.style.backgroundColor = "#fff";
//   navItem.style.color = "green";
// });

// now node list we get node list by query Selector
// const navItems = document.querySelectorAll("a");
//in node list we can use all 3 method of loop
// 1.)simple loop
// 2.)for of loop
// 3.)for Each method
// for (let i = 0; i < navItems.length; i++) {
//   //   console.log(navItems[i]);
//   const navItem = navItems[i];
//   navItem.style.backgroundColor = "#fff";
//   navItem.style.color = "green";
// }

// now by for of loop
// for (let navItem of navItems) {
//   navItem.style.backgroundColor = "red";
//   navItem.style.color = "black";
// }

// now by for each method
// navItems.forEach((navItem)=>{
// navItem.style.backgroundColor = "pink";
// navItem.style.color = "black"
// })
//

// const head = document.querySelector("head");
// const title = head.querySelector("title");
// console.log(title.childNodes);

// now if we do not want textNodes(newline and space)
// then we will use children property

// classList, add and remove, toggle classes
// classList ek property h jo hume btaye gi ki kitna class h usme
// const todoSection = document.querySelector(".todo-section");
// console.log(todoSection.classList);

// todoSection.classList.add("bg-dark");
// humlog classList asign kiye h todoSection me
// now if we want to remove container classList then we can do simply by adding remove property
// todoSection.classList.remove("container");
// ab humko dekna h ki koi class classList me exist krti h ya nhi
// to usko humlog contains method use kr skte h
// const ans = todoSection.classList.contains("container");
// console.log(ans);
// what does toggle do:-
// toggle add and removes the element
// if any element is there then it will remove it
// or it will add the element if it is not present in code
// todoSection.classList.toggle("bg-dark");
// todoSection.classList.toggle("bg-dark");

// adding html element using javascript

// Add new html elements to page

// innerHTML to add html element
// const todoList = document.querySelector(".todo-list");
// console.log(todoList.innerHTML);
// we can change innerHTML
// todoList.innerHTML = "<li>New Todo</li>";
// above jo h wo pura innerHTML ko change krta h
// we want new one and previous one also
// todoList.innerHTML = todoList.innerHTML + "<li>New Todo</li>";
// todoList.innerHTML = todoList.innerHTML + "<li>Teach students</li>";
// we should not use innerHTML because it will give all html element which are not needded

// when you should use it, when you should not
// new element ko add or remove krne ka new method is
// document.createElement()
// 1.) append
// 2.)prepend
// 3.)remove
// const newTodoItem = document.createElement("Li");
// newTodoItem.textContent = "Teach students";
// const todoList = document.querySelector(".todo-list");

// todoList.append(newTodoItem);
// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Lets learn javascript";
// const todoList = document.querySelector(".todo-list");
// todoList.append(newTodoItem);
// append jo h wo last me add krta h
// aur prepend jo h wo starting me add krta h

// const todoItem = document.createElement("li");
// todoItem.textContent = "Lets learn about ";
// const todoList = document.querySelector(".todo-list");
// todoList.prepend(todoItem);

// we can remove todo list
// const todoList = document.querySelector(".todo-list li");
// todoList.remove();
// console.log(todoList);

// clone nodes
// imp
// const ul = document.querySelector(".todo-list");
// // now we have to add nodes in this
// const newItem = document.createElement("li");
// newItem.textContent = "New Todo";
// // now we want in first and last both for that we have to clone
// const li2 = newItem.cloneNode(true);
// ul.append(newItem);
// ul.prepend(li2);

// some old method to support poor IE
// appendChild;
// insertBefore;
// replaceChild;
// removeChild;
// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "new line";
// const referenceNode = document.querySelector(".first-todo");

// ul.insertBefore(li, referenceNode);

// replaceChild
// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "new line";
// const referenceNode = document.querySelector(".first-todo");

// ul.replaceChild(li, referenceNode);

// removeChild
// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "new line";
// const referenceNode = document.querySelector(".first-todo");

// ul.removeChild(referenceNode);

// static list and live list
// querySelectorAll hamein static list degi
// getElementBySomething hamein live list degi
// const ul = document.querySelector(".todo-list");
// const listItem = ul.getElementsByTagName("li");
// const sixthLi = document.createElement("li");
// sixthLi.textContent = "item 6";

// ul.append(sixthLi);
// console.log(listItem);
// lekin jayda humlog query selector use krte h because
// getElementByTag name jayda space leta h

// how to get dimension of the element
// we can use getBoundingClientRect().top/bottom/height/width
// to get the dimension
// const todoSection = document.querySelector(".todo-section");
// const info = todoSection.getBoundingClientRect().width;
// console.log(info);

// intro to events
// click
// button press
// hover
// const btn = document.querySelector(".btn-headline");
// mmethod h addEventListener

// btn.addEventListener("click", function () {
//   console.log("you clicked me!!!");
// });
// humlog isko arrow function bna dete h
// btn.addEventListener("click", () => {
//   console.log("arrow function!!!");
// });

// this keyword
// const btn = document.querySelector(".btn-headline");
// btn.addEventListener("click", function () {
//   console.log("you clicked me !!!");
//   console.log("value of this");
//   console.log(this);
// });

// keypress and mouseover event
// const body = document.body;

// body.addEventListener("keypress", (e) => {
//   console.log(e.key);
// });

// mouseOver event
// const btnHeadline = document.querySelector(".btn-headline");
// btnHeadline.addEventListener("mouseover", () => {
//   console.log("mouse event occured");
// });

// btnHeadline.addEventListener("mouseleave", () => {
//   console.log("mouseleft event occured");
// });

const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");
console.log(todoInput);
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodoText = todoInput.value;
  const newLi = document.createElement("li");
  const newLiInnerHtml = `<span class="text">${newTodoText}</span>
          <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
          </div>`;
  newLi.innerHTML = newLiInnerHtml;
  todoList.append(newLi);
  todoInput.value = "";
});

todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove")) {
    const targetedLi = e.target.parentNode.parentNode;
    targetedLi.remove();
  }
  if (e.target.classList.contains("done")) {
    const liSpan = e.target.parentNode.previousElementSibling;
    liSpan.style.textDecoration = "line-through";
  }
});
