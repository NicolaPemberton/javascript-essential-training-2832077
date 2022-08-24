/**
 * Challenge: Create a new object type
 * 
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

const harryPotter = new Book(
  'Harry Potter and the Philosophers Stone',
  'JK Rowling',
  342,
  'January 1, 1999 12:00:00 GMT',
  true,
  9
)

const northernLights = new Book(
  'Northern Lights',
  'Phillip Pullman',
  401,
  'February 2, 2000 12:00:00 GMT',
  true,
  8
)

const theGreatGatsby = new Book(
  'The Great Gatsby',
  'F Scott Fitzgerald',
  211,
  'May 15, 1941 15:00:00 GMT',
  false,
  7
)

const janeEyre = new Book(
  'Jane Eyre',
  'Charlotte Bronte',
  366,
  'September 9, 1847 19:00:00 GMT',
  false,
  6
)

const slaughterhouseFive = new Book(
  'Slaughterhouse-Five',
  'Kurt Vonnegut',
  196,
  'March 1, 1969 11:00:00 GMT',
  true,
  5
)



console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

console.log("My books are", harryPotter.title, northernLights.title, theGreatGatsby.title, janeEyre.title, slaughterhouseFive.title)
console.log("Harry Potter was released", harryPotter.bookAge(), 'days ago')
console.log(northernLights)
