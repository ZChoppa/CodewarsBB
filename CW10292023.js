// Codewars 10-29-2023
//
// 1.
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
//
// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// Z: filter method. return number that is an integer. see what everyone else did ...
function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter(num => Number.isInteger(num))
}
// Z: learn **typeof**

// 2.
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
//
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
//
// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
//
// Note: The function accepts an integer and returns an integer.
//
// Happy Coding!

// Z: split into an array. square each number. concat them dudes into a single number.

function squareDigits(num){
  let func = num => Number(num)
  let arr = Array.from(String(num), func)
  let retArray = arr.map(n => n**2)
  let returnedNum = retArray.join("")
  return +returnedNum
}
