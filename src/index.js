import {
  loadProjects,
  addNewProject,
  clearProjects,
  removeProject,
  getAllProjects,
  getSelectedProjectName,
} from "./projects";
import { addNewTask, loadTasks, clearTasks } from "./tasks";
import { displayProjects, displayTasks, createSidebar } from "./domutil";

console.log("Startup test");

loadProjects();
createSidebar();
//addNewProject("TestPrj3", "notDone");
//clearProjects();

loadTasks();
displayTasks(getSelectedProjectName());

//addNewTask("TestTask2", "done", "urgent", "TestPrj3");
//clearTasks();
