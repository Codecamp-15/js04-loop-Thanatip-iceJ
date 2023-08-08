//FizzBuzz

for(let i = 1; i <= 20; i++) {
    if(i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz')
    else if (i % 3 === 0) continue;
    else if (i % 5 === 0) console.log('Buzz')
    else console.log(i)
}


let src = 'codecamp'
let res = ''; //cdcmp

for(let i = 0; i < src.length; i++) {
    let isVowel = src[i] === 'o' || src[i] === 'e' || src[i] === 'a' || src[i] === 'i' || src[i] === 'u' ;
    if(isVowel) continue;
        res += src[i]
}
console.log(res)

for(let i = 2; i <=12; i++) {
    console.log(`Multiple formula for ${i}`)
    for(let j = 1; j <= 12; j++) {
        console.log(`${i} x ${j} = ${i * j}`)
    }
    console.log('\n')
}