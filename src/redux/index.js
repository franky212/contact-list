import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import contacts from "./contacts";

const rootReducer = combineReducers({
  contacts
});

export default createStore(rootReducer, applyMiddleware(thunk));
