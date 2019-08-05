// @flow

import {
  FETCH_WIZARD,
  SET_STEP,
  UPDATE_QUESTION,
  SET_EMAIL, SEND_ESTIMATE
} from "../actions/types";

type Action = {
  type: string,
  payload: any
};

const initState = {
  wizard: {},
  currentIndex: 0,
  currentStep: {},
  currentCheckGroupQuestion: null,
  currentBigButtonQuestion: null,
  customerEmail: "",
  estimateSuccess: null,
};

export const wizardReducer = (state = initState, action: Action) => {
  switch (action.type) {
    case FETCH_WIZARD:
      return {
        ...state,
        wizard: { ...action.payload },
        currentIndex: 0,
        currentStep: action.payload.steps ? { ...action.payload.steps[0] } : {},
        currentCheckGroupQuestion: action.payload.steps
          ? { ...action.payload.steps[0].checkGroupQuestion }
          : null,
        currentBigButtonQuestion: action.payload.steps
          ? { ...action.payload.steps[0].bigButtonQuestion }
          : null
      };

    case SET_STEP:
      return {
        ...state,
        currentIndex: action.payload,
        currentStep: { ...state.wizard.steps[action.payload] },
        currentCheckGroupQuestion: {
          ...state.wizard.steps[action.payload].checkGroupQuestion
        },
        currentBigButtonQuestion: {
          ...state.wizard.steps[action.payload].bigButtonQuestion
        }
      };

    case UPDATE_QUESTION:
      const newWizard = { ...state.wizard };

      if (!action.payload) return state;

      if (action.payload.bigButtonQuestion) {
        newWizard.steps[state.currentIndex].bigButtonQuestion =
          action.payload.bigButtonQuestion;
      } else if (action.payload.checkGroupQuestion) {
        newWizard.steps[state.currentIndex].checkGroupQuestion =
          action.payload.checkGroupQuestion;
      }

      return {
        ...state,
        wizard: { ...newWizard },
        currentCheckGroupQuestion: {
          ...newWizard.steps[state.currentIndex].checkGroupQuestion
        },
        currentBigButtonQuestion: {
          ...newWizard.steps[state.currentIndex].bigButtonQuestion
        }
      };
    case SET_EMAIL:
      return {
        ...state,
        customerEmail: action.payload
      };

    case SEND_ESTIMATE:
      const newState = {
        ...initState,
        estimateSuccess: action.payload
      };
      return newState;
    default:
      return state;
  }
};
