//example of inference 
const carMakers = ['ford', 'toyota', 'chevy'];

//annotation is neccery for empty arrays 
const carMakers2: string[] = [];

// array of objects
const dates = [new Date(), new Date()];

const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
]

// for empty 2 dimensional arrays
const carsByMake2: string[][] = [];

//help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values
// carMakers.push(100); //example of prevention

// help with 'map' or 'foreach' or 'reduce'
carMakers.map((car: string): string => {
    return car.toUpperCase();
})

//can still contain different types
const importantDates = [new Date(), '2030-10-10']; //in this case there is inference and array can have to types 

const importantDates2: (Date | string)[] = [new Date()]; //here we declared only one type so we have to add annotations



