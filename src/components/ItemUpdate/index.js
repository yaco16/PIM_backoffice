/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Modal,
  Form,
  Header,
  Loader,
  Dimmer,
} from 'semantic-ui-react';

import AddItemField from 'src/containers/AddItemField';
// import { changeName } from 'src/selectors/functions';

const UpdateItem = ({
  // modalIsOpen,
  // toggleModal,
  // loaderIsActive,
  // toggleLoader,
  // item,
  // fullState,
  // addItem,
}) => {
  const labels = fullState[`${item.name}`].labelFr;

  const handleSubmit = async (event) => {
    event.preventDefault();
    toggleLoader();
    // const category = changeName(fullState.homeCategories, item.name);
    // await addItem(`${category}`);
    await addItem(`${item.name}`);
    await toggleLoader();
    toggleModal();
  };

  return (
    <div>
      <Modal
        closeIcon
        open={modalIsOpen}
        as={Form}
        trigger={<Button color="green">Ajouter {item.nameFr2}</Button>}
        size="small"
        onOpen={() => toggleModal()}
        onClose={() => toggleModal()}
        onSubmit={(event) => handleSubmit(event)}
      >
        <Header content={`Ajouter ${item.nameFr2}`} />
        <Modal.Content>
          {labels.map((label) => (
            <AddItemField
              type="text"
              name={Object.keys(label)[0]}
              label={Object.values(label)[0]}
              key={Object.keys(label)[0]}
            />
          ))}
        </Modal.Content>

        <Modal.Actions>
          <Button type="button" basic color="red" onClick={() => toggleModal()}>
            Annuler
          </Button>
          <Button type="submit" color="green">
            Envoyer
          </Button>
        </Modal.Actions>
        {loaderIsActive && (
          <div>
            <Dimmer active inverted>
              <Loader size="massive">Loading</Loader>
            </Dimmer>
          </div>
        )}
      </Modal>
    </div>
  );
};

AddItem.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  loaderIsActive: PropTypes.bool.isRequired,
  toggleLoader: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  fullState: PropTypes.object.isRequired,
  addItem: PropTypes.func.isRequired,
};

export default UpdateItem;
