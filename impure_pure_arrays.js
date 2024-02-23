const persons = [{ name: "Sebastian" }];

// Impure function
let arrayLengthCounter = 0;
function getArrayLength(persons) {
  persons.forEach(() => {
    arrayLengthCounter++;
  });

  return arrayLengthCounter;
}
// Pure Function
function getArrayLengthPure(persons) {
  return persons.length;
}

console.log(persons);
console.log(getArrayLengthPure(persons));
console.log(persons);
console.log(getArrayLength(persons));
console.log(getArrayLength(persons));
console.log(getArrayLength(persons));
