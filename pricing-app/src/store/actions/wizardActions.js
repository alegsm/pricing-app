// @flow
import {FETCH_WIZARD, SEND_ESTIMATE, SET_EMAIL, SET_STEP, UPDATE_QUESTION} from "./types";
import {getData} from "./dummyData";

export const fetchWizard = () => dispatch => {
    setTimeout(() => {
        dispatch({
            type: FETCH_WIZARD,
            payload: {...getData()}
        });
        },500);
};

export const nextStep = (currentStep: number) => dispatch => {
    dispatch({
        type: SET_STEP,
        payload: currentStep + 1
    });
};


export const previousStep = (currentStep: number) => dispatch => {
    dispatch({
        type: SET_STEP,
        payload: currentStep - 1
    });
};

export const resetSteps = () => dispatch => {
    dispatch({
        type: SET_STEP,
        payload: 0
    });
};

export const updateQuestion = ({checkGroupQuestion, bigButtonQuestion}) => dispatch => {
    dispatch({
        type: UPDATE_QUESTION,
        payload: {checkGroupQuestion, bigButtonQuestion}
    });
};

export const setEmail = (email: string) => dispatch => {
    dispatch({
        type: SET_EMAIL,
        payload: email
    });
};

export const sendEstimate = () => dispatch => {
    setTimeout(() => {
        dispatch({
            type: SEND_ESTIMATE,
            payload: true
        });
    },1000);
};
