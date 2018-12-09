import { createStore, combineReducers } from "redux";
import { moviesReducer } from "./../reducers";

const reducersCombined = combineReducers({
	moviesReducer
})

const store = createStore(moviesReducer);

export default store;