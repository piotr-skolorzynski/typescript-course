import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

const reader = new CsvFileReader('football.csv');
reader.read();
console.log(reader.data);

let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HOME_WIN) {
    manUnitedWins += 1;
  } else if (match[2] === 'Man United' && match[6] === MatchResult.AWAY_WIN) {
    manUnitedWins += 1;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
