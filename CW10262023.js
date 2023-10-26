// CW- 10-26-2023
//
// 1.
//
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.
//
// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
//
// Example:
// move(3, 6) should equal 15
// 3 being the starting position and 6 being the die roll

function move (position, roll) {
  // return the new position
  return position + roll * 2
}

// 2.

// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
//
// Example
// ['hello', 'world', 'this', 'is', 'great']  => 'hello world this is great'

function smash (words) {
   return words.join(" ")
};

// 3.

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
//
// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.


// Z:This one hurt... a lot
// finding the right combo of methods and sorting after they turn to numbers... what a bitch

function highAndLow(numbers){
  let numArr = numbers.split(" ")
  let numbersN = numArr.map(Number).sort((a,b)=>a-b)
  return `${numbersN[numbersN.length - 1]} ${numbersN[0]}`
}
