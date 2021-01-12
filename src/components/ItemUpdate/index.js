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

import UpdateItemField from 'src/containers/ItemUpdate-field';
import Delete from 'src/components/ItemDelete';

const UpdateItem = ({ modalIsOpen, toggleModal, item, updateItemInDb }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    updateItemInDb();
    // toggleLoader();
    // const category = changeName(fullState.homeCategories, item.name);
    // await addItem(`${category}`);
    // await addItem(`${item.name}`);
    // await toggleLoader();
    toggleModal();
  };

  return (
    <div>
      <Modal
        closeIcon
        open={modalIsOpen}
        as={Form}
        size="small"
        onOpen={() => toggleModal()}
        onClose={() => toggleModal()}
        onSubmit={(event) => handleSubmit(event)}
      >
        <div className="form__container">
          <div className="form__subContainer">
            <Header className="form__header" content={`Modifier ${item.name}`} />
            <Delete className="form__delete" />
          </div>
        </div>
        <Modal.Content>
          {Object.keys(item).map((data) => (
            <UpdateItemField
              type="text"
              name={data}
              label={data}
              key={data.id}
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
        {/* {loaderIsActive && (
          <div>
            <Dimmer active inverted>
              <Loader size="massive">Loading</Loader>
            </Dimmer>
          </div>
        )} */}
      </Modal>
    </div>
  );
};

UpdateItem.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  item: PropTypes.array.isRequired,
  updateItemInDb: PropTypes.func.isRequired,
  // loaderIsActive: PropTypes.bool.isRequired,
  // toggleLoader: PropTypes.func.isRequired,
  // item: PropTypes.object.isRequired,
  // fullState: PropTypes.object.isRequired,
  // addItem: PropTypes.func.isRequired,
};

export default UpdateItem;
