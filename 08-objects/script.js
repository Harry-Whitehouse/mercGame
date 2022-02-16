//objects are collections of properties

let player = {
    Name: "Harry",
    age: 26,
    isActive: true,
    outfit: {
        //objects can contain objects
        colour: "Blue",
        size: "M",
        cost: 10,
        isNew: true,
    },
};

//different methods of accessing objects
// console.log(player.Name);
// console.log(player["age"]);

//changing the value of an objects property.
player.isActive = false;

//adding a property
player.health = 100;

//deleting a property
delete player.health;

console.log(player); // accessing the property of an object within an object.

player.outfit.size = "L"; //changing a property within an objects object