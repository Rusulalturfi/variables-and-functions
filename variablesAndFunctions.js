//instructions
//Task 1: Flexible String Manipulation with Functions
//Create a function called formatFullName that takes two parameters: firstName and lastName. The function should return the full name in the format lastName, firstName.
//Format the firstName and lastName so that the first letter of each is always capatilized.
//Add a condition that checks if either the first or last name is missing. If so, return a string saying Invalid name input.


//function formatFullName(firstName = "", lastName = "") {
  //firstName = firstName.trim();

  //lastName = lastName.trim();

  //if (firstName === "" || lastName === "") {
    //return "Invalid name input.";
  //}

  //const first = firstName[0].toUpperCase() + firstName.slice(1);
  //const last = lastName[0].toUpperCase() + lastName.slice(1);

  //return `${last}, ${first}`;
//}

//console.log(formatFullName("rusul", "al-Turfi"));
//console.log(formatFullName("rusul"));
//console.log(formatFullName("rusul", "al-Turfi"));
//console.log(formatFullName("rusul"));


//Task 2: Mathematical Operations with Multiple Parameters
//Write a function called calculateTotalCost that takes three parameters: price, quantity, and taxRate.
//The function should calculate the total cost of items, including tax. Use the formula: totalCost = (price * quantity) * (1 + taxRate).
//Ensure that price, quantity, and taxRate are all valid numbers. If any are invalid, return a string: “Invalid input.”

//function calculateTotalCost(price, quantity, taxRate) {
  //if (
    //!Number.isFinite(price) ||
    //!Number.isFinite(quantity) ||
    //!Number.isFinite(taxRate)
  //) {
    //return "Invalid input.";
 // }

  //const subtotal = price * quantity;
  //return subtotal * (1 + taxRate);
//}

//console.log(calculateTotalCost(20, 2, 0.10));   // 44
//console.log(calculateTotalCost("20", 2, 0.10)); // Invalid input.


//Task 3: Functions with Conditional Logic
//Write a function called checkEligibility that takes two parameters: age and isEmployed. The function should check if a person is eligible for a program based on the following rules:
//If the person is over 18 and employed, they are eligible.
//If the person is over 18 but unemployed, they are conditionally eligible.
//If the person is 18 or younger, they are not eligible.
//Return an appropriate string message for each scenario.

//function checkEligibility(age, isEmployed){
   // if (age <= 18){
        //return "not eligible.";
    //}
    //if (isEmployed){
        //return "eligible";
    //}

   // return "conditionally eligible";
//}
//console.log(checkEligibility(25,true)); //Eligible.
//console.log(checkEligibility(25, false)); //conditionally eligible.
//console.log(checkEligibility(18, true)); //Not eligible.
// Task 4
function calculateTotalCost(price, quantity, taxRate, discount = 0) {
  if (
    !Number.isFinite(price) ||
    !Number.isFinite(quantity) ||
    !Number.isFinite(taxRate) ||
    !Number.isFinite(discount)
  ) {
    return "Invalid input.";
  }

  const subtotal = price * quantity - discount;
  return subtotal * (1 + taxRate);
}

console.log(calculateTotalCost(20, 2, 0.10, 10)); // 33
console.log(calculateTotalCost(20, 2, 0.10));     // 44