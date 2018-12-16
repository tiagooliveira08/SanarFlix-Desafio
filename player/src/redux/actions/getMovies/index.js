import axios from "axios";
import Types from "./../../types";

const getMovies = () =>  {
	return (dispatch, getState) => { 
		const getMoviesValue = () => axios.get("http://demo6669321.mockable.io/videos").then(resp => { 
			return {
				type : Types.GET_MOVIES,
				payload : { 
					data : resp.data
				}
			}
		})

	dispatch(getMoviesValue());
	} 
	
}

const filterMovies = (e) => {

	let value = getMovies();
	console.log(value);
		
	return (dispatch, getState)=> {

			let filtedByName = "";
			if(e !== ""){

		 		filtedByName = getState().moviesReducer.movies.filter( el => { 
					return el.title.indexOf(e) !== -1;
				});
			}else { 
				filtedByName = getState().moviesReducer.movies
			} 		

		
	}
}

export default getMovies;