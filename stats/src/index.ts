import fs from 'fs';

const matches = fs.readFileSync('football.csv', {
    encoding: 'utf-8'
}).split('\n').map((row: string): string[] => {
    return row.split(',');
});

enum MatchResult {
    HOME_WIN = 'H',
    AWAY_WIN = 'A',
    DRAW = 'D'
}

let manUnitedWins = 0;

for (let match of matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HOME_WIN) {
        manUnitedWins += 1;
    } else if (match[2] === 'Man United' && match[6] === MatchResult.HOME_WIN) {
        manUnitedWins += 1;
    }
}

console.log(`Man United won ${manUnitedWins} games`);