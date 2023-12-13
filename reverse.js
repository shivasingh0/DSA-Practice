// Reverse String

let str = 'hello world';  // Que. - 1

let reverseStr = str.split(' ')
// Method -1
let secondReverse = reverseStr[0].split('').reverse().join('')
let thirdReverse = reverseStr[1].split('').reverse().join('')

// console.log(secondReverse,thirdReverse);

// Method - 2
let loopReverse = ""
for (let index of reverseStr ) {
    let seconedReverse = index.split('').reverse().join('')
    loopReverse += seconedReverse
}

// console.log(loopReverse);
 
let s = ["h","e","l","l","o"]   // Que. - 2
var reverseString = function() {
     s.reverse();
    return s
};
console.log(reverseString());


// Reverse Array
// Que - 2
let arr = [1, 4, 3, 2];  // outPut - 2 3 4 1
function reverseArr () {
let intArr = arr.reverse()

 return intArr.toString().replaceAll(","," ")
 
}
console.log(reverseArr());