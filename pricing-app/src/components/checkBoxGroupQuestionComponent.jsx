// @flow
import * as React from "react";
import { CheckGroupQuestion } from "../model/wizard/questions/checkGroupQuestion";
import Grid from "@material-ui/core/Grid";
import { FeatureCheckItem } from "./featureCheckItem";
import { connect } from "react-redux";
import { updateQuestion } from "../store/actions/wizardActions";

type Props = {
  question: CheckGroupQuestion
};
const CheckBoxGroupQuestionComponent = (props: Props) => {
  const features = [];
  const optionalFeatures = [];

  if (props.question.options) {
    props.question.options.forEach(o => {
      const component = (
        <FeatureCheckItem
          feature={o}
          selected={props.question.selection.indexOf(o) >= 0}
          onSelect={() => {
            const question = { ...props.question };

            if (!question.selection) question.selection = [];

            if (question.selection.indexOf(o) >= 0) {
              question.selection.splice(question.selection.indexOf(o), 1);
            } else {
              question.selection.push(o);
            }
            props.updateQuestion({ checkGroupQuestion: question });
          }}
          style={{ margin: 10 }}
        />
      );
      if (o.isOptional) {
        optionalFeatures.push(component);
      } else {
        features.push(component);
      }
    });
  }

  return (
    <Grid container direction={"row"} style={{
        marginTop: 10,
    }} justify={"center"}>
      <Grid container direction={"column"} md={6} xs={12} style={{ paddingBottom: 15}}>
        <div style={{ marginBottom: 15, fontSize: 20 }}>Necesarios para un MVP</div>
        {features}
      </Grid>
      {optionalFeatures.length > 0 ? (
        <Grid container direction={"column"} md={6} xs style={{ paddingBottom: 15}}>
          <div style={{ marginBottom: 15, fontSize: 20 }}>Opcionales</div>
          {optionalFeatures}
        </Grid>
      ) : null}
    </Grid>
  );
};

const mapStateToProps = state => ({
  question: state.wizardReducer.currentCheckGroupQuestion
});

export default connect(
  mapStateToProps,
  { updateQuestion }
)(CheckBoxGroupQuestionComponent);
