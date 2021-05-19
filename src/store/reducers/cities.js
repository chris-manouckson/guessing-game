import * as actionTypes from '../actionTypes/cities';

import { getRandomCities } from 'utils';

const initialState = {
  all: getRandomCities().map(city => ({
    name: city,
    guess: 0,
    actual: 0,
  })),
  currentIndex: 0,
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
      console.log('ara', action);
      return {
        ...state,
        all: state.all.map(city => 
          city.name === action.cityName ? {
            ...city,
            actual: action.data,
          } : city
        ),
      };

    default:
      return initialState;
  }
};

export default cities;
