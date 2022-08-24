/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const wardrobe = {
  colour: "white",
  material: "wood",
  doors: 2,
  doorsOpen: false,
  toggleDoors: function (doorStatus) {
    this.doorsOpen = doorStatus;
  },
  clothing: {
    shirt: {
      colour: "blue",
      pockets: 1,
      fit: "regular",
    },
    dress: {
      colour: "green",
      pockets: 0,
      fit: "oversized",
    },
  },
};

var eh = "material";
console.log("This is the wardrobe material:", wardrobe[eh]);
console.log("This is the wardrobe colour:", wardrobe.colour);
