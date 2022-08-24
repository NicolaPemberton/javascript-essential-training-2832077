/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items - Done
 * - Remove the last item - Done
 * - Add the last item as the first item on the array - Done?
 * - Sort the items by alphabetical order - Done
 * - Use the find() method to find a specific item in the array - Done
 * - Remove the item you found using the find method from the array. - Done
 */

// Build an array with 8 items - Done
const fridgeContents = ['Carrot', 'Milk', 'Spinach', 'Cheese', 'Oat milk', 'Coke', 'Yoghurt', 'Butter']

// Remove the last item
fridgeContents.pop()
console.log(fridgeContents)

// Add the last item as the first item on the array 
const lastItem = fridgeContents.pop()
fridgeContents[0] = lastItem
console.log(fridgeContents)

//Actual solution
deskArray.unshift(deskArray.pop());
console.log("Last item is now first:", deskArray);

// Sort the items by alphabetical order - Done
fridgeContents.sort()
console.log(fridgeContents)

// Use the find() method to find a specific item in the array - Done
function isCheese(dairy) { return dairy === 'Cheese'; }
console.log(fridgeContents.find(isCheese))

//Alternative

const foundItem = fridgeContents.find((item) => item === 'Cheese')
console.log('Found item: ', foundItem)

// Remove the item you found using the find method from the array.
const indexOfCheese = fridgeContents.indexOf('Cheese')
fridgeContents.splice(indexOfCheese, 1)
console.log(fridgeContents)

//Alternative
let remove = "notebook";
deskArray.splice(deskArray.indexOf(remove), 1);
console.log(`Array with "${remove}" removed:`, deskArray);

