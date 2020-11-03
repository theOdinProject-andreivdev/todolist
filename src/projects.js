import { displayProjects, displayTasks } from "./domutil";
import {
  loadProjectsJSON,
  storeProjectsInJSON,
  clearProjectsStorage,
} from "./storage";

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

export function removeProjectByName(name) {
  console.log("rm");
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].name == name) projects = projects.splice(i, 1);
  }
  storeProjects();
  displayProjects();
}

export function removeProjectByDOM(e) {
  let name = e.target.dataset.name;
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].name == name) {
      projects.splice(i, 1);
    }
  }
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

export function selectProjectName(e) {
  console.log("Selected: " + e.target.dataset.name);
  selectedProject = e.target.dataset.name;
  displayProjects();
  displayTasks(selectedProject);
}

export function getSelectedProjectName() {
  return selectedProject;
}
