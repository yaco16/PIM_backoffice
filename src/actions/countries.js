export const SAVE_COUNTRIES = 'SAVE_COUNTRIES';
export const FETCH_COUNTRIES = 'FETCH_COUNTRIES';
export const SHOW_COUNTRIES = 'SHOW_COUNTRIES';

export const saveCountries = (countries) => ({
  type: SAVE_COUNTRIES,
  countries,
});

export const fetchCountries = () => ({
  type: FETCH_COUNTRIES,
});
