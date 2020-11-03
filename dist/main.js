/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domutil.js":
/*!************************!*\
  !*** ./src/domutil.js ***!
  \************************/
/*! namespace exports */
/*! export createModalToEditTask [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createSidebar [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createTaskContainer [provided] [no usage info] [missing usage info prevents renaming] */
/*! export displayProjects [provided] [no usage info] [missing usage info prevents renaming] */
/*! export displayTasks [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createSidebar\": () => /* binding */ createSidebar,\n/* harmony export */   \"createTaskContainer\": () => /* binding */ createTaskContainer,\n/* harmony export */   \"displayProjects\": () => /* binding */ displayProjects,\n/* harmony export */   \"displayTasks\": () => /* binding */ displayTasks,\n/* harmony export */   \"createModalToEditTask\": () => /* binding */ createModalToEditTask\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n\n\n\n\nfunction createSidebar() {\n  displayProjects();\n  let addButton = document.querySelector(\".addProject\");\n\n  addButton.addEventListener(\"click\", function (e) {\n    e.stopImmediatePropagation();\n    let projectName = prompt(\"Please insert project name:\");\n    (0,_projects__WEBPACK_IMPORTED_MODULE_0__.addNewProject)(projectName, \"notDone\");\n  });\n\n  let clearButton = document.querySelector(\".clearStorage\");\n\n  clearButton.addEventListener(\"click\", function (e) {\n    e.stopImmediatePropagation();\n    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.clearTasksStorage)();\n    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.clearProjectsStorage)();\n    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.clearAllStorage)();\n    (0,_projects__WEBPACK_IMPORTED_MODULE_0__.loadProjects)();\n    createSidebar();\n    (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.loadTasks)();\n    createTaskContainer();\n    displayTasks((0,_projects__WEBPACK_IMPORTED_MODULE_0__.getSelectedProjectName)());\n  });\n}\n\nfunction createTaskContainer() {\n  let addTaskButton = document.querySelector(\".addTask\");\n\n  addTaskButton.addEventListener(\"click\", function (e) {\n    e.stopImmediatePropagation();\n    if ((0,_projects__WEBPACK_IMPORTED_MODULE_0__.getSelectedProjectName)() == \"\" || (0,_projects__WEBPACK_IMPORTED_MODULE_0__.getSelectedProjectName)() == null) {\n      alert(\"Please select a project before adding a task!\");\n      return;\n    }\n    let taskName = prompt(\"Please enter task name\");\n\n    if (taskName != \"\" && taskName != null) {\n      (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.addNewTask)(taskName, \"notDone\", \"priority-low\", (0,_projects__WEBPACK_IMPORTED_MODULE_0__.getSelectedProjectName)());\n    }\n  });\n}\n\nfunction displayProjects() {\n  let sidebar = document.querySelector(\".sidebarContainer\");\n\n  while (sidebar.firstChild) sidebar.removeChild(sidebar.firstChild);\n  for (let i = 0; i < (0,_projects__WEBPACK_IMPORTED_MODULE_0__.getAllProjects)().length; i++) {\n    let thisProject = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.getAllProjects)()[i];\n\n    let projectCard = document.createElement(\"div\");\n    projectCard.classList.add(\"projectCard\");\n\n    if (thisProject.name == (0,_projects__WEBPACK_IMPORTED_MODULE_0__.getSelectedProjectName)())\n      projectCard.classList.add(\"projectCardSelect\");\n\n    projectCard.dataset.name = thisProject.name;\n\n    projectCard.addEventListener(\"click\", function (e) {\n      e.stopImmediatePropagation();\n      (0,_projects__WEBPACK_IMPORTED_MODULE_0__.selectProject)(e.target.dataset.name);\n    });\n\n    let projectRemove = document.createElement(\"i\");\n    projectRemove.classList.add(\"remove\");\n    projectRemove.classList.add(\"fas\");\n    projectRemove.classList.add(\"fa-trash\");\n    projectRemove.dataset.name = thisProject.name;\n    projectRemove.addEventListener(\"click\", function (e) {\n      e.stopImmediatePropagation();\n      if (confirm(\"Are you sure you want to remove project?\")) {\n        let prj = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.getProjectByName)(e.target.dataset.name);\n        (0,_projects__WEBPACK_IMPORTED_MODULE_0__.removeProject)(prj);\n      }\n    });\n\n    let projectName = document.createElement(\"div\");\n    projectName.classList.add(\"projectName\");\n    projectName.textContent = thisProject.name;\n    projectName.dataset.name = thisProject.name;\n\n    projectCard.appendChild(projectRemove);\n    projectCard.appendChild(projectName);\n    sidebar.appendChild(projectCard);\n  }\n}\n\nfunction displayTasks(projectName) {\n  let container = document.querySelector(\".container\");\n  while (container.firstChild) container.removeChild(container.firstChild);\n\n  for (let i = 0; i < (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.getAllTasks)().length; i++) {\n    let thisTask = (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.getAllTasks)()[i];\n    if (thisTask.project == projectName) {\n      let taskCard = document.createElement(\"div\");\n      taskCard.classList.add(\"taskCard\");\n      taskCard.classList.add(thisTask.priority);\n      taskCard.dataset.name = thisTask.name;\n\n      let taskName = document.createElement(\"div\");\n      taskName.classList.add(\"taskName\");\n      taskName.dataset.name = thisTask.name;\n      taskName.textContent = thisTask.name;\n\n      let taskRemove = document.createElement(\"i\");\n      taskRemove.classList.add(\"remove\");\n      taskRemove.classList.add(\"fas\");\n      taskRemove.classList.add(\"fa-trash\");\n      taskRemove.dataset.name = thisTask.name;\n      taskRemove.dataset.project = thisTask.project;\n      taskRemove.addEventListener(\"click\", function (e) {\n        e.stopImmediatePropagation();\n        if (confirm(\"Are you sure you want to remove task?\"))\n          (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.removeTask)(e.target.dataset.name, e.target.dataset.project);\n      });\n\n      let taskEdit = document.createElement(\"i\");\n      taskEdit.classList.add(\"remove\");\n      taskEdit.classList.add(\"fas\");\n      taskEdit.classList.add(\"fa-edit\");\n      taskEdit.dataset.name = thisTask.name;\n      taskEdit.dataset.project = thisTask.project;\n      taskEdit.addEventListener(\"click\", function (e) {\n        e.stopImmediatePropagation();\n        createModalToEditTask(e.target.dataset.name, e.target.dataset.project);\n      });\n\n      taskCard.appendChild(taskName);\n\n      taskCard.appendChild(taskRemove);\n      taskCard.appendChild(taskEdit);\n      container.appendChild(taskCard);\n    }\n  }\n}\n\nfunction createModalToEditTask(taskname, taskproject) {\n  let modal = document.getElementById(\"myModal\");\n  let span = document.getElementsByClassName(\"close\")[0];\n  modal.style.display = \"block\";\n  span.onclick = function () {\n    modal.style.display = \"none\";\n    displayTasks((0,_projects__WEBPACK_IMPORTED_MODULE_0__.getSelectedProjectName)());\n  };\n  window.onclick = function (event) {\n    if (event.target == modal) {\n      modal.style.display = \"none\";\n      displayTasks((0,_projects__WEBPACK_IMPORTED_MODULE_0__.getSelectedProjectName)());\n    }\n  };\n\n  let modalDiv = document.querySelector(\".modal-div\");\n\n  while (modalDiv.firstChild) modalDiv.removeChild(modalDiv.firstChild);\n\n  let nameInput = document.createElement(\"input\");\n  nameInput.style.width = \"80%\";\n  nameInput.style.height = \"25px\";\n\n  nameInput.value = (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.getTask)(taskname, taskproject).name;\n\n  let selectPriority = document.createElement(\"select\");\n  selectPriority.id = \"mySelect\";\n  selectPriority.style.margin = \"10px 0px\";\n  selectPriority.style.width = \"80%\";\n\n  let optionlow = document.createElement(\"option\");\n  optionlow.value = \"priority-low\";\n  optionlow.text = \"Low priority\";\n  let optionmedium = document.createElement(\"option\");\n  optionmedium.value = \"priority-medium\";\n  optionmedium.text = \"Medium priority\";\n  let optionhigh = document.createElement(\"option\");\n  optionhigh.value = \"priority-high\";\n  optionhigh.text = \"High priority\";\n\n  selectPriority.appendChild(optionlow);\n  selectPriority.appendChild(optionmedium);\n  selectPriority.appendChild(optionhigh);\n\n  let saveButton = document.createElement(\"button\");\n  saveButton.textContent = \"Save\";\n  saveButton.style.width = \"80%\";\n  saveButton.dataset.name = taskname;\n  saveButton.dataset.project = taskproject;\n\n  saveButton.addEventListener(\"click\", function (e) {\n    let nameInput = document.querySelector(\"input\");\n    let selectPriority = document.querySelector(\"select\");\n\n    let tsk = (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.getTask)(e.target.dataset.name, e.target.dataset.project);\n    tsk.setName(nameInput.value);\n    tsk.setPriority(selectPriority.value);\n    (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.storeTasks)();\n    displayTasks((0,_projects__WEBPACK_IMPORTED_MODULE_0__.getSelectedProjectName)());\n    modal.style.display = \"none\";\n  });\n\n  modalDiv.appendChild(nameInput);\n  modalDiv.appendChild(selectPriority);\n  modalDiv.appendChild(saveButton);\n}\n\n\n//# sourceURL=webpack://todolist/./src/domutil.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n/* harmony import */ var _domutil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domutil */ \"./src/domutil.js\");\n\n\n\n\nconsole.log(\"Startup test\");\n\n(0,_projects__WEBPACK_IMPORTED_MODULE_0__.loadProjects)();\n(0,_domutil__WEBPACK_IMPORTED_MODULE_2__.createSidebar)();\n\n(0,_tasks__WEBPACK_IMPORTED_MODULE_1__.loadTasks)();\n(0,_domutil__WEBPACK_IMPORTED_MODULE_2__.createTaskContainer)();\n(0,_domutil__WEBPACK_IMPORTED_MODULE_2__.displayTasks)((0,_projects__WEBPACK_IMPORTED_MODULE_0__.getSelectedProjectName)());\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/*! namespace exports */
/*! export addNewProject [provided] [no usage info] [missing usage info prevents renaming] */
/*! export clearProjects [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getAllProjects [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getProjectByName [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getSelectedProjectName [provided] [no usage info] [missing usage info prevents renaming] */
/*! export loadProjects [provided] [no usage info] [missing usage info prevents renaming] */
/*! export removeProject [provided] [no usage info] [missing usage info prevents renaming] */
/*! export selectProject [provided] [no usage info] [missing usage info prevents renaming] */
/*! export storeProjects [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadProjects\": () => /* binding */ loadProjects,\n/* harmony export */   \"storeProjects\": () => /* binding */ storeProjects,\n/* harmony export */   \"addNewProject\": () => /* binding */ addNewProject,\n/* harmony export */   \"clearProjects\": () => /* binding */ clearProjects,\n/* harmony export */   \"removeProject\": () => /* binding */ removeProject,\n/* harmony export */   \"getProjectByName\": () => /* binding */ getProjectByName,\n/* harmony export */   \"getAllProjects\": () => /* binding */ getAllProjects,\n/* harmony export */   \"selectProject\": () => /* binding */ selectProject,\n/* harmony export */   \"getSelectedProjectName\": () => /* binding */ getSelectedProjectName\n/* harmony export */ });\n/* harmony import */ var _domutil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domutil */ \"./src/domutil.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n\n\n\n\nlet projects = [];\n\nlet selectedProject = \"\";\n\nclass Project {\n  constructor(_name) {\n    this.name = _name;\n  }\n}\n\nfunction loadProjects() {\n  let storageProjects = (0,_storage__WEBPACK_IMPORTED_MODULE_1__.loadProjectsJSON)();\n\n  projects = [];\n  for (let i = 0; i < storageProjects.length; i++) {\n    projects.push(new Project(storageProjects[i].name));\n    if (selectedProject == \"\") selectedProject = projects[i].name;\n  }\n\n  console.log(\"Loaded projects: \" + JSON.stringify(projects));\n}\n\nfunction storeProjects() {\n  console.log(\"Stored projects: \" + JSON.stringify(projects));\n  (0,_storage__WEBPACK_IMPORTED_MODULE_1__.storeProjectsInJSON)(projects);\n}\n\nfunction addNewProject(name) {\n  if (name == \"\" || name == null) return;\n\n  for (let i = 0; i < projects.length; i++) {\n    if (projects[i].name == name) {\n      alert(\"Please choose a different name\");\n      return;\n    }\n  }\n\n  console.log(\"New project : \" + name);\n  projects.push(new Project(name));\n  storeProjects();\n  (0,_domutil__WEBPACK_IMPORTED_MODULE_0__.displayProjects)();\n}\n\nfunction clearProjects() {\n  projects = [];\n  (0,_storage__WEBPACK_IMPORTED_MODULE_1__.clearProjectsStorage)();\n  (0,_domutil__WEBPACK_IMPORTED_MODULE_0__.displayProjects)();\n}\n\nfunction removeProject(prj) {\n  for (let i = projects.length - 1; i >= 0; i--) {\n    if (projects[i] == prj) {\n      projects.splice(i, 1);\n    }\n  }\n  selectProject(null);\n  (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.removeTasksForProject)(prj);\n  storeProjects();\n  (0,_domutil__WEBPACK_IMPORTED_MODULE_0__.displayProjects)();\n}\n\nfunction getProjectByName(name) {\n  for (let i = 0; i < projects.length; i++) {\n    if (projects[i].name == name) return projects[i];\n  }\n  return null;\n}\n\nfunction getAllProjects() {\n  return projects;\n}\n\nfunction selectProject(name) {\n  console.log(\"Selected: \" + name);\n  selectedProject = name;\n  (0,_domutil__WEBPACK_IMPORTED_MODULE_0__.displayProjects)();\n  (0,_domutil__WEBPACK_IMPORTED_MODULE_0__.displayTasks)(selectedProject);\n}\n\nfunction getSelectedProjectName() {\n  return selectedProject;\n}\n\n\n//# sourceURL=webpack://todolist/./src/projects.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/*! namespace exports */
/*! export clearAllStorage [provided] [no usage info] [missing usage info prevents renaming] */
/*! export clearProjectsStorage [provided] [no usage info] [missing usage info prevents renaming] */
/*! export clearTasksStorage [provided] [no usage info] [missing usage info prevents renaming] */
/*! export loadProjectsJSON [provided] [no usage info] [missing usage info prevents renaming] */
/*! export loadTasksJSON [provided] [no usage info] [missing usage info prevents renaming] */
/*! export storeProjectsInJSON [provided] [no usage info] [missing usage info prevents renaming] */
/*! export storeTasksInJSON [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadProjectsJSON\": () => /* binding */ loadProjectsJSON,\n/* harmony export */   \"storeProjectsInJSON\": () => /* binding */ storeProjectsInJSON,\n/* harmony export */   \"clearProjectsStorage\": () => /* binding */ clearProjectsStorage,\n/* harmony export */   \"loadTasksJSON\": () => /* binding */ loadTasksJSON,\n/* harmony export */   \"storeTasksInJSON\": () => /* binding */ storeTasksInJSON,\n/* harmony export */   \"clearTasksStorage\": () => /* binding */ clearTasksStorage,\n/* harmony export */   \"clearAllStorage\": () => /* binding */ clearAllStorage\n/* harmony export */ });\nfunction loadProjectsJSON() {\n  if (localStorage.getItem(\"projects\"))\n    return JSON.parse(localStorage.getItem(\"projects\"));\n  else return \"\";\n}\n\nfunction storeProjectsInJSON(projects) {\n  localStorage.setItem(\"projects\", JSON.stringify(projects));\n}\n\nfunction clearProjectsStorage() {\n  localStorage.removeItem(\"projects\");\n}\n\nfunction loadTasksJSON() {\n  if (localStorage.getItem(\"tasks\"))\n    return JSON.parse(localStorage.getItem(\"tasks\"));\n  else return \"\";\n}\n\nfunction storeTasksInJSON(tasks) {\n  localStorage.setItem(\"tasks\", JSON.stringify(tasks));\n}\n\nfunction clearTasksStorage() {\n  localStorage.removeItem(\"tasks\");\n}\n\nfunction clearAllStorage() {\n  localStorage.clear();\n}\n\n\n//# sourceURL=webpack://todolist/./src/storage.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/*! namespace exports */
/*! export addNewTask [provided] [no usage info] [missing usage info prevents renaming] */
/*! export clearTasks [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getAllTasks [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getTask [provided] [no usage info] [missing usage info prevents renaming] */
/*! export loadTasks [provided] [no usage info] [missing usage info prevents renaming] */
/*! export removeTask [provided] [no usage info] [missing usage info prevents renaming] */
/*! export removeTasksForProject [provided] [no usage info] [missing usage info prevents renaming] */
/*! export storeTasks [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadTasks\": () => /* binding */ loadTasks,\n/* harmony export */   \"storeTasks\": () => /* binding */ storeTasks,\n/* harmony export */   \"addNewTask\": () => /* binding */ addNewTask,\n/* harmony export */   \"getTask\": () => /* binding */ getTask,\n/* harmony export */   \"clearTasks\": () => /* binding */ clearTasks,\n/* harmony export */   \"removeTask\": () => /* binding */ removeTask,\n/* harmony export */   \"getAllTasks\": () => /* binding */ getAllTasks,\n/* harmony export */   \"removeTasksForProject\": () => /* binding */ removeTasksForProject\n/* harmony export */ });\n/* harmony import */ var _domutil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domutil */ \"./src/domutil.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n\n\nlet tasks = [];\n\nclass Task {\n  constructor(_name, _status, _priority, _project) {\n    this.name = _name;\n    this.status = _status;\n    this.priority = _priority;\n    this.project = _project;\n  }\n\n  setName(_name) {\n    this.name = _name;\n  }\n\n  setPriority(_prio) {\n    this.priority = _prio;\n  }\n}\n\nfunction loadTasks() {\n  let storageTasks = (0,_storage__WEBPACK_IMPORTED_MODULE_2__.loadTasksJSON)();\n\n  tasks = [];\n  for (let i = 0; i < storageTasks.length; i++) {\n    tasks.push(\n      new Task(\n        storageTasks[i].name,\n        storageTasks[i].status,\n        storageTasks[i].priority,\n        storageTasks[i].project\n      )\n    );\n  }\n\n  console.log(\"Loaded tasks: \" + JSON.stringify(tasks));\n}\n\nfunction storeTasks() {\n  console.log(\"Stored tasks: \" + JSON.stringify(tasks));\n  (0,_storage__WEBPACK_IMPORTED_MODULE_2__.storeTasksInJSON)(tasks);\n}\n\nfunction addNewTask(name, status, priority, project) {\n  for (let i = 0; i < tasks.length; i++) {\n    if (tasks[i].name == name && tasks[i].project == (0,_projects__WEBPACK_IMPORTED_MODULE_1__.getSelectedProjectName)()) {\n      alert(\"Please choose a different name\");\n      return;\n    }\n  }\n\n  tasks.push(new Task(name, status, priority, project));\n  storeTasks();\n  (0,_domutil__WEBPACK_IMPORTED_MODULE_0__.displayTasks)((0,_projects__WEBPACK_IMPORTED_MODULE_1__.getSelectedProjectName)());\n}\n\nfunction getTask(name, projectName) {\n  for (let i = tasks.length - 1; i >= 0; i--) {\n    if (tasks[i].name == name && tasks[i].project == projectName)\n      return tasks[i];\n  }\n}\n\nfunction clearTasks() {\n  tasks = [];\n  (0,_storage__WEBPACK_IMPORTED_MODULE_2__.clearTasksStorage)();\n}\n\nfunction removeTask(name, project) {\n  for (let i = tasks.length - 1; i >= 0; i--) {\n    if (tasks[i].name == name && tasks[i].project == project)\n      tasks.splice(i, 1);\n  }\n}\n\nfunction getAllTasks() {\n  return tasks;\n}\n\nfunction removeTasksForProject(prj) {\n  for (let i = tasks.length - 1; i >= 0; i--) {\n    if (tasks[i].project == prj.name) removeTask(tasks[i].name, prj.name);\n  }\n\n  storeTasks();\n  (0,_domutil__WEBPACK_IMPORTED_MODULE_0__.displayTasks)((0,_projects__WEBPACK_IMPORTED_MODULE_1__.getSelectedProjectName)());\n}\n\n\n//# sourceURL=webpack://todolist/./src/tasks.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;