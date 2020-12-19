export const UPD_INPUT_VALUE = 'UPD_INPUT_VALUE';
export const CREATE_ITEM = 'CREATE_ITEM';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';

export const updInputValue = (inputNames, inputValues) => ({
  type: UPD_INPUT_VALUE,
  inputNames,
  inputValues,
});

export const createItem = () => ({
  type: CREATE_ITEM,
});

export const toggleModal = () => ({
  type: TOGGLE_MODAL,
});
