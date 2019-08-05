// @flow
import * as React from 'react';
import {WizardStep} from "../model/wizard/wizardStep";
import BigButtonQuestionComponent from "./bigButtonQuestionComponent";
import CheckBoxGroupQuestionComponent from "./checkBoxGroupQuestionComponent";
import {connect} from "react-redux";
import {BigButtonQuestion} from "../model/wizard/questions/bigButtonQuestion";
import {CheckGroupQuestion} from "../model/wizard/questions/checkGroupQuestion";

type Props = {
    currentStep: WizardStep,
    currentBigButtonQuestion: BigButtonQuestion,
    currentCheckGroupQuestion: CheckGroupQuestion
};
const WizardStepComponent = (props: Props) => {

    let component = <div>NOT IMPLEMENTED</div>;

    if(props.currentBigButtonQuestion && props.currentBigButtonQuestion.title) {
        component = <BigButtonQuestionComponent/>
    } else if (props.currentCheckGroupQuestion && props.currentCheckGroupQuestion.title) {
        component = <CheckBoxGroupQuestionComponent/>
    }

    return (
        component
    );
};

const mapStateToProps = (state) => ({
    currentStep: state.wizardReducer.currentStep,
    currentBigButtonQuestion: state.wizardReducer.currentBigButtonQuestion,
    currentCheckGroupQuestion: state.wizardReducer.currentCheckGroupQuestion,
});

export default connect( mapStateToProps, null)(WizardStepComponent);
