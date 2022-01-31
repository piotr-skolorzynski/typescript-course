"use strict";
//bubble sorting the simplest way and not too effective
class Sorter {
    // collection: number[];
    // constructor(collection: number[]) {
    //     this.collection = collection;
    // }
    // zamiennik tego co powyżej
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                //if collection is an array of numbers
                if (this.collection instanceof Array) {
                    //collection === number[]
                    if (this.collection[j] > this.collection[j + 1]) {
                        const leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                }
                if (typeof this.collection === 'string') {
                }
                //if collection is a string
            }
        }
    }
}
const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
