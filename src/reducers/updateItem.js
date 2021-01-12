/* eslint-disable no-console */
import {
  UPDATE_MODAL_OPENING2,
  UPDATE_ITEM,
  UPDATE_INPUT_VALUE2,
  UPDATE_ITEM_IN_DATABASE,
} from 'src/actions/updateItem';

import { updateCurrency } from 'src/selectors/requests';

const initialState = {
  modalIsOpen: false,
  itemToUpdate: [],
  // fields: {
  //   id: '123',
  //   name: '',
  //   symbol: '',
  //   iso_code: '',
  //   numeric_iso_code: '',
  // },
  // fields: {},
};

const updateItem = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_MODAL_OPENING2: {
      return {
        ...state,
        modalIsOpen: !state.modalIsOpen,
      };
    }

    case UPDATE_ITEM: {
      return {
        ...state,
        itemToUpdate: action.item,
      };
    }

    case UPDATE_INPUT_VALUE2: {
      console.log('je suis dans UPDATE_INPUT_VALUE2');
      // console.log(state.updateItem.fields);
      return {
        ...state,
        fields: {
          [action.inputNames]: action.inputValues,
        },
      };
    }

    case UPDATE_ITEM_IN_DATABASE: {
      console.log('fields du reducer', state);
      updateCurrency(state.fields);
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};

export default updateItem;
