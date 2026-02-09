//new footer variable wil add footer element in html
const newFooter = document.createElement('footer');
//class="footer"
newFooter.className = "footer";

//add footer element to the body of our index.html
document.body.append(newFooter);

//new today variable, will hold new Date object
const today = new Date();
//added a new year to our today variable
const thisYear = today.getFullYear();

//create a new variable named footer and select our footer element we created
const footer = document.body.querySelector("footer");

//create new variable and create a new html paragraph element
const copyright = document.createElement("p");

//assign a new paragraph value to our copyright variable 
//display your name and year. *STRETCH GOAL: use unicode to display @ symbol
copyright.innerHTML = `Urvino Castelan \u{0040} ${thisYear}`;

//append our paragraph to our footer html element
footer.appendChild(copyright);

