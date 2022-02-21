let database = ["Tea", "Coffee", "Juice", "Milk"];

database.push("water"); //add new item to array

database[1] = "Latte"; //change item in array

database.pop();

console.log(database);
console.log(database.length);

let drink = database[1]; //log item in array

console.log(drink);

let last = database[database.length - 1];

console.log(last);

//iterating over an array

//while loop

let scores = [10, 20, 10];

let i = 0;
while (i < scores.length) {
    scores[i]++;
    i++;
}
console.log("scores i:", scores);

//for loop

for (let j = 0; j < scores.length; j++) {
    scores[j]++;
}
console.log("scores j:", scores);

scores.forEach(function(entry, index) {
    scores[index]++;
    console.log("score:", entry, "index:", index);
});

console.log(scores);

let catalogue = [{
        Title: "JS for beginners",
        Author: "Zenva",
        Copies: 1,
    },
    {
        Title: "JS for noobs",
        Author: "notZenva",
        Copies: 1,
    },
    {
        Title: "Advanced JavaScript",
        Author: "Zenva",
        Copies: 1,
    },
    {
        Title: "How to repair washing machines.",
        Author: "notZenva",
        Copies: 1,
    },
];

catalogue.forEach(function(entry, index) {
    if (entry.Author == "Zenva") {
        entry.Copies++;
    }
});

console.log(catalogue);

// let map = [
//     [
//         [row1[(col1, col2, col3, col4)]],
//         [row2[(col1, col2, col3, col4)]],
//         [row3[(col1, col2, col3, col4)]],
//         [row4[(col1, col2, col3, col4)]],
//     ],
// ];
// console.log(map);

let a = [
    [1, 2, 3],
    [4, 5, 6, 7],
];

console.log(a[1][2]);

let map = [
    ["Desert", "Desert", "Grass", "Grass"],
    ["Desert", "Grass", "Water", "Grass"],
    ["Grass", "Grass", "Water", "Water"],
    ["Grass", "Grass", "Grass", "Grass"],
];
console.log(map);

console.log(map[2][3]);