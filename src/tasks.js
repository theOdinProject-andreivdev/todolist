import { displayTasks } from "./domutil";
import { getSelectedProjectName } from "./projects";
import { loadTasksJSON, storeTasksInJSON, clearTasksStorage } from "./storage";

let tasks = [];

class Task {
  constructor(_name, _status, _priority, _project) {
    this.name = _name;
    this.status = _status;
    this.priority = _priority;
    this.project = _project;
  }
}

export function loadTasks() {
  let storageTasks = loadTasksJSON();

  tasks = [];
  for (let i = 0; i < storageTasks.length; i++) {
    tasks.push(
      new Task(
        storageTasks[i].name,
        storageTasks[i].status,
        storageTasks[i].priority,
        storageTasks[i].project
      )
    );
  }

  console.log("Loaded tasks: " + JSON.stringify(tasks));
}

export function storeTasks() {
  console.log("Stored tasks: " + JSON.stringify(tasks));
  storeTasksInJSON(tasks);
}

export function addNewTask(name, status, priority, project) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].name == name) {
      alert("Please choose a different name");
      return;
    }
  }

  tasks.push(new Task(name, status, priority, project));
  storeTasks();
  displayTasks(getSelectedProjectName());
}

export function clearTasks() {
  tasks = [];
  clearTasksStorage();
}

export function removeTask(name, project) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].name == name && tasks[i].project == project)
      tasks.splice(i, 1);
  }
  storeTasks();
  displayTasks(getSelectedProjectName());
}

export function getAllTasks() {
  return tasks;
}

export function removeTasksForProjectName(prjname) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].project == prjname) removeTask(tasks[i].name, prjname);
  }
}
