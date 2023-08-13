
for(let i = 2; i <= 100;i++) {
    let isPrime = true;
    for(let d = 2; d < i; d++) {
        if(i % d === 0) {
            isPrime = false;
            break;
        };
    }
    if(isPrime) console.log(i)
}