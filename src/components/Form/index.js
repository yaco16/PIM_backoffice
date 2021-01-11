/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './style.scss';
import { updateCountry } from 'src/selectors/requests';
import Confirm from './confirm';

const Formulaire = (props) => {
  const {
    id,
    name,
    phone_prefix,
    iso_code,
    zone_id,
    currency_id,
  } = props.location.state;

  const [state, setState] = useState({
    id,
    name,
    phone_prefix,
    iso_code,
    zone_id,
    currency_id,
  });

  const history = useHistory();

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    updateCountry(state);
    history.push('/countries');
  };

  return (
    <Form className="form__container">
      <div className="form__subContainer">
        <Header className="form__header" content="Modifier un pays" />
        <Confirm className="form__delete" id={id} />
      </div>
      <Form.Field>
        <label>Nom</label>
        <Form.Input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Préfixe téléphonique</label>
        <Form.Input
          type="text"
          name="phone_prefix"
          value={state.phone_prefix}
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Code ISO</label>
        <Form.Input
          type="text"
          name="iso_code"
          value={state.iso_code}
          onChange={handleChange}
        />
      </Form.Field>

      <Button
        type="button"
        basic
        color="red"
        onClick={() => history.push('/countries')}
      >
        Annuler
      </Button>
      <Button type="submit" color="green" onClick={() => handleSubmit()}>
        Envoyer
      </Button>
    </Form>
  );
};

export default Formulaire;
