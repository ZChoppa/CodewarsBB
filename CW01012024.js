// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
//
// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

// we are given a number. we must put those numbers in an array in the reversed order given. Output should be an array.

console.log(newArr(35231, [1,3,2,5,3] ))
console.log(newArr(0, [0] ))
console.log(newArr(98765, [5,6,7,8,9] ))

// convert to string. split into array. reverse array. convert to numbers instead of strings. return array.

function newArr(arr){
  // convert to string and put into array
let arr1 =String(arr).split('').reverse()
// change strings to numbers
let newArr1 = arr.map(n => Number(n))
// return array
return newArr
}
