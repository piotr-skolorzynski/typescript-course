class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public colletion: T[]) {}

  get(index: number): T {
    return this.colletion[index];
  }
}

// examp of genric type inference in classes
const arr = new ArrayOfAnything(['a', 'b', 'c']);

//example of generics with functions

const printStrings = (arr: string[]): void => {
  arr.map((el) => console.log(el));
};

const printNumbers = (arr: number[]): void => {
  arr.map((el) => console.log(el));
};

//generic funtion
const printAnything = <T>(arr: T[]): void => {
  arr.map((el) => console.log(el));
};
// or classic function
// function printAnything<T>(arr: T[]): void {
//   arr.map((el) => console.log(el));
// }

// printAnything<string>(['a', 'b', 'c']);
//generic function iference
printAnything(['a', 'b', 'c']); //it can inference type but cannot catch error in oposite if you use <string>

//generic constraints
class Bike {
  print() {
    console.log('I am a bike');
  }
}

class House {
  print() {
    console.log('I am a house');
  }
}

interface Printable {
  print(): void;
}

function printHousesOrBikes<T extends Printable>(arr: T[]): void {
  arr.map((el) => el.print());
}

printHousesOrBikes<House>([new House(), new House(), new House()]);
printHousesOrBikes<Bike>([new Bike(), new Bike()]);
