// Write a function which calculates the average of the numbers in a given list.
//
// Note: Empty arrays should return 0.
//

// Take a given array. return the average of the numbers within. if array is empty or equals 0 return 0.
console.log(findAverage([1,1,1], 1))
console.log(findAverage([1,2,3], 2))
console.log(findAverage([1,2,3,4], 2.5))
console.log(findAverage([],0))
console.log(findAverage([0], 0))
// find length of array. find total of numbers in array. divide
function findAverage(array){
  // write if statement to include empty and 0 arrays.
  if(array.reduce((a, acc)=> a + acc,0) === 0|| array.length === 0){
    return 0
  }else{
    // include cases where array is > 0 or has numbers
  return array.reduce((a, acc)=> a + acc,0) / array.length
}
}
