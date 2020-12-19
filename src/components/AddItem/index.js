/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Form, Header } from 'semantic-ui-react';
import AddItemField from 'src/containers/AddItemField';

const AddItem = ({ open, toggleOpen, item, fullState, addItem }) => {
  const labels = fullState[`${item.name}`].labelFr;

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
        onOpen={() => toggleOpen()}
        onClose={() => toggleOpen()}
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
            onClick={() => toggleOpen()}
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
  open: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  fullState: PropTypes.object.isRequired,
  addItem: PropTypes.func.isRequired,
};

export default AddItem;
