// interface Human {
//   name: string;
//   age: Number;
//   gender: string;
// }

// class Human {
//   public name: string;
//   public age: number;
//   public gender: string;
//   constructor(name: string, age: number, gender?: string) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }
// }

// const binu = new Human('Binu', 24, 'male');
// const optionalBinu = new Human('Binu', 24);

// const sayHi = (person: Human): string => {
//   return `Hello ${person.name}, you are ${person.age}year old and you are ${person.gender}`;
// };

// console.log(sayHi(binu));
// console.log(sayHi(optionalBinu));

import * as CryptoJS from 'crypto-js';
class Block {
  public index: number;
  public hash: string;
  public prevHash: string;
  public data: string;
  public timestamp: number;

  static calculateBlockHash = (
    index: number,
    prevHash: string,
    data: string,
    timestamp: number
  ) => CryptoJS.SHA256(index + prevHash + data + timestamp).toString();

  constructor(
    index: number,
    hash: string,
    prevHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.prevHash = prevHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genesisBlock: Block = new Block(0, 'dsjf2423', '', 'helolo world', 12345);
const blockChain: Block[] = [genesisBlock];

const getBlockChain = (): Block[] => blockChain;

const getLatestBlock = (): Block => blockChain[blockChain.length - 1];

const getNewTimestamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
  const previousBlock: Block = getLatestBlock();
  const newIndex: number = previousBlock.index + 1;
  const timestamp: number = getNewTimestamp();
  const nextHash: string = Block.calculateBlockHash(
    newIndex,
    previousBlock.hash,
    data,
    timestamp
  );

  const newBlock = new Block(
    newIndex,
    nextHash,
    previousBlock.hash,
    data,
    timestamp
  );
  return newBlock;
};

console.log(createNewBlock('hello'), createNewBlock('bye bye'));

export {};
