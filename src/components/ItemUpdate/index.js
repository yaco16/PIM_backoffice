/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Modal,
  Form,
  Header,
  Icon,
  Loader,
  Dimmer,
} from 'semantic-ui-react';

import './style.scss';
import UpdateItemField from 'src/containers/ItemUpdate-field';
// import Delete from 'src/components/ItemDelete';

const UpdateItem = ({ modalIsOpen, toggleModal, item, updateItemInDb }) => {
  const [firstOpen, setFirstOpen] = React.useState(false);
  const [secondOpen, setSecondOpen] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('je suis dans le submit de UpdateItem');
    // updateItemInDb();
    // toggleLoader();
    // const category = changeName(fullState.homeCategories, item.name);
    // await addItem(`${category}`);
    // await addItem(`${item.name}`);
    // await toggleLoader();
    // toggleModal();
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
        <div className="modal1__container">
          <div className="modal1__subContainer">
            <Header
              className="modal1__header"
              content={`Modifier ${item.name}`}
            />
            <Button
              className="modal1__delete"
              color="red"
              onClick={() => setSecondOpen(true)}
            >
              Supprimer
            </Button>
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

        <div className="modal2__confirm">
          <Modal
            // centered
            onClose={() => setSecondOpen(false)}
            open={secondOpen}
            size="mini"
          >
            <Modal.Content>
              <p>Confirmer la suppression ?</p>
            </Modal.Content>
            <Modal.Actions>
              <Button color="red" onClick={() => setSecondOpen(false)}>
                <Icon name="remove" /> Non
              </Button>
              <Button
                color="green"
                onClick={() => {
                  setSecondOpen(false);
                  // deleteCountry(id);
                }}
              >
                <Icon name="checkmark" /> Oui
              </Button>
            </Modal.Actions>
          </Modal>
        </div>
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
