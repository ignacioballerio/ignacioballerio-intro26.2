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

// LEAVE A MESSAGE FORM 
const messageForm = document.forms["leave_message"];

messageForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = event.target.usersName.value;
  const email = event.target.usersEmail.value;
  const message = event.target.usersMessage.value;

  const messageSection = document.getElementById("messages");
  const messageList = messageSection.querySelector("ul");

  // Show section when first message is added
  messageSection.style.display = "block";

  const newMessage = document.createElement("li");

  newMessage.innerHTML = `
    <a href="mailto:${email}">${name}</a>
    <span> wrote: ${message}</span>
  `;

  // REMOVE BUTTON 
  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";

  removeButton.addEventListener("click", function () {
    const entry = removeButton.parentNode;
    entry.remove();

    // Hide section if empty
    if (messageList.children.length === 0) {
      messageSection.style.display = "none";
    }
  });

  // EDIT BUTTON
  const editButton = document.createElement("button");
  editButton.innerText = "edit";
  editButton.type = "button";

  editButton.addEventListener("click", function () {
    const entry = editButton.parentNode;
    const messageSpan = entry.querySelector("span");

    const currentMessage = messageSpan.innerText.replace(" wrote: ", "");
    const newMessageText = prompt("Edit your message:", currentMessage);

    if (newMessageText !== null) {
      messageSpan.innerText = ` wrote: ${newMessageText}`;
    }
  });

  // Append buttons
  newMessage.appendChild(removeButton);
  newMessage.appendChild(editButton);

  // Add message to list
  messageList.appendChild(newMessage);

  // Clear the form
  event.target.reset();
});

// LESSON 9 - API FETCH
const GITHUB_USERNAME = "ignacioballerio";

// 1. Fetch repos from GitHub API
fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
  .then(response => response.json())
  .then(data => {
    const repositories = data;

    // Sort alphabetically
    repositories.sort((a, b) => a.name.localeCompare(b.name));

    // Show only the latest 5 repos
    repositories.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    const latestFive = repositories.slice(0, 5);

    // Show repos in Projects section
    const projectSection = document.getElementById("projects");
    const projectList = projectSection.querySelector("ul");

    for (let i = 0; i < latestFive.length; i++) {
      const project = document.createElement("li");

      const repoName = latestFive[i].name;
      const repoUrl = latestFive[i].html_url;
      const repoDescription = latestFive[i].description || "No description available";
      const repoDate = new Date(latestFive[i].created_at).toLocaleDateString();

      project.innerHTML = `
        <a href="${repoUrl}" target="_blank">
          <strong>${repoName}</strong>
        </a>
        <br>
        <small>📅 Created: ${repoDate}</small>
        <br>
        <small>📄 ${repoDescription}</small>
      `;

      projectList.appendChild(project);
    }
  })
  .catch(error => {
    console.error("Error al traer repos:", error);

    const projectSection = document.getElementById("projects");
    const projectList = projectSection.querySelector("ul");

    const errorItem = document.createElement("li");
    errorItem.innerText = "⚠️ No se pudieron cargar los repositorios";
    projectList.appendChild(errorItem);
  });

