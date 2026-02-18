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
const skillsSection = document.getElementById("skills");

//create a new variable and assign the value of the unordered list html element
const skillsList = skillsSection.querySelector("ul");
//give our unordered list a class name
skillsList.className = "skills-list";

//for loop that will loop through our skills array
for (let i = 0; i < skills.length; i++) {
  //create a new variable and assign the value of new list item html element
  const skill = document.createElement("li");
  //create a new list item content
  skill.textContent = skills[i];
  //add whole html element into our unordered list
  skillsList.appendChild(skill);
}

//Hide messages section if no currently no messages 
function toggleMessagesSection() {
  //variable to select our messages section by id
  const messageSection = document.getElementById("messages");
  //variable to hold and choose our unoredered list 
  const messageList = messageSection.querySelector("ul");
  //if else to check if our unordered list has any child elements if so current display in messages section is set to empty
  //else display elements via block style.
  if (messageList.children.length === 0) {
    messageSection.style.display = "none";
  } else {
    messageSection.style.display = "block";
  }
}

//invoke our function to check for any messages
toggleMessagesSection();

/* === Messages Form ===== */

//variable to select our form
const messageForm = document.querySelector('[name="leave_message"]');

//add eventListener call back function for our form
messageForm.addEventListener('submit', event => {
  //prevent default refresh after submit is pressed
  event.preventDefault();

  //3 variables to keep track of values in form
  const userName = event.target.usersName.value;
  const email = event.target.usersEmail.value;
  const message = event.target.usersMessage.value;
  //console log the results of our 3 variables
  console.log(`Username: ${userName}\nEmail: ${email}\n${message}`);

  /* ==== Display Messages ===== */
  //new variable to select our messages section
  const messsageSection = document.getElementById("messages");
  //variable to select our unordered list in our index.html
  const messageList = messsageSection.querySelector('ul');

  //create a new variable and assign the value of a newly created element
  const newMessage = document.createElement('li');

  //add innerHTML to our new list item element
  newMessage.innerHTML = `<a href="mailto:${email}">${userName}</a> <span>${message} </span>`;

  //create a new button element and assign it to a new variable
  const removeButton = document.createElement("button");
  //add text to our button 
  removeButton.innerText = "remove";
  //set an attribute to our button element
  removeButton.setAttribute("type", "button");
  //event listener to remove the information added to our messages from our parent node after its been clicked.
  removeButton.addEventListener('click', event => {
    const entry = removeButton.parentNode;
    entry.remove();
    toggleMessagesSection();
  })
  //append our new remove button element to our new message unordered list
  newMessage.appendChild(removeButton);
  //append our new message to our new message list
  messageList.appendChild(newMessage);
  //clear the text in our input fields after it console logs

  //invoke our function to check for any messages
  toggleMessagesSection();

  event.target.reset();
});

