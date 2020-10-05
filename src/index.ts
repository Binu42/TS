// interface Human {
//   name: string;
//   age: Number;
//   gender: string;
// }

class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender?: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const binu = new Human('Binu', 24, 'male');
const optionalBinu = new Human('Binu', 24);

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}year old and you are ${person.gender}`;
};

console.log(sayHi(binu));
console.log(sayHi(optionalBinu));

export {};
