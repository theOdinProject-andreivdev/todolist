import {
  loadProjects,
  addNewProject,
  clearProjects,
  removeProject,
  getAllProjects,
  selectProject,
  getSelectedProjectName,
  getProjectByName,
} from "./projects";
import {
  clearProjectsStorage,
  clearTasksStorage,
  clearAllStorage,
} from "./storage";
import {
  getAllTasks,
  addNewTask,
  removeTask,
  loadTasks,
  getTask,
  storeTasks,
} from "./tasks";

export function createSidebar() {
  displayProjects();
  let addButton = document.querySelector(".addProject");

  addButton.addEventListener("click", function (e) {
    e.stopImmediatePropagation();
    let projectName = prompt("Please insert project name:");
    addNewProject(projectName, "notDone");
  });

  let clearButton = document.querySelector(".clearStorage");

  clearButton.addEventListener("click", function (e) {
    e.stopImmediatePropagation();
    clearTasksStorage();
    clearProjectsStorage();
    clearAllStorage();
    loadProjects();
    createSidebar();
    loadTasks();
    createTaskContainer();
    displayTasks(getSelectedProjectName());
  });
}

export function createTaskContainer() {
  let addTaskButton = document.querySelector(".addTask");

  addTaskButton.addEventListener("click", function (e) {
    e.stopImmediatePropagation();
    if (getSelectedProjectName() == "" || getSelectedProjectName() == null) {
      alert("Please select a project before adding a task!");
      return;
    }
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

    projectCard.addEventListener("click", function (e) {
      e.stopImmediatePropagation();
      selectProject(e.target.dataset.name);
    });

    let projectRemove = document.createElement("i");
    projectRemove.classList.add("remove");
    projectRemove.classList.add("fas");
    projectRemove.classList.add("fa-trash");
    projectRemove.dataset.name = thisProject.name;
    projectRemove.addEventListener("click", function (e) {
      e.stopImmediatePropagation();
      if (confirm("Are you sure you want to remove project?")) {
        let prj = getProjectByName(e.target.dataset.name);
        removeProject(prj);
      }
    });

    let projectName = document.createElement("div");
    projectName.classList.add("projectName");
    projectName.textContent = thisProject.name;
    projectName.dataset.name = thisProject.name;

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
      taskRemove.classList.add("remove");
      taskRemove.classList.add("fas");
      taskRemove.classList.add("fa-trash");
      taskRemove.dataset.name = thisTask.name;
      taskRemove.dataset.project = thisTask.project;
      taskRemove.addEventListener("click", function (e) {
        e.stopImmediatePropagation();
        if (confirm("Are you sure you want to remove task?"))
          removeTask(e.target.dataset.name, e.target.dataset.project);
      });

      let taskEdit = document.createElement("i");
      taskEdit.classList.add("remove");
      taskEdit.classList.add("fas");
      taskEdit.classList.add("fa-edit");
      taskEdit.dataset.name = thisTask.name;
      taskEdit.dataset.project = thisTask.project;
      taskEdit.addEventListener("click", function (e) {
        e.stopImmediatePropagation();
        createModalToEditTask(e.target.dataset.name, e.target.dataset.project);
      });

      taskCard.appendChild(taskName);

      taskCard.appendChild(taskRemove);
      taskCard.appendChild(taskEdit);
      container.appendChild(taskCard);
    }
  }
}

export function createModalToEditTask(taskname, taskproject) {
  let modal = document.getElementById("myModal");
  let span = document.getElementsByClassName("close")[0];
  modal.style.display = "block";
  span.onclick = function () {
    modal.style.display = "none";
    displayTasks(getSelectedProjectName());
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      displayTasks(getSelectedProjectName());
    }
  };

  let modalDiv = document.querySelector(".modal-div");

  while (modalDiv.firstChild) modalDiv.removeChild(modalDiv.firstChild);

  let nameInput = document.createElement("input");
  nameInput.style.width = "80%";
  nameInput.style.height = "25px";

  nameInput.value = getTask(taskname, taskproject).name;

  let selectPriority = document.createElement("select");
  selectPriority.id = "mySelect";
  selectPriority.style.margin = "10px 0px";
  selectPriority.style.width = "80%";

  let optionlow = document.createElement("option");
  optionlow.value = "priority-low";
  optionlow.text = "Low priority";
  let optionmedium = document.createElement("option");
  optionmedium.value = "priority-medium";
  optionmedium.text = "Medium priority";
  let optionhigh = document.createElement("option");
  optionhigh.value = "priority-high";
  optionhigh.text = "High priority";

  selectPriority.appendChild(optionlow);
  selectPriority.appendChild(optionmedium);
  selectPriority.appendChild(optionhigh);

  let saveButton = document.createElement("button");
  saveButton.textContent = "Save";
  saveButton.style.width = "80%";
  saveButton.dataset.name = taskname;
  saveButton.dataset.project = taskproject;

  saveButton.addEventListener("click", function (e) {
    let nameInput = document.querySelector("input");
    let selectPriority = document.querySelector("select");

    let tsk = getTask(e.target.dataset.name, e.target.dataset.project);
    tsk.setName(nameInput.value);
    tsk.setPriority(selectPriority.value);
    storeTasks();
    displayTasks(getSelectedProjectName());
    modal.style.display = "none";
  });

  modalDiv.appendChild(nameInput);
  modalDiv.appendChild(selectPriority);
  modalDiv.appendChild(saveButton);
}
