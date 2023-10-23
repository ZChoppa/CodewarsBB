// Write a method, that will get an integer array as parameter and will process every number from this array.
//
// Return a new array with processing every number of the input-array like this:
//
// If the number has an integer square root, take this, otherwise square the number.
//
// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Notes
// The input array will always contain only positive numbers, and will never be empty or null.

function squareOrSquareRoot(array) {
  let outputArray = []
  for(i = 0; i < array.length; i++){
    if(Math.sqrt(array[i]) % 1 === 0){
      outputArray.push(Math.sqrt(array[i]))
    }else{
      outputArray.push(Math.pow(array[i],2))
    }
  }
  return outputArray
}
// 2.
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
//
// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
function makeNegative(num) {
  // Code?
  if(num < 0){
    return num
  }else {
    return num * -1
  }
}
 let makeNegative = num => num < 0 ? num : num * -1


//  3.
//  Create a method to see whether the string is ALL CAPS.
//
// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True

function isUpper(word){
  return word.toUpperCase() === word
}

// 4.
// Create a function that always returns true for every item in a given list. However, if an element is the word "flick", switch to always returning the opposite boolean value.
//
// Examples
// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]
//
// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]
//
// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
// Notes
// "flick" will always be given in lowercase.
// A list may contain multiple flicks.
// Switch the boolean value on the same element as the flick itself.

//Z: return a new array that is just true and false for each value.
//Z: if the value is flick start returning the opposite
function flickSwitch(arr){
let boo = true
 return arr.map( x => {
    if(x =='flick'){
      boo = !boo
      return boo
    } else{
      return boo
    }
    }
)
}
// Thanks Raticide for the assist
