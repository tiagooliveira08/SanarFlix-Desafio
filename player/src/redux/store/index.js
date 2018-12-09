import { createStore, combineReducers } from "redux";
import { moviesReducer, searchReducer } from "./../reducers";

const reducersCombined = combineReducers({
	moviesReducer,
	searchReducer
})

const store = createStore(reducersCombined);
store.subscribe( () => console.log(store.getState()));
export default store;