// Assignment 3: Age Calculator (Intermediate)
// -------------------------------------------
// Input:
//     let dob = "2000-05-15";


// Tasks:
//         1. Calculate exact age in years

// creating the dob
let dob=new Date("2000-05-15")
let d1=new Date()

// calculating the age in years
let years=d1.getFullYear()-dob.getFullYear()
// if we do this and the birthday has not occurred this year then we need to reduce it by 1
if(d1.getMonth()<dob.getMonth() || (d1.getMonth()==dob.getMonth() && d1.getDate()<dob.getDate())){
    years--;
}
console.log("Age in years is :",years)