import reducers from '../reducers/index';
import DevTools from '../devTools';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

const logger = createLogger();
const store = createStore(
  reducers,
  DevTools.instrument(),
  applyMiddleware(logger)
);

export default store;