// Assignment 1: Date Creation & Extraction (Beginner)
// ---------------------------------------------------
// Tasks:
//        1. Create a Date object for current date & time.
//        2. Extract and display:
//                     * Year
//                     * Month (human readable)
//                     * Date
//                     * Day of week
//                     * Hours, minutes, seconds

//       3. Display the date in this format:
//                     DD-MM-YYYY HH:mm:ss

// creating today's date
let d1=new Date()

// extracting year, month, date, day of week, hours, minutes, seconds in human readable format and displaying them
let year=d1.getFullYear()
// month in human readable format
let month=d1.getMonth()+1 
let date=d1.getDate()
let dayOfWeek=d1.getDay() 
let hours=d1.getHours()
let minutes=d1.getMinutes()
let seconds=d1.getSeconds()

console.log("Year:", year)
console.log("Month:", month)
console.log("Date : ",date)
console.log("Day of Week:", dayOfWeek)
console.log("Hours :",hours)
console.log("Minutes :",minutes)
console.log("Seconds :",seconds)

// Displaying the date in the format of DD-MM-YYYY HH:mm:ss
// adding leading zeros to date, month, hours, minutes, seconds if they are less than 10
let changedDate=""+(date<10?"0"+date:date)+"-"+(month<10?"0"+month:month)+"-"+(year)+"  "+(hours<10?"0"+hours:hours)+":"+(minutes<10?"0"+minutes:minutes)+":"+(seconds<10?"0"+seconds:seconds)
console.log("date in the format DD-MM-YYYY HH:mm:ss is :",changedDate)
