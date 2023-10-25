// Codewars 10-25-2023
// 1.

// The aspect ratio of an image describes the proportional relationship between its width and its height. Most video shown on the internet uses a 16:9 aspect ratio, which means that for every pixel in the Y, there are roughly 1.77 pixels in the X (where 1.77 ~= 16/9). As an example, 1080p video with an aspect ratio of 16:9 would have an X resolution of 1920, however 1080p video with an aspect ratio of 4:3 would have an X resolution of 1440.
//
// Write a function that accepts arbitrary X and Y resolutions and converts them into resolutions with a 16:9 aspect ratio that maintain equal height. Round your answers up to the nearest integer.

// Z: the want the new x value and the original y value returned. Using the 1.77 pixels in x for every 1 y pixel helps to get the new number. Rounding up means using Math.ceil instead of Math.round
function aspectRatio(x,y){
  let xMod = Math.ceil( y * 16/9 )
  return [xMod, y]
}

// 2.

// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
//
// P.S. Each array includes only integer numbers. Output is a number too.

// Z: helping a new coder sum 2 arrays. the given code from this is below and we need to fix it. instead of iterating and sum through each using the reduce method.

function arrayPlusArray(arr1, arr2){
  return arr1 + arr2
}

// fixed
function arrayPlusArray(arr1, arr2) {
  return arr1.reduce((acc,c) => acc + c , 0) + arr2.reduce((acc,c) => acc + c , 0 ); //something went wrong
}

// 3.

// Complete the function which converts hex number (given as a string) to a decimal number.

// Z: built in function that does the heavy lifting, just looking up syntax and plopping it in.


function hexToDec(hexString){
  return parseInt(hexString, 16)
}
