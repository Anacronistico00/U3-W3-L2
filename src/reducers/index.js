const initialState = {
  favourites: {
    list: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVOURITES':
      return {
        ...state.favourites,
        favourites: {
          list: [...state.favourites.list, action.payload],
        },
      };

    case 'REMOVE_FROM_FAVOURITES':
      return {
        ...state,
        favourites: {
          ...state.favourites,
          list: state.favourites.list.filter((book, i) => {
            if (action.payload === i) {
              return false;
            } else {
              return true;
            }
          }),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
