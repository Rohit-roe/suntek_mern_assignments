// Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
// -------------------------------------------------------
// 🧪 Given Data:
//               const user = {
//                 id: 101,
//                 name: "Ravi",
//                 preferences: {
//                   theme: "dark",
//                   language: "en"
//                 }
//               };

// 🎯 Task
//     1. Create a shallow copy of user
//     2. Change:
//           i. name in the copied object
//           ii. preferences.theme in the copied object
//           iii .Log both original and copied objects
//           iv. Observe what changes and what doesn’t

const user={
    id:101,
    name:"Ravi",
    preferences:{
        theme:"dark",
        language:"en"
    }
};
// creating shallow copy
const copieduser=Object.assign({},user)

// change username in copied object
copieduser.name="Ramesh"

// change the theme in copied object
copieduser.preferences.theme="light"

// Log both original and copied objects
console.log("Original user:",user)
console.log("Copied user:",copieduser)

// Observation:
console.log("Observation:")
console.log("The name in the original obj remain unchanged as it is not a nested values")
console.log("But the theme in the original obj is changed as it is a nested object and shallow copy only creates a new reference for nested objects")

