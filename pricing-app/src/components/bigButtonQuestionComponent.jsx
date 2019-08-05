// @flow
import * as React from 'react';
import {BigButtonQuestion} from "../model/wizard/questions/bigButtonQuestion";
import Grid from "@material-ui/core/Grid";
import {BigButtonItem} from "./bigButtonItem";
import {connect} from "react-redux";
import {updateQuestion} from "../store/actions/wizardActions";

type Props = {
    question: BigButtonQuestion,
    updateQuestion: () => void
};
const BigButtonQuestionComponent = (props: Props) => {

    const features = [];

    if(props.question.options) {
        props.question.options.forEach((o) => {
            features.push(
                <BigButtonItem key={o.name} feature={o} selected={props.question.selection.name === o.name} onSelect={() => {
                    const question = {...props.question, selection: o};
                    props.updateQuestion({bigButtonQuestion: question});
                }} style={{margin: 10}}/>
            );
        });
    }

    return (
        <Grid container direction={"column"}>
            <Grid container direction={"row"}>
                {features}
            </Grid>
        </Grid>
    );
};

const mapStateToProps = (state) => ({
    question: state.wizardReducer.currentBigButtonQuestion
});

export default connect(mapStateToProps, {updateQuestion})(BigButtonQuestionComponent);
