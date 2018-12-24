import { createStore, combineReducers, applyMiddleware } from "redux";
import { moviesReducer } from "./../reducers";

import thunk from "redux-thunk";
import reduxPromise from "redux-promise";
import reduxMulti from "redux-multi";

const reducersCombined = combineReducers({
	moviesReducer
})

const store = createStore(reducersCombined, applyMiddleware(reduxPromise, thunk, reduxMulti));
export default store;