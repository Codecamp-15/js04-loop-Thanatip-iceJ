// let str = prompt('Enter a number')
// sum = 0

// for(i of str) {
//    sum += +i
//    console.log(sum) 
// }

// let num = prompt('Enter a number');
let num = '123456'

let sum = 0;
let count = 0;

while (num) {
    let remainder = num % 10;
    num = (num - remainder) / 10;
    sum += remainder;
    count++
}
console.log(count, sum)
