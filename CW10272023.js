// CW 10-27-2023
//
// 1.
// This series of katas will introduce you to basics of doing geometry with computers.
//
// POINT OBJECTS HAVE ATTRIBUTES X AND Y.
//
// Write a function calculating distance between Point a and Point b.
//
// Input coordinates fit in range
// −
// 50 ⩽ � , � ⩽ 50
// −50⩽x,y⩽50. Tests compare expected result and actual answer with tolerance of 1e-6.
function distanceBetweenPoints(a, b) {
let xVal =  Math.abs(a.x - b.x)
let yVal = Math.abs(a.y - b.y)
return Math.sqrt(xVal**2 + yVal**2)
  }
// Z: fun fun... had to do some deep diving on how to access point values. should have known to use dot notation on an object....
// Z: Read the descriptions/instructions more carefully. could lead to better understanding of solution
