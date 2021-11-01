import { combineReducers } from "redux";
import { createStore } from "redux";
import counter from "./counter/counter";
import todos from "./todos/todos";

const reducers = combineReducers({ counter, todos });
const store = createStore(reducers);

export default store;
