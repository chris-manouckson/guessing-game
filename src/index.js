import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import ReactDOM from 'react-dom';

import store from 'store';
import App from 'components/App';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
