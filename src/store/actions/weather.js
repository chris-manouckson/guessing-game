import * as actionTypes from '../actionTypes/weather';
import { citiesSetActual } from '../actions/cities';
import { requestGetWeather } from 'api';

export const weatherGetPending = () => ({
  type: actionTypes.WEATHER_GET_PENDING,
});

export const weatherGetSuccess = () => ({
  type: actionTypes.WEATHER_GET_SUCCESS,
});

export const weatherGetFailure = (error) => ({
  type: actionTypes.WEATHER_GET_FAILURE,
  error,
});

export const weatherGet = () => {
  return async (dispatch, getState) => {
    dispatch(weatherGetPending());

    const { cities: { all: cities } } = getState();

    try {
      for (let i = 0; i < cities.length; i++) {
        const { name: cityName } = cities[i];
        
        const data = await requestGetWeather(cityName);

        dispatch(citiesSetActual(cityName, Math.round(data.main.temp)));
      }

      dispatch(weatherGetSuccess());
    } catch (error) {
      // TODO: display error message.
      console.log(error);

      dispatch(weatherGetFailure(error));
    }
  };
};
