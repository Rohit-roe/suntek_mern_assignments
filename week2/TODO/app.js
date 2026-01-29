//       iii. app.js - Main application
//                   // TODO: Import task functions
//                   // import { ... } from './task.js';
//                   // Test your module system
//                   // 1. Add some tasks
//                   // 2. Display all tasks
//                   // 3. Complete a task
//                   // 4. Display all tasks again


// importing the task functions from task.js
import { addTask, getAllTasks, completeTask } from "./task.js";

// 1. Add some tasks (Note: Use future dates so they pass validation)
console.log(addTask("Buy groceries", "medium", "2026-12-01"));
console.log(addTask("Pay electricity bills", "high", "2026-05-01"));
console.log(addTask("Study JavaScript", "high", "2026-11-15"));

// 2. Display all tasks
console.log("Initial Task List:", getAllTasks());

// 3. Complete a task
console.log(completeTask(1));

// 4. Display all tasks again
console.log("Updated Task List:", getAllTasks());