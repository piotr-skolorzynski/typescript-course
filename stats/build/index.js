"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
// import { WinsAnalysis } from './analyzers/WinsAnlysis';
const Summary_1 = require("./Summary");
// import { HtmlReport } from './reportTargets/HtmlReport';
// create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// create an instance of MatchReader and pass in sth satysfying
// the 'DataReader' interface
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();
// shortcut using static method
const matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
// const summary = new Summary(
//   new WinsAnalysis('Man United'),
//   new ConsoleReport()
// );
// summary.buildAndPrintReport(matchReader.matches);
// const summary2 = new Summary(new WinsAnalysis('Man United'), new HtmlReport());
// summary2.buildAndPrintReport(matchReader.matches);
// shortcut using static method for above specific type of report
const summary2 = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
summary2.buildAndPrintReport(matchReader.matches);
