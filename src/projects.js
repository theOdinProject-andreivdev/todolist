import { displayProjects, displayTasks } from "./domutil";
import {
  loadProjectsJSON,
  storeProjectsInJSON,
  clearProjectsStorage,
} from "./storage";
import { removeTasksForProject } from "./tasks";

let projects = [];

let selectedProject = "";

class Project {
  constructor(_name) {
    this.name = _name;
  }
}

export function loadProjects() {
  let storageProjects = loadProjectsJSON();

  projects = [];
  for (let i = 0; i < storageProjects.length; i++) {
    projects.push(new Project(storageProjects[i].name));
    if (selectedProject == "") selectedProject = projects[i].name;
  }

  console.log("Loaded projects: " + JSON.stringify(projects));
}

export function storeProjects() {
  console.log("Stored projects: " + JSON.stringify(projects));
  storeProjectsInJSON(projects);
}

export function addNewProject(name) {
  if (name == "" || name == null) return;

  for (let i = 0; i < projects.length; i++) {
    if (projects[i].name == name) {
      alert("Please choose a different name");
      return;
    }
  }

  console.log("New project : " + name);
  projects.push(new Project(name));
  storeProjects();
  displayProjects();
}

export function clearProjects() {
  projects = [];
  clearProjectsStorage();
  displayProjects();
}

export function removeProject(prj) {
  for (let i = projects.length - 1; i >= 0; i--) {
    if (projects[i] == prj) {
      projects.splice(i, 1);
    }
  }
  selectProject(null);
  removeTasksForProject(prj);
  storeProjects();
  displayProjects();
}

export function getProjectByName(name) {
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].name == name) return projects[i];
  }
  return null;
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
