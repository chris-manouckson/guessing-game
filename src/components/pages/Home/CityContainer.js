import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 70px 0;
  border-top: 1px solid #ccc;
`;

const CityItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 12px;
  padding: 12px 0;
`;

const CityItemName = styled.b`
  font-size: 1.2rem;
  margin-bottom: 6px;
`;

const CityContainer = (props) => {
  const { cities } = props;

  return (
    <Container>
      {cities.map(city => (
        <CityItem
          key={city.name}
          isGuessCorrect={Math.abs(city.actual - city.guess) <= 5}
        >
          <CityItemName>{city.name}</CityItemName>
          <p>Your guess: {city.guess}</p>
          <p>Actual temperature: {city.actual}</p>
        </CityItem>
      ))}
    </Container>
  );
};

CityContainer.defaultProps = {
  cities: [],
};

export default CityContainer;
