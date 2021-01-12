/* eslint-disable no-console */
import { UPDATE_MODAL_OPENING2 } from 'src/actions/updateItem';

const initialState = {
  modalIsOpen: true,
};

const updateItem = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_MODAL_OPENING2: {
      console.log('je suis dans le reducer de updateItem');
      return {
        ...state,
        modalIsOpen: !state.modalIsOpen,
      };
    }

    default:
      return state;
  }
};

export default updateItem;
