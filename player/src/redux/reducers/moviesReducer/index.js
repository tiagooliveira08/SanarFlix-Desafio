const initialState = { 
	movies : []
}

const moviesReducer = (state = initialState, action) => { 
	
	switch(action.type) {
		case  "MOVIES" : {
			console.log("movies");
			return { ...state }
		}
		default : return { ...state }
	}
};

export default moviesReducer;