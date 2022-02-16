// function hourToMins(hours) {
//     return hours * 60;
// }

// let a = hourToMins(100);
// console.log(a);

// let dayToHours = function(days) {
//     return days * 24;
// };

// let b = dayToHours(1);
// console.log(b);

//shop

let balance = 100;
let stock = 50;
let price = 5;

// function sellItem(quantity) {
//     if (quantity <= stock) {
//         // if the quantity is less than or equal to
//         //  current stock, stock will be reduced
//         //  and balance will increase
//         stock -= quantity;
//         balance += quantity * price;
//         console.log("purchase complete, stock level:", stock, "balance:", balance);
//     } else if (stock < quantity) {
//         quantity = quantity - stock;

//         balance += quantity * price;

//         console.log("not enough stock.", stock, "units sold. Balance:", balance);
//     } else {
//         console.log("Not enough stock! remaining stock:", stock);
//     }
// }

// sellItem(14);
// sellItem(14);
// sellItem(14);
// sellItem(14);
// sellItem(14);
// sellItem(14);
// sellItem(7);
// sellItem(7);

//issue with quantity not staying at 0, and balance increases by remainder instead of products sold.

//code below seems to have fixed issue

function sellItem(quantity) {
    if (quantity <= stock) {
        stock -= quantity;
        balance += price * quantity;
        console.log(
            "purchase completed remaining stock:",
            stock,
            "balance:",
            balance
        );
    } else if (stock < quantity) {
        quantity = stock;
        balance += stock * price;
        console.log(
            "insuficient stock.",
            quantity,
            "units sold. remaining stock",
            quantity - stock,
            "credits:",
            balance
        );
    } else {
        console.log("not enough credits");
    }
}

sellItem(10);
sellItem(10);
sellItem(10);
sellItem(10);
sellItem(8);
sellItem(10);