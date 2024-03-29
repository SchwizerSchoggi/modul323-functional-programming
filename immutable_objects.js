const PI = 3.141592653589793;

const person = {
  firstName: "Sebastian",
  age: 29,
  job: 'Lead Engineer'
};
console.log(person);

const person2 = {
  ...person,
  lastName: "Keable",
};
console.log(person2);

const person3 = {
  ...person2,
  age: person2.age * 10,
};
console.log(person3);

const { age, ...person4 } = person3;
console.log(age);
console.log(person4);
