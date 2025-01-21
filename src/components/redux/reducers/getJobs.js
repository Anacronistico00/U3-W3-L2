import { GET_JOBS_SUCCESS, GET_JOBS_ERROR, GET_JOBS_LOADING } from '../action';

const initialState = {
  list: [],
  error: '',
  loading: true,
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS_SUCCESS:
      return {
        ...state,
        list: action.payload,
      };
    case GET_JOBS_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case GET_JOBS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
};

export default jobReducer;
