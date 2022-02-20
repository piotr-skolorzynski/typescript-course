import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
// import { WinsAnalysis } from './analyzers/WinsAnlysis';
import { Summary } from './Summary';
// import { HtmlReport } from './reportTargets/HtmlReport';

// create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');

// create an instance of MatchReader and pass in sth satysfying
// the 'DataReader' interface
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();

// shortcut using static method
const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

// const summary = new Summary(
//   new WinsAnalysis('Man United'),
//   new ConsoleReport()
// );
// summary.buildAndPrintReport(matchReader.matches);

// const summary2 = new Summary(new WinsAnalysis('Man United'), new HtmlReport());
// summary2.buildAndPrintReport(matchReader.matches);

// shortcut using static method for above specific type of report
const summary2 = Summary.winsAnalysisWithHtmlReport('Man United');
summary2.buildAndPrintReport(matchReader.matches);
