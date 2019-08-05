import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";

const initState = {};

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore( rootReducer, initState, composeEnhancers(
    applyMiddleware(...middleware)));

export default store;
