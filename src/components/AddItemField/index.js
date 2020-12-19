import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

const AddItemField = ({
  type,
  name,
  label,
  inputValue,
  changeInputValue,
}) => (
  <Form.Input
    fluid
    type={type}
    name={name}
    label={label}
    value={inputValue}
    onChange={(event) => changeInputValue(event.target.value)}
  />
);

AddItemField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  changeInputValue: PropTypes.func.isRequired,
};

export default AddItemField;
