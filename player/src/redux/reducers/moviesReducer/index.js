import Types from "./../../types";

const initialState = {
  searchValue: "",
  movies: null,
  isLoading: false,
  isErrorLoading: false
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_MOVIES_IS_LOADING: {
      return { ...state, isLoading: true };
    }

    case Types.GET_MOVIES_SUCESS: {
      return {
        ...state,
        movies: action.payload.data.videos,
        filtedMovies: action.payload.data.videos,
        isLoading: false
      };
    }
    case Types.GET_MOVIES_FAILURE: {
      return { ...state, isErrorLoading: true };
    }

    case Types.IS_LOANDING_MOVIES: {
      return { ...state, ...action.payload };
    }

    case Types.HANDLE_SEARCH_MOVIES: {
      return { ...state, ...action.payload };
    }

    case Types.LIKE_MOVIE: {
      return { ...state, ...action.payload };
    }
    case Types.ORDER_MOVIES: {
      return { ...state, ...action.payload };
    }
    case Types.ADD_MOVIE: {
      state.movies.push(action.payload.movie);
      return { ...state };
    }
    case Types.CLEAR_SEARCH: {
      return { ...state, searchValue: "" };
    }
    default:
      return { ...state };
  }
};

export default moviesReducer;
