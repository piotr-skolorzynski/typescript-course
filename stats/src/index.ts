import { CsvFileReader } from "./CsvFileReader";

const reader = new CsvFileReader('football.csv');
reader.read();

enum MatchResult {
    HOME_WIN = 'H',
    AWAY_WIN = 'A',
    DRAW = 'D'
}

let manUnitedWins = 0;

for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HOME_WIN) {
        manUnitedWins += 1;
    } else if (match[2] === 'Man United' && match[6] === MatchResult.AWAY_WIN) {
        manUnitedWins += 1;
    }
}

console.log(`Man United won ${manUnitedWins} games`);