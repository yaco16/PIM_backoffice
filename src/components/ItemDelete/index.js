/* eslint-disable no-console */
import React from 'react';
// import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button,
  Icon,
  Modal,
} from 'semantic-ui-react';

// import { deleteCurrency } from 'src/selectors/requests';

const Delete = ({ id }) => {
  console.log('id:', id);

  const handleOnCancel = (event) => {
    event.preventDefault();
  };
  const handleOnValid = (event) => {
    event.preventDefault();
  };
  return (
    <Modal
      closeIcon
      size="mini"
      open
      trigger={<Button color="red">Supprimer</Button>}
      // onClose={() => setOpen(false)}
      // onOpen={() => setOpen(true)}
    >
      <Modal.Content>
        <p>Confirmer la suppression</p>
      </Modal.Content>
      <Modal.Actions>
        <Button color="red" onClick={handleOnCancel}>
          <Icon name="remove" /> Non
        </Button>
        <Button
          color="green"
          onClick={handleOnValid}
        >
          <Icon name="checkmark" /> Oui
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

Delete.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Delete;
