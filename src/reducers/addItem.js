/* eslint-disable no-console */
import { UPD_INPUT_VALUE } from 'src/actions/addItem';

const initialState = {
  newValue: '',
};

const addItem = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPD_INPUT_VALUE: {
      return {
        state,
        newValue: action.newValue,
      };
    }
    default:
      return state;
  }
};

export default addItem;
