//DOM
// Create footer element
const footer = document.createElement("footer");
document.body.appendChild(footer);

// Get current year
const today = new Date();
const thisYear = today.getFullYear();

// Create copyright element
const copyright = document.createElement("p");
copyright.innerHTML = `Ignacio © ${thisYear}`;

// Append to footer
footer.appendChild(copyright);

// Skills array
const skills = ["JavaScript", "HTML", "CSS", "Git", "VS Code"];

// Select the Skills section
const skillsSection = document.getElementById("Skills");

// Select the <ul> inside the Skills section
const skillsList = skillsSection.querySelector("ul");

// Loop to add skills
for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}

