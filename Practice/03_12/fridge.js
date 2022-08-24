//Trying to create my own class

class Fridge {
  constructor(name, size, compartments, doorOpen, food, drink) {
    //Define properties
    this.name = name,
      this.size = size,
      this.compartments = compartments,
      this.doorOpen = doorOpen,
      this.food = food,
      this.drink = drink;
  }
  openDoor(newDoorStatus) {
    this.doorOpen = newDoorStatus;
  }
}

export default Fridge;
