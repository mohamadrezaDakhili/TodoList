import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import rootReducers from "./rootReducers";
const middleware = process.env.NODE_ENV === "development" ? [logger] : [];

export default createStore(rootReducers, applyMiddleware(...middleware));
