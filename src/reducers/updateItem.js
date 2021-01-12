/* eslint-disable no-console */
import { UPDATE_MODAL_OPENING2, UPDATE_ITEM } from 'src/actions/updateItem';

const initialState = {
  modalIsOpen: false,
  itemToUpdate: [],
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

    default:
      return state;
  }
};

export default updateItem;
