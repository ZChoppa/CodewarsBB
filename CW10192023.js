// You might know some pretty large perfect squares. But what about the NEXT one?
//
// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
//
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// find square root of number, determine if has decimals ? return -1 : add 1 and return square

function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  let root = Math.sqrt(sq)
// tried with this 1st
  return root % 1 === 0 ? Math.pow(root+1,2) : -1
// then this and both worked but forgot to return it to get an output :((

// return Number.isInteger(root) ? Math.pow(root+1,2) : -1

// could probably shorten to 1 line: return Math.sqrt(sq) % 1 === 0 ? Math.pow(Math.sqrt(sq)+1,2) : -1

}


//2...
function getSum(a, b){
   //Good luck!
  let sum = 0
  if(a > b){
    for(i = b; i <= a; i++){
      sum += b
    }
  }else if(b > a){
      for(i = a; i <= b; i++){
    sum += a
  }
    }else{
    sum = a
  }
  return sum
}
//big dumb ^^^ was adding the starting number over and over so wasn't working correctly. starting at the lowest number all I have to do is add the iteration each time until it reaches the highest number. Should look like this instead
function getSum(a, b){
   //Good luck!
  let sum = 0
  if(a > b){
    for(i = b; i <= a; i++){
      sum += i
    }
  }else if(b > a){
      for(i = a; i <= b; i++){
    sum += i
  }
    }else{
    sum = a
  }
  return sum
}

getSum(5,-1)
