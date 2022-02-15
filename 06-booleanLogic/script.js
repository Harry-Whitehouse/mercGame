let isEngineWorking = true;
let distance = 2000;
let remainingFuel = 250;

let distanceCondition = distance <= 200 && distance >= 100;

// if (distance <= 25) {
//     remainingFuel = remainingFuel - 25;
// }

if (distance > remainingFuel || !isEngineWorking) {
    if (distance > remainingFuel) {
        console.log("You ran out of fuel!");
    }
    if (!isEngineWorking) {
        console.log("Your engine is broken!");
    }
    console.log("Lost in Space.");
} else if (distanceCondition && remainingFuel >= distance) {
    remainingFuel -= distance;
    console.log("You made it! remaining fuel:", remainingFuel);
} else if (distance < 25) {
    remainingFuel -= 25;
    console.log("short trip, fuel remaining:", remainingFuel);
}