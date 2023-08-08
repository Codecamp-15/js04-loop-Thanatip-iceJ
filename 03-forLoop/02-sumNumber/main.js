let sum = 0
let summedEvens = 0
let summedOdds = 0
let dividedBy3Pow2 = 0
let dividedBy2Pow2 = 0
let finalRes = 0

for(let i = 1; i <= 100; i++) {
    sum += i;
    (i % 2 === 0)? summedEvens += i : summedOdds += i;
    if(i % 2 === 0) dividedBy2Pow2 += i ** 2
    if(i % 3 === 0) dividedBy3Pow2 += i ** 2
}

finalRes = dividedBy2Pow2 - dividedBy3Pow2;

console.log(sum)
console.log(summedEvens)
console.log(summedOdds)
console.log(dividedBy2Pow2)
console.log(dividedBy3Pow2)
console.log(finalRes)

// for(let i = 1; i <= 100; i++) {
    //     sum += i
    //     if(i % 2 === 0) {
        //         summedEvens += i
        //     }
        //     if(i % 2 !== 0) {
            //         summedOdds += i
//     }
// }

// for(let i = 1; i <= 100; i++) {
    //     if(i % 2 !== 0) continue;
    //      dividedBy2Pow2 += i ** 2
    //     //  console.log(dividedBy2Pow2)
    // }
    
    // for(let i = 1; i <= 100; i++) {
        //     if(i % 3 !== 0) continue;
        //     dividedBy3Pow2 += i ** 2;
        // }
        
        // finalRes = dividedBy2Pow2 - dividedBy3Pow2