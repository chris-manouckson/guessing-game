import * as actionTypes from '../actionTypes/cities';

export const citiesSetGuess = (cityName, guess) => ({
  type: actionTypes.CITIES_SET_GUESS,
  cityName: cityName,
  data: guess,
});

export const citiesGoToNext = () => ({
  type: actionTypes.CITIES_GO_TO_NEXT,
});

export const citiesSetActual = (cityName, data) => ({
  type: actionTypes.CITIES_SET_ACTUAL,
  cityName: cityName,
  data: data,
});
