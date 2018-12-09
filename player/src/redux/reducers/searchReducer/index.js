const initialState = {
	SearchValue : ""
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