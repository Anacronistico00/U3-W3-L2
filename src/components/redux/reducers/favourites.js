const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';

const initialState = {
  list: [],
};

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        list: [...state.list, action.payload],
      };

    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,
        list: state.list.filter((book, i) => {
          if (action.payload === i) {
            return false;
          } else {
            return true;
          }
        }),
      };
    default:
      return state;
  }
};

export default favouritesReducer;
