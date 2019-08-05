// @flow
import * as React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { sendEstimate } from "../store/actions/wizardActions";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

type Props = {
  history: any,
  sendEstimate: () => void,
  estimateSuccess: boolean
};
type State = {};

class WizardEndScreen extends React.Component<Props, State> {
  componentWillMount(): void {
    this.props.sendEstimate();
  }

  render() {
    return (
      <Grid
        container
        direction={"column"}
        alignContent={"center"}
        justify={"center"}
      >
        {this.props.estimateSuccess == null ? (
          <div
            style={{
              margin: 20
            }}
          >
            <CircularProgress />
          </div>
        ) : (
            <Grid container
                  direction={"column"}
                  alignContent={"center"}
                  justify={"center"}>
                <div
                    style={{
                        margin: 20,
                        fontSize: 20
                    }}
                >
                    Tu proforma ha sido enviada.
                </div>

                <Button color={"primary"} variant={"contained"} onClick={() => {
                    this.props.history.push('/');
                }}>
                    Nueva proforma
                </Button>
            </Grid>
        )}
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  estimateSuccess: state.wizardReducer.estimateSuccess
});

export default connect(
  mapStateToProps,
  { sendEstimate }
)(withRouter(WizardEndScreen));
