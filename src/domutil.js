import {
  loadProjects,
  addNewProject,
  clearProjects,
  removeProject,
  getAllProjects,
  selectProjectName,
  getSelectedProjectName,
  removeProjectByDOM,
} from "./projects";
import { getAllTasks } from "./tasks";

export function createSidebar() {
  displayProjects();
  let addButton = document.querySelector(".addProject");

  addButton.addEventListener("click", function () {
    let projectName = prompt("Please insert project name:");
    addNewProject(projectName, "notDone");
  });
}

export function displayProjects() {
  let sidebar = document.querySelector(".sidebarContainer");

  while (sidebar.firstChild) sidebar.removeChild(sidebar.firstChild);
  for (let i = 0; i < getAllProjects().length; i++) {
    let thisProject = getAllProjects()[i];

    let projectCard = document.createElement("div");
    projectCard.classList.add("projectCard");

    if (thisProject.name == getSelectedProjectName())
      projectCard.classList.add("projectCardSelect");

    projectCard.dataset.name = thisProject.name;

    let projectRemove = document.createElement("div");
    projectRemove.classList.add("projectRemove");
    projectRemove.dataset.name = thisProject.name;
    projectRemove.textContent = "Remove";
    projectRemove.addEventListener("click", function (e) {
      if (confirm("Are you sure you want to remove project?"))
        removeProjectByDOM(e);
    });

    let projectName = document.createElement("div");
    projectName.classList.add("projectName");
    projectName.textContent = thisProject.name;
    projectName.dataset.name = thisProject.name;

    projectCard.addEventListener("click", selectProjectName);

    projectCard.appendChild(projectRemove);
    projectCard.appendChild(projectName);
    sidebar.appendChild(projectCard);
  }
}

export function displayTasks(projectName) {
  let container = document.querySelector(".container");

  while (container.firstChild) container.removeChild(container.firstChild);

  for (let i = 0; i < getAllTasks().length; i++) {
    let thisTask = getAllTasks()[i];
    if (thisTask.project == projectName) {
      let taskCard = document.createElement("div");
      taskCard.classList.add("taskCard");
      taskCard.dataset.name = thisTask.name;

      let taskName = document.createElement("div");
      taskName.classList.add("taskName");
      taskName.dataset.name = thisTask.name;
      taskName.textContent = thisTask.name;

      taskCard.appendChild(taskName);

      container.appendChild(taskCard);
    }
  }
}
