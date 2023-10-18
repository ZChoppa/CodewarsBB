// Return the number (count) of vowels in the given string.
//
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
//
// The input string will only consist of lower case letters and/or spaces.

// split string into individual letters in an array
// iterate through the array making count go up 1 for each vowel
//return count of vowels

function getCount(str) {
  // let strArr = str.split("")
  let count = 0
  for(i = 0; i < str.length; i++){
    if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u" ){
      count += 1
  }
  }
  // strArr.forEach(x => x=== "a" || x === "e" || x === "i" || x=== "o" || x === "u" ? count += 1 : count += 0)

  return count;
}
console.log(getCount("abracadabra"), 5)


// Problem 2:
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// attempt to do this in one line using a turnary
// use modulus to detrmine odd or even, (true or false)

  let evenOrOdd = number => number % 2 === 0 ? "Even" : "Odd"
