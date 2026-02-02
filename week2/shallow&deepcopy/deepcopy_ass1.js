// Hands-On 2: Deep Copy (Isolation & Safety Use Case)
// ---------------------------------------------------

// 🧪 Given Data:
//                 const order = {
//                   orderId: "ORD1001",
//                   customer: {
//                     name: "Anita",
//                     address: {
//                       city: "Hyderabad",
//                       pincode: 500085
//                     }
//                   },
//                   items: [
//                     { product: "Laptop", price: 70000 }
//                   ]
//                 };

// 🎯 Task:
//       1. Create a deep copy of order
//       2. Modify in copied object:
//             i. customer.address.city
//             ii. items[0].price
//             iii. Verify original object remains unchanged

// creating original order object
const order = {
    orderId: "ORD1001",
    customer: {
    name: "Anita",
    address: {
    city: "Hyderabad",
    pincode: 500085
}
},
items: [
    { product: "Laptop", price: 70000 }
]
};

// we can also use const copyOfStudent=JSON.parse(JSON.stringify(student))
// creating deep copy of order object using structuredClone
const copiedOrder=structuredClone(order)

// modifying city in copied object
copiedOrder.customer.address.city="Bombay"

// modifying items[0] price in copied object
copiedOrder.items[0].price=50000

//  verify original object remains unchanged
console.log("Original Order:",order)
console.log("Copied Order:",copiedOrder)

// Observation
// we can see that the original object will remain the same even if we change the nested values in the copied object because of using the deep copy