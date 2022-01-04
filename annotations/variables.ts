//if we initialize variable in the same line of code typescript is able to guess the type of value
// so it is not neccesarry to give annotation for example check variable now with guessed type

// let apples: number = 5;
let apples;
apples = 5; //won't guess

let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

//built in objects
let now = new Date();

//Array 
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 3, 4, 5, 6];
let truths: boolean[] = [true, true, false];

//Classes
class Car {

}

let car: Car = new Car();

//Object literal
let point: {x: number; y: number} = {
    x: 10,
    y: 20
};

// Function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};

//When to use annotations
// 1) Function that returns the 'any' type
    const json = '{"x": 10, "y": 20}';
    const coordinates: {x: number, y: number} = JSON.parse(json);
    console.log(coordinates); //{x: 10, y: 20};
    
// 2) When we declare a variable on one line and initialize it  later
    let words = ['red', 'green', 'blue'];
    let foundWord: boolean; //maybe even better is to initialize it in one line with f.e. value false
    for (let i = 0; i <words.length; i++) {
        if (words[i] === 'green') {
            foundWord = true;
        }
    }

// 3 Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false; //we are goiong to use two types of value in this variable so annotations are necessary

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i]; //here we change type of variable
    }
}
