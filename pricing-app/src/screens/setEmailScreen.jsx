// @flow
import * as React from 'react';
import Grid from "@material-ui/core/Grid";
import {connect} from "react-redux";
import {setEmail} from "../store/actions/wizardActions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {withRouter} from "react-router-dom";
import Paper from "@material-ui/core/Paper";

type Props = {
    email: string,
    setEmail: () => void,
    history: any
};

const validateEmail = (mail: string) => {
    return !(mail && mail.indexOf('@') >= 0);
};

const SetEmailScreen = (props: Props) => {
    return (
        <Grid container direction={"row"} alignItems={"center"} justify={"center"} style={{
            padding: 50
        }}>
        <Paper style={{
            padding: "0 20px 20px 20px"
        }}>
            <Grid container direction={"column"}>
                <Grid container direction={"row"} justify={"center"}>
                    <div style={{
                        margin: 20,
                        fontSize: 20
                    }}>
                        Selecciona un email para enviar la proforma
                    </div>
                </Grid>
                <Grid container direction={"row"} justify={"center"}>
                    <TextField
                        id="standard-name"
                        label="Email"
                        value={props.email}
                        onChange={(event) => {
                            props.setEmail(event.target.value);
                        }}
                        margin="normal"
                        variant="outlined"
                    />
                </Grid>
                <Grid container direction={"row"} justify={"center"}>
                    <Button variant="contained" color="primary" style={{
                        marginTop: 30
                    }} onClick={() => {
                        props.history.push('/wizard-end');
                    }} disabled={validateEmail(props.email)}>
                        Enviar proforma
                    </Button>
                </Grid>
            </Grid>
        </Paper>
        </Grid>
    );
};

const mapStateToProps = (state) => ({
    email: state.wizardReducer.customerEmail
});

export default connect(mapStateToProps, {setEmail})(withRouter(SetEmailScreen));
