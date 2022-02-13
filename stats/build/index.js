"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
console.log(reader.data);
var MatchResult;
(function (MatchResult) {
    MatchResult["HOME_WIN"] = "H";
    MatchResult["AWAY_WIN"] = "A";
    MatchResult["DRAW"] = "D";
})(MatchResult || (MatchResult = {}));
let manUnitedWins = 0;
for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HOME_WIN) {
        manUnitedWins += 1;
    }
    else if (match[2] === 'Man United' && match[6] === MatchResult.AWAY_WIN) {
        manUnitedWins += 1;
    }
}
console.log(`Man United won ${manUnitedWins} games`);
