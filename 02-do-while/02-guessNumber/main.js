let ans = ''

do {
    ans = prompt('Enter your number')
    if(ans === null) break;
    if(ans == '' || isNaN(ans) || ans < 1 || ans > 99) {
        alert('Invalid input, please use 1-99')
    } else break;
} while (true)

let guess = ''

do {
    if(ans === null || guess === null) break;
    guess = prompt('Guess a number')
    if(guess == '' || isNaN(guess) || guess < 1 || guess > 99) {
        alert('Invalid input, please use 1-99')
    } else if(guess > ans) alert('Too high, please try again')
    else if (guess < ans) alert('Too low, please try again')
    else if(guess == ans) {
        alert('Correct!!')
        break;
    }

} while (true)