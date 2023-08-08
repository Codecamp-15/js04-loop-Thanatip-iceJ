let res = ''

for(let i = 0; i < 4; i++) {
    for(let j = 0; j <= i; j++) {
        res += '* '
    }
    res += '\n'
}
console.log(res)