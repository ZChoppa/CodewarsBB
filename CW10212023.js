// 10-21-2023
// 1.
// Task
// Two players - "black" and "white" are playing a game. The game consists of several rounds. If a player wins in a round, he is to move again during the next round. If a player loses a round, it's the other player who moves on the next round. Given whose turn it was on the previous round and whether he won, determine whose turn it is on the next round.
//
// Input/Output
// [input] string lastPlayer/$last_player
//
// "black" or "white" - whose move it was during the previous round.
//
// [input] boolean win/$win
//
// true if the player who made a move during the previous round won, false otherwise.
//
// [output] a string
//
// Return "white" if white is to move on the next round, and "black" otherwise.
//
// Example
// For lastPlayer = "black" and win = false, the output should be "white".
//
// For lastPlayer = "white" and win = true, the output should be "white".


// Z:if statement is easiest for me to comprehend at the moment so just list conditions for black to go next and everything  in else will be a white goes next situatuion

function whoseMove(lastPlayer, win) {
  //coding and coding..
  if((lastPlayer === "black" && win) || (lastPlayer === "white" && !win)){
    return "black"
  }else {
    return "white"
  }


}
// stolen solution... someone please explain!!!
function whoseMove(lastPlayer, win) {
  return win?lastPlayer:lastPlayer=="white"?"black":"white"
}

// 2.Create a class Ghost
//
// Ghost objects are instantiated without any arguments.
//
// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated
//
// ghost = new Ghost();
// ghost.color => "white" or "yellow" or "purple" or "red"


// Z:this one was worded a little funny for me to understand. looks like we found some class work.
// Z:create constructor for ghost, return random colors when asked for ghost color.
// Z:easiest way for me is to list colors in an array and pull them at random

class Ghost{
  constructor(){
    let color =['white','yellow','purple','red']
    this.color = color[Math.floor(Math.random() * 4)]
  }
}
