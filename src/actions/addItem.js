export const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';
export const CREATE_ITEM = 'CREATE_ITEM';
export const UPDATE_MODAL_OPENING = 'UPDATE_MODAL_OPENING';
export const UPDATE_LOADER = 'UPDATE_LOADER';

export const updateInputValue = (inputNames, inputValues) => ({
  type: UPDATE_INPUT_VALUE,
  inputNames,
  inputValues,
});

export const createItem = (category) => ({
  type: CREATE_ITEM,
  category,
});

export const updateModalOpening = () => ({
  type: UPDATE_MODAL_OPENING,
});

export const updateLoader = () => ({
  type: UPDATE_LOADER,
});
