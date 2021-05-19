import React from 'react';

import { requestGetWeather } from 'api';
import { Layout } from 'components/common';

const Home = () => {
  React.useEffect(() => {
    (async () => {
      try {
        const response = await requestGetWeather();

        console.log(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <Layout>
      <h1>Welcome!</h1>
    </Layout>
  );
};

export default Home;
