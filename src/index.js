import {
  loadProjects,
  addNewProject,
  clearProjects,
  removeProject,
  getAllProjects,
  getSelectedProjectName,
} from "./projects";
import { addNewTask, loadTasks, clearTasks } from "./tasks";
import {
  displayProjects,
  displayTasks,
  createSidebar,
  createTaskContainer,
  createModal,
} from "./domutil";

console.log("Startup test");

loadProjects();
createSidebar();

loadTasks();
createTaskContainer();
displayTasks(getSelectedProjectName());
