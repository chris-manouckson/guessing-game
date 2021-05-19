import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { citiesGoToNext, citiesSetGuess, citiesSetActual } from 'store/actions';
import { requestGetWeather } from 'api';
import { Layout } from 'components/common';
import CityContainer from './CityContainer';
import MainArea from './MainArea';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

const MainAreaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Home = () => {
  const dispatch = useDispatch();

  const cities = useSelector(useCallback(state => state.cities.all, []));
  const currentIndex = useSelector(useCallback(state => state.cities.currentIndex, []));

  const handleSubmit = useCallback(async (value) => {
    dispatch(citiesSetGuess(cities[currentIndex].name, value));

    if (currentIndex === cities.length - 1) {
      try {
        for (let i = 0; i < cities.length; i++) {
          const { name: cityName } = cities[i];
          
          const data = await requestGetWeather(cityName);

          dispatch(citiesSetActual(cityName, Math.round(data.main.temp)));
        }
      } catch (error) {
        // TODO: display error message.
        console.log(error);
      }

      return;
    }

    dispatch(citiesGoToNext());
  }, [currentIndex, cities, dispatch]);

  return (
    <Layout>
      <Container>
        <MainAreaContainer>
          <MainArea
            cityName={cities[currentIndex].name}
            onSubmit={handleSubmit}
          />
        </MainAreaContainer>

        <CityContainer cities={cities} />
      </Container>
    </Layout>
  );
};

export default Home;
