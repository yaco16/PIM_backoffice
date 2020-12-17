import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import countries from '../middlewares/countries';
import currencies from '../middlewares/currencies';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    countries,
    currencies,
  ),
);

const store = createStore(
  rootReducer,
  enhancers,
);

export default store;
