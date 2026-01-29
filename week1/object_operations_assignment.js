// Assignment 2: Exam Result Summary
// ---------------------------------
// Scenario : Marks are stored subject-wise for a student.

// Test data:
// const marks = {
//   maths: 78,
//   physics: 65,
//   chemistry: 82,
//   english: 55
// };

// Tasks:
//     1. Calculate total marks
//     2. Calculate average marks
//     3. Find the highest scoring subject
//     4. Add a new subject computer: 90
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55,
  getTotal: function () {
    let total = 0;
    total+= this.maths;
    total+= this.physics;
    total+= this.chemistry;
    total+= this.english;
    console.log("Total Marks=" + total)
  },
    getAverage: function () {
        let avg=(this.maths+this.physics+this.chemistry+this.english)/4
        console.log("Average marks="+avg)
    },
};
marks.getTotal();
marks.getAverage();
let high=0
for(let i in marks){
    if(i>high){
        high=i
    }
}
console.log("Highest marks="+high)
marks.computer=90
console.log(marks)