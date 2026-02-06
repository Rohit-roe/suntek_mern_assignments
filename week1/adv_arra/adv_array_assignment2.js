// ASSIGNMENT 2:
// -------------
// Student Performance Dashboard

// You are working on a college result analysis system.

// Test Data:
// const students = [
//   { id: 1, name: "Ravi", marks: 78 },
//   { id: 2, name: "Anjali", marks: 92 },
//   { id: 3, name: "Kiran", marks: 35 },
//   { id: 4, name: "Sneha", marks: 88 },
//   { id: 5, name: "Arjun", marks: 40 }
// ];

// Tasks:
//     1. filter() students who passed (marks ≥ 40)
//     2. map() to add a grade field
//               ≥90 → A
//               ≥75 → B
//               ≥60 → C
//               else → D

//    3. reduce() to calculate average marks
//    4. find() the student who scored 92
//    5. findIndex() of student "Kiran"
let students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

// filter students with marks>=40(passesd)
let result =students.filter(studentObj=> studentObj.marks>=40)
console.log("passed students",result)

// grade the students
let result2=students.map(s=>{
    if(s.marks>=90){
        s.grade='A'
    }
    else if(s.marks>=75 && s.marks<90){
        s.grade='B'
    }
    else if(s.marks>=60 && s.marks<75){
        s.grade='C'
    }
    else{
        s.grade='D'
    }
    return s;
})
console.log("Graded Students:",result2)