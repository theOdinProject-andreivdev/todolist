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
import { getAllTasks, addNewTask, removeTaskByDOM } from "./tasks";

export function createSidebar() {
  displayProjects();
  let addButton = document.querySelector(".addProject");

  addButton.addEventListener("click", function () {
    let projectName = prompt("Please insert project name:");
    addNewProject(projectName, "notDone");
  });
}

export function createTaskContainer() {
  let addTaskButton = document.querySelector(".addTask");

  addTaskButton.addEventListener("click", function () {
    let taskName = prompt("Please enter task name");

    if (taskName != "" && taskName != null) {
      addNewTask(taskName, "notDone", "priority-low", getSelectedProjectName());
    }
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

    let projectRemove = document.createElement("i");
    projectRemove.classList.add("projectRemove");
    projectRemove.classList.add("fas");
    projectRemove.classList.add("fa-trash");
    projectRemove.dataset.name = thisProject.name;
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
      taskCard.classList.add(thisTask.priority);
      taskCard.dataset.name = thisTask.name;

      let taskName = document.createElement("div");
      taskName.classList.add("taskName");
      taskName.dataset.name = thisTask.name;
      taskName.textContent = thisTask.name;

      let taskRemove = document.createElement("i");
      taskRemove.classList.add("projectRemove");
      taskRemove.classList.add("fas");
      taskRemove.classList.add("fa-trash");
      taskRemove.dataset.name = thisTask.name;
      taskRemove.dataset.project = thisTask.project;
      taskRemove.addEventListener("click", function (e) {
        if (confirm("Are you sure you want to remove task?"))
          removeTaskByDOM(e);
      });

      taskCard.appendChild(taskName);

      taskCard.appendChild(taskRemove);
      container.appendChild(taskCard);
    }
  }
}
