/* eslint-disable no-console */

const initialState = {
  homeCategories: [
    {
      id: 1,
      name: 'countries',
      nameFr: 'pays',
      nameFr2: 'un pays',
    },
    {
      id: 2,
      name: 'currencies',
      nameFr: 'devises',
      nameFr2: 'une devise',
    },
    {
      id: 3,
      name: 'customers',
      nameFr: 'clients',
      nameFr2: 'un client',
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
