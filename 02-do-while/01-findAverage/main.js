let sum = 0;
let avg = 0;
let count = 0;
let input;

do {
    input = prompt('Enter a number')
    if(input === null || input == '' || +input <= 0 || isNaN(input) ) break;
    sum += +input;
    count++

} while (true)

console.log(sum, count)
avg = sum / count;
console.log(avg.toFixed(2))
