// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
//
// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
//
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
//
// Write a code that gives out the total amount for different days(d).
//
// create a function
function rentalCar(d){
// car cost $40 a day to rent.
  let cost = d * 40
// discounts for 3 or more days and 7 or more days use if statement to determine discount amount
// use 7 day first so the if doesn't stop at the >= 3

  if(d >= 7){
    return cost -= 50
  }else if(d >= 3){
    return cost -= 20
//return base for codewars testing
}else{
  return cost
}
}
