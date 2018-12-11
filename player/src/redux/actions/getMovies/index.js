import axios from "axios";
import Types from "./../../types";

const getMovies = () =>  {
	return (dispatch, getState) => { 
		axios.get("http://demo6669321.mockable.io/videos").then(resp => { 
			dispatch({
				type : Types.GET_MOVIES,
				payload : { 
					data : resp.data
				}
			})
		})
	} 
}

export default getMovies;