import {
  loadProjects,
  addNewProject,
  clearProjects,
  removeProject,
  getAllProjects,
  selectProjectName,
  getSelectedProjectName,
} from "./projects";
import { getAllTasks } from "./tasks";

export function displayProjects() {
  let sidebar = document.querySelector(".sidebar");

  while (sidebar.firstChild) sidebar.removeChild(sidebar.firstChild);
  for (let i = 0; i < getAllProjects().length; i++) {
    let thisProject = getAllProjects()[i];

    let projectCard = document.createElement("div");
    projectCard.classList.add("projectCard");

    if (thisProject.name == getSelectedProjectName())
      projectCard.classList.add("projectCardSelect");

    projectCard.dataset.name = thisProject.name;

    let projectName = document.createElement("div");
    projectName.classList.add("projectName");
    projectName.textContent = thisProject.name;
    projectName.dataset.name = thisProject.name;

    projectCard.addEventListener("click", selectProjectName);

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
