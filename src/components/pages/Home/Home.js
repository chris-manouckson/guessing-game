import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { citiesGoToNext, citiesSetGuess, weatherGet } from 'store/actions';
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

  const handleSubmit = useCallback((value) => {
    dispatch(citiesSetGuess(cities[currentIndex].name, value));
    
    if (currentIndex === cities.length - 1) {
      dispatch(weatherGet());
    }

    dispatch(citiesGoToNext());
  }, [currentIndex, cities, dispatch]);

  return (
    <Layout>
      <Container>
        <MainAreaContainer>
          {currentIndex < cities.length && (
            <MainArea
              cityName={cities[currentIndex].name}
              onSubmit={handleSubmit}
            />
          )}
        </MainAreaContainer>

        <CityContainer cities={cities} />
      </Container>
    </Layout>
  );
};

export default Home;
