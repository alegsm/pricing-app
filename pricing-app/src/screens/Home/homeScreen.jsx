// @flow
import * as React from 'react';
import Container from "@material-ui/core/Container/index";
import Grid from "@material-ui/core/Grid/index";
import Paper from "@material-ui/core/Paper/index";
import {withRouter} from "react-router-dom";
import styles from './HomeScreen.module.css';

type Props = {

};
type State = {

};

class HomeScreen extends React.Component<Props, State> {

    render() {
        return (
            <Container>
                <Grid container direction={"row"} justify={"center"} alignItems={"center"}>
                    <Grid container direction={"column"} justify={"center"} alignItems={"center"}>
                        <Paper className={styles.mainOption}  onClick={() => {
                            this.props.history.push("/wizard");
                        }} style={{ cursor: "pointer" }}>
                            <div>
                                CREAR MI APP
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        );
    };
}

export default withRouter(HomeScreen);
