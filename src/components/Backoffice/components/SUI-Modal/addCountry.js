import React, { useState } from 'react';
import { Button, Modal, Form, Header } from 'semantic-ui-react';

import { createCountry } from '../../requests';

const AddCountry = () => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (value) => {
    setInputValue(value);
  };

  const handleSubmit = () => {
    if (inputValue.length > 0) {
      setOpen(false);
      createCountry(inputValue);
    }
  };

  return (
    <div>
      <Modal
        closeIcon
        open={open}
        as={Form}
        trigger={<Button color="green">Ajouter un pays</Button>}
        size="small"
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        onSubmit={() => handleSubmit()}
      >
        <Header content="Ajouter un pays" />
        <Modal.Content>
          {/* <Form.Input fluid name="title" label="Title" placeholder="Title" /> */}
          <Form.Input
            fluid
            name="name"
            value={inputValue}
            // label="Pays"
            placeholder="Nom du pays"
            onChange={(event) => handleChange(event.target.value)}
          />
          {/* <Form.Input fluid name="title" label="Title" placeholder="Title" /> */}
          <Form.Input
            fluid
            name="phone_prefix"
            value={inputValue}
            // label="Pays"
            placeholder="Indicatif téléphonique"
            onChange={(event) => handleChange(event.target.value)}
          />
        </Modal.Content>
        <Modal.Actions>
          <Button type="button" basic color="red" onClick={() => setOpen(false)}>
            Annuler
          </Button>
          <Button type="submit" color="green">
            Envoyer
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default AddCountry;
