import * as React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// import {wit} from '@loadable/component';
import { renderRoutes } from 'react-router-config';
import { configureAppStore } from '../shared/store';
import createHistory from '../shared/store/history';
import rootReducer from './root-reducer';
import routes from './routes';

const history = createHistory();

// Grab the state from a global variable injected into the server-generated HTML
const preloadState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

// Create Redux store with initial state or use the store
// Create/use the store
// history MUST be passed here if you want syncing between server on initial route
const store =
  window.store ||
  configureAppStore({
    initialState: preloadState,
    reducer: rootReducer,
  });
// const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;

hydrate(
  <Provider store={store}>
    <Router history={history}>
      <HelmetProvider>{renderRoutes(routes)}</HelmetProvider>
    </Router>
  </Provider>,
  document.querySelector('#app')
);

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept();
  }

  if (!window.store) {
    window.store = store;
  }
}
