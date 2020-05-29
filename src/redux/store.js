// store for holding the state of app
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/root-reducer";
import logger from "redux-logger";
const store = createStore(rootReducer, applyMiddleware(logger));
// const store = createStore(rootRseducer);

export default store;
