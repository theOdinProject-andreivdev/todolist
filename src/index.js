import { loadProjects, getSelectedProjectName } from "./projects";
import { loadTasks } from "./tasks";
import { displayTasks, createSidebar, createTaskContainer } from "./domutil";

console.log("Startup test");

loadProjects();
createSidebar();

loadTasks();
createTaskContainer();
displayTasks(getSelectedProjectName());
