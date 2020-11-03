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
} from "./domutil";

console.log("Startup test");

loadProjects();
createSidebar();
//addNewProject("TestPrj3", "notDone");
//clearProjects();

loadTasks();
createTaskContainer();

//addNewTask("low", "done", "priority-low", "TestPrj");
//addNewTask("medium", "done", "priority-medium", "TestPrj");
//addNewTask("high", "done", "priority-high", "TestPrj");
//clearTasks();

displayTasks(getSelectedProjectName());
