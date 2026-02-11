/*===== FOOTER ====*/
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
copyright.innerHTML = `\u00A9 Urvino Castelan ${thisYear}`;

//append our paragraph to our footer html element
footer.appendChild(copyright);

footer.style.textAlign = "center";


/* ==== SKILLS ==== */
//create an array of strings and list your "skills"
const skills = ["Javascript", "HTML", "CSS", "Java", "Python", "Github", "C++"];

//create a new variable and assign the value of skills section html section
const skillsSection = document.getElementById("new-Skills");

//create a new variable and assign the value of the unordered list html element
const skillsList = skillsSection.querySelector("ul");
skillsList.className = "skills-list";

//for loop that will loop through our skills array
for (let i = 0; i < skills.length; i++) {
  //create a new variable and assign the value of new list item html element
  const skill = document.createElement("li");
  //create a new list item content
  skill.innerHTML = skills[i];
  //add whole html element into our unordered list
  skillsList.appendChild(skill);
}