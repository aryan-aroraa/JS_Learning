// -------------------- GET ELEMENT BY ID --------------------
console.log(document.getElementById("title").className) // Gets class name of element with id "title"
console.log(document.getElementById("title").getAttribute('id')) // Gets value of 'id' attribute
console.log(document.getElementById("title").setAttribute('class', 'test heading')) 
// Changes the class attribute value to "test heading"

// Store the element in a variable for reuse
const title = document.getElementById("title")

// -------------------- STYLING --------------------
title.style.backgroundColor = "green" // Set background color
title.style.padding = "10px"           // Add padding
title.style.borderRadius = "25px"      // Rounded corners

// -------------------- INNER TEXT / CONTENT --------------------
console.log(title.innerText);    // Shows only visible text (ignores hidden span)
console.log(title.textContent);  // Shows all text (including hidden span text)
console.log(title.innerHTML);    // Shows HTML inside the element (with tags)

// -------------------- QUERY SELECTOR --------------------
console.log(document.querySelector("h1"))       // Selects first h1 element
console.log(document.querySelector("#title"))   // Selects element by ID
console.log(document.querySelector(".heading")) // Selects element by class

// -------------------- NESTED SELECTION --------------------
const myLi = document.querySelector("ul").querySelector("li") // Selects first li inside ul
console.log(myLi)
myLi.style.backgroundColor = "yellow" // Changes background of first li
myLi.innerText = "Aryan"               // Changes text of first li

// -------------------- QUERY SELECTOR ALL --------------------
const LiList = document.querySelectorAll("li") // Returns NodeList of all li elements
LiList[1].style.color = "red"                  // Changes color of second li

// Looping through NodeList using forEach
LiList.forEach((item) => {
    item.style.border = "2px solid black"
    item.style.padding = "10px"
})

// -------------------- GET ELEMENTS BY CLASS NAME --------------------
const classList = document.getElementsByClassName("list-item")
console.log(classList); // Returns HTMLCollection (live collection, not an array)

// -------------------- CONVERT HTMLCollection TO ARRAY --------------------
console.log(Array.from(classList)) 
// Converts to array so you can use methods like map(), forEach(), etc.
