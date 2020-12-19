/* eslint-disable no-console */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Form, Header } from 'semantic-ui-react';

const AddItem = ({ item, fullState, inputValue, changeInputValue }) => {
  const labels = fullState[`${item.name}`].labelFr;
  console.log('labels:', labels);

  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    changeInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('je suis dans submit');
  };

  return (
    <div>
      <Modal
        closeIcon
        open={open}
        as={Form}
        trigger={<Button color="green">Ajouter {item.nameFr2}</Button>}
        size="small"
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        onSubmit={() => handleSubmit()}
      >
        <Header content={`Ajouter ${item.nameFr2}`} />
        <Modal.Content>
          <Form.Input
            fluid
            type="text"
            name="name"
            label="écrire ci-dessous"
            value={inputValue}
            onChange={handleChange}
          />
          {/* {labels.map((label) => (
            <Form.Input
              fluid
              type="text"
              name={Object.keys(label)[0]}
              value={inputValue}
              label={Object.values(label)[0]}
              // placeholder="Exemple : France"
              onChange={handleChange}
              key={Math.random()}
            />
          ))} */}
        </Modal.Content>
        <Modal.Actions>
          <Button
            type="button"
            basic
            color="red"
            onClick={() => setOpen(false)}
          >
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

AddItem.propTypes = {
  item: PropTypes.object.isRequired,
  fullState: PropTypes.object.isRequired,
  inputValue: PropTypes.string.isRequired,
  changeInputValue: PropTypes.func.isRequired,
};

export default AddItem;
