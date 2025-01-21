export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const REMOVE_TO_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const GET_JOBS_SUCCESS = 'GET_JOB_SUCCESS';
export const GET_JOBS_ERROR = 'GET_JOB_ERROR';
export const GET_JOBS_LOADING = 'GET_JOB_LOADING';

export const addToFavouritesAction = (data) => {
  return {
    type: ADD_TO_FAVOURITES,
    payload: data,
  };
};

export const removeFromFavouritesAction = (index) => {
  return {
    type: REMOVE_TO_FAVOURITES,
    payload: index,
  };
};

export const getJobsAction = (query) => {
  const baseEndpoint =
    'https://strive-benchmark.herokuapp.com/api/jobs?search=';
  return async (dispatch) => {
    try {
      const response = await fetch(baseEndpoint + query + '&limit=20');
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: GET_JOBS_LOADING,
          payload: false,
        });
        dispatch({
          type: GET_JOBS_SUCCESS,
          payload: data,
        });
      } else {
        throw new Error('Errore nel recupero dei dati API');
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_JOBS_LOADING,
        payload: false,
      });
      dispatch({
        type: GET_JOBS_ERROR,
        payload: error,
      });
    }
  };
};
