import React, { useState } from 'react';
import { Button, Modal, Form, Header } from 'semantic-ui-react';


import { editCountry } from '../../requests';

const AddCountry = () => {
  const [open, setOpen] = useState(false);
  // const [form, setForm] = useState({});
  const [inputValue, setInputValue] = useState('');

  const handleChange = (value) => {
    setInputValue(value);
  };

  const handleSubmit = () => {
    editCountry(inputValue);
  };

  return (
    <div>
      <Modal
        closeIcon
        open={open}
        as={Form}
        trigger={<Button>Ajouter un pays</Button>}
        size="small"
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        onSubmit={() => {
          setOpen(false);
          // editCountry();
          handleSubmit();
        }}
      >
        <Header content="Ajouter un pays" />
        <Modal.Content>
          {/* <Form.Input fluid name="title" label="Title" placeholder="Title" /> */}
          <Form.Input
            fluid
            name="name"
            value={inputValue}
            // label="Pays"
            placeholder="Name"
            onChange={(event) => handleChange(event.target.value)}
          />
        </Modal.Content>
        <Modal.Actions>
          <Button type="cancel" basic color="red">
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
