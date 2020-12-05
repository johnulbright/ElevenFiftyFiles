//Bronze
let myName = "John";
let friend = "Martin";
let letters = Math.abs(myName.length - friend.length);

console.log(myName.length);
console.log(friend.length);

//Silver
myName.length > friend.length
  ? console.log(`My name is longer than ${friend}'s.`)
  : myName.length < friend.length
  ? console.log(`My name is shorter than ${friend}'s.`)
  : console.log(`My name is the same length as ${friend}'s`);

//Gold
myName.length > friend.length
  ? console.log(`${friend}'s name is shorter than mine by ${letters} letters.`)
  : myName.length < friend.length
  ? console.log(`${friend}'s name is longer than mine by ${letters} letters.`)
  : console.log(`My name is the same length as ${friend}'s`);

// CHALLENGE 2
// Types Challenge
/* BRONZE
 * Create an Object that contains a string, number, boolean, and object.
 * Console.log the type of one of the values in the object.
 */

let junkDrawer = {
  myString: "But Animal Deb did bedlam in a tub",
  myNumber: 42,
  myBoolean: 2 + 2 == 5,
  myObject: { otherString: "pickles are tasty", otherNumber: 7 },
};

console.log(typeof junkDrawer.myString);
console.log(typeof junkDrawer.myNumber);
console.log(typeof junkDrawer.myBoolean);
console.log(typeof junkDrawer.myObject);

/* SILVER
 * Write a conditional that checks the type of one of the values stored in the object
 * and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'
 */

typeof junkDrawer.myNumber == "number" ||
typeof junkDrawer.myNumber == "string" ||
typeof junkDrawer.myNumber == "boolean" ||
typeof junkDrawer.myNumber == "object"
  ? console.log("It's a " + typeof junkDrawer.myNumber + "!")
  : console.log("What are you?");

var types = ["number", "string", "boolean", "object"];

types.includes(typeof junkDrawer.myNumber)
  ? console.log("It's a " + typeof junkDrawer.myNumber + "!")
  : console.log("What are you?");
