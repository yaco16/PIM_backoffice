export const UPDATE_MODAL_OPENING2 = 'UPDATE_MODAL_OPENING2';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const UPDATE_INPUT_VALUE2 = 'UPDATE_INPUT_VALUE2';
export const UPDATE_ITEM_IN_DATABASE = 'UPDATE_ITEM_IN_DATABASE';

export const updateModalOpening2 = () => ({
  type: UPDATE_MODAL_OPENING2,
});

export const updItem = (item) => ({
  type: UPDATE_ITEM,
  item,
});

export const updateInputValue = (inputNames, inputValues) => ({
  type: UPDATE_INPUT_VALUE2,
  inputNames,
  inputValues,
});

export const updateItemInDatabase = () => ({
  type: UPDATE_ITEM_IN_DATABASE,
});
