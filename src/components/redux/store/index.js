import { combineReducers, configureStore } from '@reduxjs/toolkit';
import favouritesReducer from '../reducers/favourites';
import jobReducer from '../reducers/getJobs';

const greatReducer = combineReducers({
  // Inserisco qui i nomi degli slices con rispettivi reducers per la loro gestione
  favourites: favouritesReducer,
  jobs: jobReducer,
});

const store = configureStore({
  reducer: greatReducer,
});

export default store;
