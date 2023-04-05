type Fish1 = { swim: () => void };
type Bird1 = { fly: () => void };

function isFish(pet: Fish1 | Bird1): pet is Fish1 {
  return (pet as Fish1).swim !== undefined;
}

function move(animal: Fish | Bird) {
  if (isFish(animal)) {
    return animal.swim();
  }
  return animal.fly();
}

// function isNull(val: any): val is null {
//   return !val;
// }
