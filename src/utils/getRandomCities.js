import { cityNames } from '../constants';

const getRandomCities = (citiesCount = 5) => {
  const randomCities = new Set();

  while (randomCities.size < citiesCount) {
    const randomIndex = Math.floor(Math.random() * cityNames.length);

    randomCities.add(cityNames[randomIndex]);
  }
  
  return [...randomCities];
};

export default getRandomCities;
