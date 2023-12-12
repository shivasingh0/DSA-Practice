// Reverse String

let str = 'hello world';  // Que. - 1

let reverseStr = str.split(' ')
// Method -1
// let secondReverse = reverseStr[0].split('').reverse().join('')
// let thirdReverse = reverseStr[1].split('').reverse().join('')

// console.log(secondReverse,thirdReverse);

// Method - 2
let loopReverse = ""
for (let index of reverseStr ) {
    let seconedReverse = index.split('').reverse().join('')
    loopReverse += seconedReverse
}

console.log(loopReverse);