import * as actionTypes from '../actionTypes';

import { getRandomCities } from 'utils';

const initialState = {
  all: getRandomCities().map(city => ({
    name: city,
    guess: null,
    actual: null,
  })),
  currentIndex: 0,
  isLoading: false,
};

const cities = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CITIES_SET_ALL:
      return {
        ...state,
        all: action.data,
      };
    
    case actionTypes.CITIES_SET_GUESS:
      return {
        ...state,
        all: state.all.map(city => 
          city.name === action.cityName ? {
            ...city,
            guess: action.data,
          } : city
        ),
      };

    case actionTypes.CITIES_GO_TO_NEXT:
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
      };
    

    case actionTypes.CITIES_SET_ACTUAL:
      return {
        ...state,
        all: state.all.map(city => 
          city.name === action.cityName ? {
            ...city,
            actual: action.data,
          } : city
        ),
      };

    // TODO: move to another reducer. 
    case actionTypes.WEATHER_GET_PENDING:
      return { ...state, isLoading: true };
    case actionTypes.WEATHER_GET_SUCCESS:
      return { ...state, isLoading: false };
    case actionTypes.WEATHER_GET_FAILURE:
      return { ...state, isLoading: false, error: action.error };

    default:
      return initialState;
  }
};

export default cities;
