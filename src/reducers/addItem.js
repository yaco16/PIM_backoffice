/* eslint-disable no-console */
import {
  UPDATE_INPUT_VALUE,
  CREATE_ITEM,
  UPDATE_MODAL_OPENING,
  UPDATE_LOADER,
} from 'src/actions/addItem';
// eslint-disable-next-line import/no-cycle
import { createCountry, createCurrency } from 'src/requests';

const initialState = {
  modalIsOpen: false,
  loaderIsActive: false,
  name: '',
  phone_prefix: '',
  iso_code: '',
};

const addItem = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_INPUT_VALUE: {
      return {
        ...state,
        [action.inputNames]: action.inputValues,
      };
    }

    case CREATE_ITEM: {
      if (action.category === 'countries') {
        createCountry(state);
      }
      if (action.category === 'currencies') {
        createCurrency(state);
      }
      return state;
    }

    case UPDATE_MODAL_OPENING: {
      return {
        ...state,
        modalIsOpen: !state.modalIsOpen,
      };
    }

    case UPDATE_LOADER: {
      return {
        ...state,
        loaderIsActive: !state.loaderIsActive,
      };
    }

    default:
      return state;
  }
};

export default addItem;
