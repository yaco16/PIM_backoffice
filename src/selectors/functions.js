/* eslint-disable no-console */
export const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const changeName = (array, categoryName) => {
  const newArray = array.homeCategories.find((obj) => obj.name === categoryName);
  return capitalize(newArray.nameSingular);
};
