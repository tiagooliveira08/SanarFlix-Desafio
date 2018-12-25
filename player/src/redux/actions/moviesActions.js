import axios from "axios";
import Types from "./../types";


export const getMovies = () => dispatch => {

	dispatch(getMoviesStarted());

	setTimeout(axios.get("http://demo6669321.mockable.io/videos").then(data => {
		dispatch(getMoviesSucess(data))
	}).catch(error => {
		dispatch(getMoviesFailure(error))
	}));
}

export const getMoviesStarted = () => ({
	type: Types.GET_MOVIES_IS_LOADING
})

export const getMoviesSucess = (movies) => ({
	type: Types.GET_MOVIES_SUCESS,
	payload: movies
})
const getMoviesFailure = (error) => ({
	type: Types.GET_MOVIES_FAILURE,
	payload: error
})

export const handleSearchMovies = (e) => dispatch => {

	return dispatch([{
		type: Types.HANDLE_SEARCH_MOVIES,
		payload: {
			searchValue: e.target.value,
		}
	},
	filterMovies()
	])
}

export const filterMovies = () => {
	return ({
		type: Types.FILTER_BY_NAME
	})
}

export const likeMovie = (id) => {
	return (dispatch, getState) => {
		const movies = getState().moviesReducer.movies.map(el => {
			if (el.id === id && !el.licked) {
				return { ...el, likes: el.likes + 1, licked: true }
			}
			return el
		})
		dispatch({ type: Types.LIKE_MOVIE, payload: { movies, filtedMovies: movies } })
		console.log(movies);
	}
}

export const orderMovies = (type) => {
	return (dispatch, getState) => {
		const { movies, filtedMovies } = getState().moviesReducer;
		var sorted;
		switch (type) {
			case "views": {
				sorted = movies.sort((a, b) => {
					return b.views - a.views
				})
				console.log(sorted);
			}
			case "likes": {
				sorted = movies.sort((a, b) => {
					return b.likes - a.likes
				})
			}

		}
		dispatch({
			type: Types.ORDER_MOVIES,
			payload: {
				movies: sorted,
				filtedMovies: sorted
			}
		})

	}
}

export const addMovie = ({ name, link }) => (dispatch, getState) => {

	const { movies, filtedMovies } = getState().moviesReducer;
	console.log(movies);
	var match = link.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i);

	var newMovie = {
		id: match[1],
		title: name || "Nome não Setado",
		views: 999,
		likes: 99

	}
	dispatch({
		type: Types.ADD_MOVIE,
		payload: {
			movies: movies.push(newMovie)
		}
	})

}

