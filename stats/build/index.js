"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
const ConsoleReport_1 = require("./reportTargets/ConsoleReport");
const WinsAnlysis_1 = require("./analyzers/WinsAnlysis");
const Summary_1 = require("./Summary");
const HtmlReport_1 = require("./reportTargets/HtmlReport");
// create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// create an instance of MatchReader and pass in sth satysfying
// the 'DataReader' interface
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
const summary = new Summary_1.Summary(new WinsAnlysis_1.WinsAnalysis('Man United'), new ConsoleReport_1.ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);
const summary2 = new Summary_1.Summary(new WinsAnlysis_1.WinsAnalysis('Man United'), new HtmlReport_1.HtmlReport());
summary2.buildAndPrintReport(matchReader.matches);
