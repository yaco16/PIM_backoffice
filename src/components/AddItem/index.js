/* eslint-disable no-console */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Form, Header } from 'semantic-ui-react';
import AddItemField from 'src/containers/AddItemField';

const AddItem = ({ item, fullState, addItem }) => {
  const labels = fullState[`${item.name}`].labelFr;
  // console.log('labels:', labels);

  const [open, setOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('je suis dans submit');
    addItem();
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
        onSubmit={(event) => handleSubmit(event)}
      >
        <Header content={`Ajouter ${item.nameFr2}`} />
        <Modal.Content>
          {labels.map((label) => (
            <AddItemField
              type="text"
              name={Object.keys(label)[0]}
              label={Object.values(label)[0]}
              key={Math.random()}
            />
          ))}
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
  addItem: PropTypes.func.isRequired,
};

export default AddItem;
