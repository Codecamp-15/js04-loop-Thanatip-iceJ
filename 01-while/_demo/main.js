// let i = 0 

// while(i < 50) {
//     if(i%3=== 0) {
//         console.log(i)
//     } else if (i % 5 === 0) {
//         console.log(`${i}: Five`)
//     }
//     i++
// }

// FizzBuzz Problem
// Range 1-20;
//  divided by 3 : PRINT FIZZ
// divided by 5 : PRINT Buzz
// divided by 3,5 : PRINT FizzBuzz
// other : PRINT number

let i = 1

while(i <= 20) {
    if (i % 3 === 0 && i % 5 === 0) console.log(`FizzBuzz`)
    else if(i % 3 === 0) console.log('Fizz')
    else if(i % 5 === 0) console.log(`Buzz`)
    else console.log(i)
    i++
}