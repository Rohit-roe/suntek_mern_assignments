// Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
// --------------------------------------------------------------------

//  Given:
//       let enrollmentDeadline = new Date("2026-01-20");

// Tasks:
//   1.Check if:
//       * Today is before deadline → "Enrollment Open"
//       * Today is after deadline → "Enrollment Closed"

//   2. Validate user input date:
//       * Input: "2026-02-30"
//       * Detect whether the date is valid or invalid

// creating a deadline
let enrollmentDeadline = new Date("2026-01-20");
let d1=new Date()

// comparing today's date with the deadline to check if the enrollment is open or not
if(d1<enrollmentDeadline){
    console.log("Enrollment Open")
}
else{
    console.log("Enrollment closed")
}

// valiidating the given user input date
userDate=new Date("2026-02-30")
let isValidDate=true
if(userDate.getDate()!=30 || userDate.getMonth()!=1){
    isValidDate=false
}
if(isValidDate){
    console.log("The given date is a Valid Date")
}
else{
    console.log("The given date is an Invalid Date")
}