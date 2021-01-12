/* eslint-disable no-console */
import { UPDATE_MODAL_OPENING2, UPDATE_ITEM, UPDATE_INPUT_VALUE2 } from 'src/actions/updateItem';

const initialState = {
  modalIsOpen: false,
  itemToUpdate: [],
  // id: '',
  // name: '',
  // symbol: '',
  // iso_code: '',
  // numeric_iso_code: '',
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
      console.log(action.inputNames);
      return {
        ...state,
        [action.inputNames]: action.inputValues,
      };
    }

    default:
      return state;
  }
};

export default updateItem;
