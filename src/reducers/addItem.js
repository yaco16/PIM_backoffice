/* eslint-disable no-console */
import { UPD_INPUT_VALUE, CREATE_ITEM } from 'src/actions/addItem';
import { createCountry } from 'src/requests';

const initialState = {
  name: '',
  phone_prefix: '',
  iso_code: '',
};

const addItem = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPD_INPUT_VALUE: {
      return {
        ...state,
        [action.inputNames]: action.inputValues,
      };
    }

    case CREATE_ITEM: {
      const query = {
        name: state.name,
        phone_prefix: state.phone_prefix,
        iso_code: state.iso_code,
        zone_id: '1',
        currency_id: '1',
      };
      return createCountry(query);
    }

    default:
      return state;
  }
};

export default addItem;
