import Types from "./../../types/";
import { getMovies } from "./../";

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

export default filterMovies;