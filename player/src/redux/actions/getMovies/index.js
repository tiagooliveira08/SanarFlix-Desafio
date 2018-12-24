import axios from "axios";
import Types from "./../../types";


const getMovies = () => dispatch => {

	dispatch(getMoviesStarted());

	setTimeout(axios.get("http://demo6669321.mockable.io/videos").then(data => {
		dispatch(getMoviesSucess(data))
	}).catch(error => {
		dispatch(getMoviesFailure(error))
	}));
}

const getMoviesStarted = () => ({
	type: Types.GET_MOVIES_IS_LOADING
})

const getMoviesSucess = (movies) => ({
	type: Types.GET_MOVIES_SUCESS,
	payload: movies
})
const getMoviesFailure = (error) => ({
	type: Types.GET_MOVIES_FAILURE,
	payload: error
})

const handleSearchMovies = (e) => dispatch => {

	return dispatch([{
		type: Types.HANDLE_SEARCH_MOVIES,
		payload: {
			searchValue: e.target.value,
		}
	},
	filterMovies()
	])
}

const filterMovies = () => {
	return ({
		type: Types.FILTER_BY_NAME
	})

}

export { getMovies, filterMovies, handleSearchMovies };