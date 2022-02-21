//shop

// let item = "engine";

// if (item != "engine") {
//     console.log("not engine");
// }

// let score = 100;

// if (score >= 60) {
//     console.log("pass");
// } else if (score < 10) {
//     console.log("Oh Dear!");
// } else {
//     console.log("Fail");
// }

// let isEngine = item == "engine";
// console.log(isEngine);

//Challege

let balance = 100;
let itemPrice = 100;

if (balance >= itemPrice) {
    balance = balance - itemPrice;
    console.log("Item Purchased!");
    console.log("New credits balance", balance);
} else if (itemPrice > balance) {
    console.log("insufficient funds!");
    console.log("you need", itemPrice - balance, "more credits to purchase!");
}