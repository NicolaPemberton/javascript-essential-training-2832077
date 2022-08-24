/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Backpack from "./Backpack.js";
import Fridge from "./fridge.js";

const standardFridge = new Fridge(
  "Standard fridge",
  "Large",
  5,
  false,
  "Carrots",
  "Coca Cola"
);

const technoFridge = new Fridge(
  "Techno fridge",
  "Medium",
  true,
  4,
  "Ham",
  "Wine"
);

const crappyFridge = new Fridge(
  "Crappy fridge",
  "Small",
  1,
  true,
  "Leftover soup",
  "Water"
);

const jansport = new Backpack(
  "Standard backpack",
  5,
  "Green",
  10,
  26,
  25,
  true
);

console.log("Why cant it find my", standardFridge.name);
console.log("This is my ", technoFridge.name);
console.log("My crappy fridge is", crappyFridge.size);
console.log("The door is open:", crappyFridge.doorOpen)
crappyFridge.openDoor(false)
console.log("The door is open:", crappyFridge.doorOpen)

console.log(
  "This is a crappy backpack",
  jansport.name,
  "with strap lengths",
  jansport.strapLength.left,
  jansport.strapLength.right
);
jansport.newStrapLength(10, 15);
console.log(
  "Amended strap legnth",
  jansport.strapLength.left,
  jansport.strapLength.right
);
