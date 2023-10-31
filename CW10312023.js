// Codewars 10-31-2023 

// 1.
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
//
// For example:
//
// a = 1
// b = 4
// --> [1, 2, 3, 4]
function between(a, b) {
  let newArr = []
  for (let i = a; i <= b; i++){
    newArr.push(i)
  }
  return newArr
}

// 2.
// You get an array of numbers, return the sum of all of the positives ones.
//
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
//
// Note: if there is nothing to sum, the sum is default to 0.


function positiveSum(arr) {
  for(i = 0; i < arr.length; i++){
    if (arr[i] < 0){
      arr[i] = 0}
    }
 return arr.reduce((acc,c)=> acc + c, 0)
  }
