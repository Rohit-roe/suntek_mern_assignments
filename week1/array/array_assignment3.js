// Assignment 3: Student Marks List
// --------------------------------
// Scenario : You receive marks from an exam system.

// Test data:
// const marks = [78, 92, 35, 88, 40, 67];

// Tasks:
//     1. filter() marks ≥ 40 (pass marks)
//     2. map() to add 5 grace marks to each student
//     3. reduce() to find highest mark
//     4. find() first mark below 40
//     5. findIndex() of mark 92
let marks = [78, 92, 35, 88, 40, 67];

// filter marks>=40
let result=marks.filter(element=> element>=40)
console.log("Marks less than 40",result)

// add 5 marks to each student
let result2=marks.map(element =>element+5)
console.log(result2)

// find the highest mark
let result3=marks.reduce((acc,element)=>acc>element? acc:element)
console.log("Highest Mark=",result3)

//first mark below 40
let result4=marks.find(element=> element<40)
console.log("First Mark Below 40=",result4)

//index of marks 92
let result5=marks.findIndex(element=> element==92)
console.log("Index of 92=",result5)