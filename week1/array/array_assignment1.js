// Assignment 1: Daily Temperature Analyzer
// ----------------------------------------
// Scenario : You are analyzing daily temperatures recorded by a weather app.

// Test data:
// const temperatures = [32, 35, 28, 40, 38, 30, 42];

// Tasks:
//     1. filter() temperatures above 35
//     2. map() to convert all temperatures from Celsius → Fahrenheit
//     3. reduce() to calculate average temperature
//     4. find() first temperature above 40
//     5. findIndex() of temperature 28

let temperatures = [32, 35, 28, 40, 38, 30, 42];
// filter temps above 35
let result=temperatures.filter(element=> element>35)
console.log(result)

// use map to convert all temperatues from celsius to fahrenheit
let result2=temperatures.map(element=> (element*9/5)+32)
console.log("Fahrenheit Temperatures:",result2)

// calc average temp
let result3=temperatures.reduce((acc,element)=> acc+element,0)/temperatures.length
console.log("Average Temp=",result3)

// find first temp above 40
let result4=temperatures.find(element=> element>40)
console.log("First Temp Above 40=",result4)

// index of temp 28
let result5=temperatures.findIndex(element=> element==28)
console.log("Index of 28=",result5)