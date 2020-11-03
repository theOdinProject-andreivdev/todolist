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

  setName(_name) {
    this.name = _name;
  }

  setPriority(_prio) {
    this.priority = _prio;
  }
}

export function loadTasks() {
  const storageTasks = loadTasksJSON();

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

  console.log(`Loaded tasks: ${JSON.stringify(tasks)}`);
}

export function storeTasks() {
  console.log(`Stored tasks: ${JSON.stringify(tasks)}`);
  storeTasksInJSON(tasks);
}

export function addNewTask(name, status, priority, project) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].name == name && tasks[i].project == getSelectedProjectName()) {
      alert("Please choose a different name");
      return;
    }
  }

  tasks.push(new Task(name, status, priority, project));
  storeTasks();
  displayTasks(getSelectedProjectName());
}

export function getTask(name, projectName) {
  for (let i = tasks.length - 1; i >= 0; i--) {
    if (tasks[i].name == name && tasks[i].project == projectName)
      return tasks[i];
  }
}

export function clearTasks() {
  tasks = [];
  clearTasksStorage();
}

export function removeTask(name, project) {
  for (let i = tasks.length - 1; i >= 0; i--) {
    if (tasks[i].name == name && tasks[i].project == project)
      tasks.splice(i, 1);
  }
}

export function getAllTasks() {
  return tasks;
}

export function removeTasksForProject(prj) {
  for (let i = tasks.length - 1; i >= 0; i--) {
    if (tasks[i].project == prj.name) removeTask(tasks[i].name, prj.name);
  }

  storeTasks();
  displayTasks(getSelectedProjectName());
}
