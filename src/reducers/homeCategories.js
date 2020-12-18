/* eslint-disable no-console */

const initialState = {
  homeCategories: [
    {
      id: 1,
      name: 'countries',
    },
    {
      id: 2,
      name: 'currencies',
    },
    {
      id: 3,
      name: 'customers',
    },
  ],
};

const homeCategories = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default homeCategories;
