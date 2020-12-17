export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';
export const FETCH_CURRENCIES = 'FETCH_CURRENCIES';

export const saveCurrencies = (currencies) => ({
  type: SAVE_CURRENCIES,
  currencies,
});

export const fetchCurrencies = () => ({
  type: FETCH_CURRENCIES,
});
