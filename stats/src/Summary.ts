import { MatchData } from './MatchData';
import { WinsAnalysis } from './analyzers/WinsAnlysis';
import { HtmlReport } from './reportTargets/HtmlReport';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  //example of using static method as shortcut to create some repeating situations without creating instance of the class
  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport());
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
