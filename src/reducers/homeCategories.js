/* eslint-disable no-console */

const initialState = {
  homeCategories: [
    {
      id: 1,
      name: 'countries',
      nameFr: 'pays',
    },
    {
      id: 2,
      name: 'currencies',
      nameFr: 'devises',
    },
    {
      id: 3,
      name: 'customers',
      nameFr: 'clients',
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
