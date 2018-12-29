import axios from "axios";
import Types from "./../types";

export const getMovies = () => dispatch => {
  dispatch(getMoviesStarted());

  setTimeout(
    axios
      .get("http://demo6669321.mockable.io/videos")
      .then(data => {
        dispatch(getMoviesSucess(data));
      })
      .catch(error => {
        dispatch(getMoviesFailure(error));
      })
  );
};

export const getMoviesStarted = () => ({
  type: Types.GET_MOVIES_IS_LOADING
});

export const getMoviesSucess = movies => ({
  type: Types.GET_MOVIES_SUCESS,
  payload: movies
});
const getMoviesFailure = error => ({
  type: Types.GET_MOVIES_FAILURE,
  payload: error
});

export const handleSearchMovies = e => dispatch => {
  return dispatch({
    type: Types.HANDLE_SEARCH_MOVIES,
    payload: {
      searchValue: e.target.value
    }
  });
};

export const likeMovie = id => {
  return (dispatch, getState) => {
    const movies = getState().moviesReducer.movies.map(el => {
      if (el.id === id) {
        return {
          ...el,
          licked: el.licked === undefined || false ? true : !el.licked,
          likes: el.licked ? --el.likes : ++el.likes
        };
      }
      return el;
    });
    dispatch({
      type: Types.LIKE_MOVIE,
      payload: { movies, filtedMovies: movies }
    });
    console.log(movies);
  };
};

export const orderByViews = isAsc => {
  return dispatch => {
    dispatch(orderMovies("views", isAsc));
  };
};

export const orderByLikes = isAsc => {
  return dispatch => {
    dispatch(orderMovies("likes", isAsc));
  };
};

export const orderMovies = (type = "views", isAsc = true) => {
  return (dispatch, getState) => {
    console.log("enter order");
    const { movies } = getState().moviesReducer;

    var sorted = movies.sort((a, b) => {
      if (isAsc) {
        return b[type] - a[type];
      }
      return a[type] - b[type];
    });

    dispatch({
      type: Types.ORDER_MOVIES,
      payload: {
        movies: sorted
      }
    });
  };
};

export const addMovie = movie => dispatch => [
  dispatch({
    type: Types.ADD_MOVIE,
    payload: {
      movie
    }
  }),
  dispatch(orderByViews())
];

export const clearSearch = () => dispatch => {
  dispatch({
    type: Types.CLEAR_SEARCH
  });
};
