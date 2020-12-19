/* eslint-disable no-console */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Form, Header } from 'semantic-ui-react';

import { createCountry } from 'src/requests';

const AddItem = ({ item, fullState }) => {
  const labels = fullState[`${item.name}`].labelFr;
  console.log('labels:', labels);

  const [open, setOpen] = useState(false);
  // const [inputValue, setInputValue] = useState('');
  // const {
  //   name,
  //   onChange,
  //   value,
  // } = props;

  const [state, setState] = useState({
    name: '',
    phone_prefix: '',
    iso_code: '',
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.name.length > 0) {
      setOpen(false);
      createCountry(state);
    }
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
          {labels.map((label) => (
            <Form.Input
              fluid
              type="text"
              name={Object.keys(label)[0]}
              // value={state.name}
              label={Object.values(label)[0]}
              // placeholder="Exemple : France"
              onChange={handleChange}
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
  // currenciesName: PropTypes.string.isRequired,
};

export default AddItem;