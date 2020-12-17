import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button,
  Icon,
  Modal,
} from 'semantic-ui-react';

import { deleteCountry } from 'src/requests';

const Confirm = ({ id }) => {
  const [open, setOpen] = useState(false);
  const history = useHistory();

  return (
    <Modal
      closeIcon
      size="mini"
      open={open}
      trigger={<Button color="red">Supprimer</Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Modal.Content>
        <p>Confirmer la suppression</p>
      </Modal.Content>
      <Modal.Actions>
        <Button color="red" onClick={() => setOpen(false)}>
          <Icon name="remove" /> Non
        </Button>
        <Button
          color="green"
          onClick={() => {
            setOpen(false);
            deleteCountry(id);
            history.push('/countries');
          }}
        >
          <Icon name="checkmark" /> Oui
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

Confirm.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Confirm;
