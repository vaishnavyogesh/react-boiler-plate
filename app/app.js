import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { QueryParamProvider } from 'use-query-params';
import history from 'utils/history';
import 'sanitize.css/sanitize.css';

// Import root app
import App from 'containers/App'; // eslint-disable-line

import configureStore from './configureStore';

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <QueryParamProvider ReactRouterRoute={Route}>
          <Route path="/" component={App} />
        </QueryParamProvider>
      </ConnectedRouter>
    </Provider>,
    MOUNT_NODE
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

render();