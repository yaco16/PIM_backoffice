import { createStore, compose, applyMiddleware } from 'redux';
import reducer from '../reducer';
import countries from '../middlewares/countries';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const enhancers = composeEnhancers(
//   applyMiddleware(
//     countries,
//   ),
// );

const store = createStore(
  reducer,
  applyMiddleware(countries),
  // eslint-disable-next-line no-underscore-dangle
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
