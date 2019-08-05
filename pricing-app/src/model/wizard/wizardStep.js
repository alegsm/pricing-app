import {BigButtonQuestion} from "./questions/bigButtonQuestion";
import {CheckGroupQuestion} from "./questions/checkGroupQuestion";

export class WizardStep {
    name: string;
    bigButtonQuestion: BigButtonQuestion;
    checkGroupQuestion: CheckGroupQuestion;
}
