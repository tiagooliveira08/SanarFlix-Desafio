import Types from "./../../types";

const initialState = {
	searchValue: "",
	movies: null,
	filtedMovies: [],
	isLoading: false,
	isErrorLoading: false
}

const moviesReducer = (state = initialState, action) => {

	switch (action.type) {

		case Types.GET_MOVIES_IS_LOADING: {
			return { ...state, isLoading: true }
		}

		case Types.GET_MOVIES_SUCESS: {
			return {
				...state, movies: action.payload.data.videos,
				filtedMovies: action.payload.data.videos,
				isLoading: false
			}
		}
		case Types.GET_MOVIES_FAILURE: {
			return { ...state, isErrorLoading: true }
		}

		case Types.FILTER_BY_NAME: {
			return {
				...state, filtedMovies:
					state.movies.filter(el => el.title.toLowerCase().indexOf(state.searchValue.toLowerCase()) !== -1)
			}
		}
		case Types.IS_LOANDING_MOVIES: {
			return { ...state, ...action.payload }
		}

		case Types.HANDLE_SEARCH_MOVIES: {
			return { ...state, ...action.payload }
		}

		case Types.LIKE_MOVIE: {
			return { ...state, ...action.payload }
		}
		case Types.ORDER_MOVIES: {
			return { ...state, ...action.payload }
		}
		case Types.ADD_MOVIE: {
			return { ...state, ...action.payload }
		}
		default: return { ...state }
	}
};

export default moviesReducer;