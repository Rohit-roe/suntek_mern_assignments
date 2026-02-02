//        ii. task.js - Task operations
//                     // TODO: Import validator functions
//                     // import { ... } from './validator.js';
                    
//                     const tasks = [];
                    
//                     // 1. Add new task
//                     function addTask(title, priority, dueDate) {
//                       // Validate using imported functions
//                       // If valid, add to tasks array
//                       // Return success/error message
//                     }
                    
//                     // 2. Get all tasks
//                     function getAllTasks() {
//                       // Return all tasks
//                     }
                    
//                     // 3. Mark task as complete
//                     function completeTask(taskId) {
//                       // Find task and mark as complete
//                     }

//                   // Export functions

//  importing the functions from validator.js
import { validateDueDate, validatePriority, validateTitle } from "./validator.js";

const tasks = [];
// 1. Add new task
export function addTask(title, priority, dueDate) {
    const isTitleValid = validateTitle(title);
    const isPriorityValid = validatePriority(priority);
    const isDueDateValid = validateDueDate(dueDate);

    if (isTitleValid && isPriorityValid && isDueDateValid) {
        const newTask = {
            id: tasks.length + 1,
            title: title,
            priority: priority,
            dueDate: dueDate,
            isCompleted: false
        };
        tasks.push(newTask);
        return "Task added successfully";
    } else {
        return "Error: Invalid task details for: " + title;
    }
}
// 2. Get all tasks
export function getAllTasks() {
    return tasks;
}
// 3. Mark task as complete
export function completeTask(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.isCompleted = true;
        return "Task marked as complete";
    } else {
        return "Task not found";
    }
}