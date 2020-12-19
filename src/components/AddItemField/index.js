import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

const AddItemField = ({
  type,
  name,
  label,
  value,
  changeInputValue,
}) => (
  <Form.Input
    fluid
    type={type}
    name={name}
    label={label}
    value={value}
    onChange={(event) => changeInputValue(event.target.value)}
  />
);

AddItemField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  changeInputValue: PropTypes.func.isRequired,
};

export default AddItemField;
