import { cityNames } from '../constants';

const requestGetDataset = async (cityName = cityNames[0], units = 'metric') => {
  const baseUrl = process.env.REACT_APP_API_URL;

  const params = new URLSearchParams();

  params.append('appid', process.env.REACT_APP_API_KEY);
  params.append('q', cityName);
  params.append('units', units);

  const response = await fetch(`${baseUrl}/weather?${params.toString()}`, {
    cache: 'no-cache',
  });

  if (response.status === 200) {
    return response.json();
  }

  return null;
};

export default requestGetDataset;
