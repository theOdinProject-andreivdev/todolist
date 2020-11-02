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
  console.log(
    "New task : " + name + " " + status + " " + priority + " " + project
  );
  tasks.push(new Task(name, status, priority, project));
  storeTasks();
}

export function clearTasks() {
  tasks = [];
  clearTasksStorage();
}

export function removeTask(name) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].name == name) tasks.splice(i, 1);
  }
  storeTasks();
}

export function getAllTasks() {
  return tasks;
}
