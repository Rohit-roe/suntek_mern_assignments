// Assignment 2: Online Course Name Processor
// ------------------------------------------
// Scenario : You are preparing a course list for display on a website.

// Test data:
// const courses = ["javascript", "react", "node", "mongodb", "express"];


// Tasks:
//     1. filter() courses with name length > 5
//     2. map() to convert course names to uppercase
//     3. reduce() to generate a single string:
//               "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

//     4. find() the course "react"
//     5. findIndex() of "node"
courses = ["javascript", "react", "node", "mongodb", "express"];

// filter courses with length greater than 5
let result=courses.filter(course=> course.length>5)
console.log("Length greater than 5",result)

// map to convert all course names to uppercase
let result2=courses.map(course=> course.toUpperCase())
console.log("Uppercase:",result2)

// reduce to generate a single string of all course names
let result3=courses.reduce((acc,course)=>acc+" | "+course)
console.log(result3)

// find first course with name 'react'
let result4=courses.find(course=> course==="react")
console.log(result4)

// find index of course 'node'
let result5=courses.findIndex(course=> course==="node")
console.log("Index of node=",result5)