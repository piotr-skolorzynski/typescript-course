import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

// create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');

// create an instance of MatchReader and pass in sth satysfying
// the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

// matchReader.matches

// console.log(`Man United won ${manUnitedWins} games`);
