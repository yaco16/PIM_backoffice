export const SAVE_COUNTRIES = 'SAVE_COUNTRIES';

export const saveCountries = (countries) => ({
  type: SAVE_COUNTRIES,
  countries,
});
