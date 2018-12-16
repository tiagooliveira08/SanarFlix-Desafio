import Types from "./../../types/";

const initialState = {
	searchValue : "", test: 123
}

const searchReducer = (state = initialState, action) => { 

	switch(action.type) {
		case "TEST" : {
			console.log("enter test")
		}


		default : return {...state}
	}
	return { test : 123 }
}

export default searchReducer;