import Types from "./../../types";

const initialState = { 
	movies : null
}

const moviesReducer = (state = initialState, action) => { 
	
	switch(action.type) {
		case  Types.GET_MOVIES : {
			console.log("neter movies")
			console.log(action.payload.data.videos);
			return { ...state, movies : action.payload.data.videos }
		}

		case Types.FILTER_BY_NAME : { 
			return { ...state, movies : action.payload.data }
		}

		default : return { ...state }
	}
};

export default moviesReducer;