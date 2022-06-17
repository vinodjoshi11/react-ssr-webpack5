import thunk from 'redux-thunk';
// import { applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

type StoreParams = {
  initialState?: any; //{ [key: string]: any };
  middleware?: any[];
  reducer: any;
};

export const configureAppStore = ({
  initialState,
  middleware = [],
  reducer,
}: StoreParams) => {
  //   const devtools =
  //     typeof window !== 'undefined' &&
  //     typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function' &&
  //     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ actionsBlacklist: [] });

  //   const composeEnhancers = devtools || compose;

  const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: initialState,
  });
  // composeEnhancers(applyMiddleware(...[thunk].concat(...middleware)))

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../../client/root-reducer', () =>
      store.replaceReducer(require('../../client/root-reducer').default)
    );
  }

  return store;
};

export default configureAppStore;
