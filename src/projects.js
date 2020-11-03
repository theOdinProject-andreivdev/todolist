import { displayProjects, displayTasks } from "./domutil";
import {
  loadProjectsJSON,
  storeProjectsInJSON,
  clearProjectsStorage,
} from "./storage";
import { removeTasksForProjectName } from "./tasks";

let projects = [];

let selectedProject = "";

class Project {
  constructor(_name, _status) {
    this.name = _name;
    this.status = _status;
  }
}

export function loadProjects() {
  let storageProjects = loadProjectsJSON();

  projects = [];
  for (let i = 0; i < storageProjects.length; i++) {
    projects.push(
      new Project(storageProjects[i].name, storageProjects[i].status)
    );
    if (selectedProject == "") selectedProject = projects[i].name;
  }

  console.log("Loaded projects: " + JSON.stringify(projects));
}

export function storeProjects() {
  console.log("Stored projects: " + JSON.stringify(projects));
  storeProjectsInJSON(projects);
}

export function addNewProject(name, status) {
  if (name == "" || name == null) return;

  for (let i = 0; i < projects.length; i++) {
    if (projects[i].name == name) {
      alert("Please choose a different name");
      return;
    }
  }

  console.log("New project : " + name + " " + status);
  projects.push(new Project(name, status));
  storeProjects();
  displayProjects();
}

export function clearProjects() {
  projects = [];
  clearProjectsStorage();
  displayProjects();
}

export function removeProject(name) {
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].name == name) {
      projects.splice(i, 1);
    }
  }
  selectProject(null);
  removeTasksForProjectName(name);
  storeProjects();
  displayProjects();
}

export function getProjectByName(name) {
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].name == name) return project[i];
  }
}

export function getAllProjects() {
  return projects;
}

export function selectProject(name) {
  console.log("Selected: " + name);
  selectedProject = name;
  displayProjects();
  displayTasks(selectedProject);
}

export function getSelectedProjectName() {
  return selectedProject;
}
