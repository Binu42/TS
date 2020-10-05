const name = 'Binu',
  age = 24,
  gender = 'male';

const sayHi = (name: string, age: Number, gender?: string): string => {
  return `Hello ${name}, you are ${age}year old and you are ${gender}`;
};

console.log(sayHi(name, age, gender));
console.log(sayHi(name, age));

export {};
