import { createStore, combineReducers, applyMiddleware } from "redux";
import { moviesReducer, searchReducer } from "./../reducers";

import thunk from "redux-thunk";
import ReduxPromise from "redux-promise";
import reduxMulti from "redux-multi";

const reducersCombined = combineReducers({
	moviesReducer,
	searchReducer
})

const store = createStore(reducersCombined, applyMiddleware(thunk, ReduxPromise, reduxMulti));
export default store;