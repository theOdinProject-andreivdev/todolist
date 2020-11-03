export function loadProjectsJSON() {
  if (localStorage.getItem("projects"))
    return JSON.parse(localStorage.getItem("projects"));
  else return "";
}

export function storeProjectsInJSON(projects) {
  localStorage.setItem("projects", JSON.stringify(projects));
}

export function clearProjectsStorage() {
  localStorage.removeItem("projects");
}

export function loadTasksJSON() {
  if (localStorage.getItem("tasks"))
    return JSON.parse(localStorage.getItem("tasks"));
  else return "";
}

export function storeTasksInJSON(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function clearTasksStorage() {
  localStorage.removeItem("tasks");
}

export function clearAllStorage() {
  localStorage.clear();
}
