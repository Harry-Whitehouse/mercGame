//Challenge, calculating ship weight

let baseWeight = 10000;
let foodWeight = 100;
let passengerWeight = 10;
let miscWeight = baseWeight + foodWeight + passengerWeight;

let fuelWeight = 2;
let fuelUnits = 100;
let totalFuelWeight = fuelWeight * fuelUnits;

let totlalWeight = miscWeight + totalFuelWeight;

console.log("Total Weight =", totlalWeight);