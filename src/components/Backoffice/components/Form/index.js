/* eslint-disable no-console */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './style.scss';
import { updCountry } from '../../requests';
import Confirm from './confirm';

const Form1 = (props) => {
  const {
    id,
    cname,
    phone_prefix,
    iso_code,
    zone_id,
    currency_id,
  } = props.location.state;
  // console.log(id);

  const [inputValue, setInputValue] = useState('');

  const history = useHistory();

  const handleChange = (value) => {
    console.log('je suis dans handleChange');
    console.log(value);
    setInputValue(value);
  };

  const handleSubmit = () => {
    console.log('je suis dans handleSubmit');
    console.log(inputValue);
    const dataToSend = {
      id: id,
      name: inputValue,
    };
    updCountry(dataToSend);
  };

  return (
    <Form className="form__container">
      <div className="form__subContainer">
        <Header className="form__header" content="Modifier un pays" />
        <Confirm className="form__delete" id={id} />
      </div>
      <Form.Field>
        <label>Nom</label>
        <input
          type="text"
          name="name"
          value={inputValue}
          onChange={(event) => {
            event.preventDefault();
            handleChange(event.target.value);
          }}
          placeholder={cname}
        />
      </Form.Field>
      <Form.Field>
        <label>Préfixe téléphonique</label>
        <input placeholder={phone_prefix} />
      </Form.Field>
      <Form.Field>
        <label>Code ISO</label>
        <input placeholder={iso_code} />
      </Form.Field>
      <Form.Field>
        <label>Zone</label>
        <input placeholder={zone_id} />
      </Form.Field>
      <Form.Field>
        <label>Devise</label>
        <input placeholder={currency_id} />
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

export default Form1;
