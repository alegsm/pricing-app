// @flow
import * as React from "react";
import Container from "@material-ui/core/Container";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { Wizard } from "../model/wizard/wizard";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  fetchWizard,
  nextStep,
  previousStep,
  resetSteps
} from "../store/actions/wizardActions";
import WizardStepComponent from "../components/wizardStepComponent";
import { WizardStep } from "../model/wizard/wizardStep";
import { withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

type Props = {
  wizard: Wizard,
  fetchWizard: () => void,
  currentStep: WizardStep,
  currentIndex: number,
  nextStep: (currentStep: number) => void,
  previousStep: (currentStep: number) => void,
  resetStep: () => void,
  history: any
};

class WizardScreen extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.handleReset = this.handleReset.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  componentWillMount(): void {
    this.props.fetchWizard();
  }

  render() {
    return (
      <div>
        {this.props.wizard && this.props.wizard.steps ? (
          <Container>
            <Stepper activeStep={this.props.currentIndex}>
              {this.props.wizard.steps.map((step, index) => {
                return (
                  <Step key={index}>
                    <StepLabel>{step.name}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            <div
              style={{
                padding: 20
              }}
            >
              {this.props.currentIndex === this.props.wizard.steps.length ? (
                <div>
                  <Typography>
                    All steps completed - you&apos;re finished
                  </Typography>
                  <Button
                    onClick={this.handleReset}
                    style={{
                      marginTop: 20
                    }}
                  >
                    Reset
                  </Button>
                </div>
              ) : (
                <div>
                  <Paper style={{ padding: 20, marginBottom: 20 }}>
                    <WizardStepComponent />
                  </Paper>
                  <div
                    style={{
                      marginTop: 20
                    }}
                  >
                    <Button
                      disabled={this.props.currentIndex === 0}
                      onClick={this.handleBack}
                      style={{ marginRight: 15 }}
                    >
                      Back
                    </Button>

                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                    >
                      {this.props.currentIndex ===
                      this.props.wizard.steps.length - 1
                        ? "Finish"
                        : "Next"}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </Container>
        ) : (
          <Grid
            container
            direction={"column"}
            alignContent={"center"}
            justify={"center"}
          >
            <Paper style={{ padding: 50, margin: 50 }}>
              <div
                style={{
                  margin: 50
                }}
              >
                <CircularProgress />
              </div>
            </Paper>
          </Grid>
        )}
      </div>
    );
  }

  handleReset() {
    this.props.resetSteps();
  }

  handleNext() {
    if (this.props.currentIndex < this.props.wizard.steps.length - 1) {
      this.props.nextStep(this.props.currentIndex);
    } else {
      this.props.history.push("/set-email");
    }
  }

  handleBack() {
    this.props.previousStep(this.props.currentIndex);
  }
}

const mapStateToProps = state => ({
  wizard: state.wizardReducer.wizard,
  activeStep: state.wizardReducer.activeStep,
  currentIndex: state.wizardReducer.currentIndex
});

export default connect(
  mapStateToProps,
  { fetchWizard, nextStep, previousStep, resetSteps }
)(withRouter(WizardScreen));
