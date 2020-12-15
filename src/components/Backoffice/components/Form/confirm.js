import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

import { deleteCountry } from '../../requests';

function Confirm({ id }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      closeIcon
      size="mini"
      open={open}
      trigger={<Button color="red">Supprimer</Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      {/* <Header icon="archive" content="Archive Old Messages" /> */}
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
          }}
        >
          <Icon name="checkmark" /> Oui
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default Confirm;
