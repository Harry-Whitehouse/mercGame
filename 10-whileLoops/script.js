function sendSignal() {
    console.log("SOS");
}

let i = 0;
while (i < 1000) {
    i++;
    sendSignal();
}

let result = 0;

let j = 1;
while (j <= 10) {
    result += j;
    console.log(result);
    j++;
}
console.log(result);